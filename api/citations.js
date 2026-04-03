/**
 * Vercel Serverless Function: OpenAlex Citation Fetcher
 * 
 * This runs on the server (Vercel backend), NOT in the browser.
 * API key is kept SECRET and never exposed to the client.
 * 
 * Endpoint: /api/citations
 * Method: POST
 * Body: { dois: ['10.xxxx/yyyy', '10.aaaa/bbbb'] }
 * Response: { '10.xxxx/yyyy': 42, '10.aaaa/bbbb': 15 }
 */

// In-memory cache for this function execution
const citationCache = new Map();

/**
 * Normalize DOI to standard format: "10.xxxx/abcd"
 */
const normalizeDoi = (doi) => {
  if (!doi || typeof doi !== 'string') {
    return null;
  }

  let normalized = doi.trim();

  // Remove https:// or http:// prefix
  normalized = normalized.replace(/^https?:\/\//, '');

  // Remove common domain prefixes
  normalized = normalized.replace(/^(?:dx\.)?doi\.org\//, '');
  normalized = normalized.replace(/^[^/]+\/doifinder\//, '');

  // Remove doi: prefix
  normalized = normalized.replace(/^doi:/, '');

  // Remove trailing punctuation and whitespace
  normalized = normalized.replace(/[.,;:!?\s]+$/, '');

  // Check if it matches DOI pattern: 10.XXXX/YYYY
  if (/^10\.\d+\/.+$/.test(normalized)) {
    return normalized;
  }

  return null;
};

/**
 * Fetch citation count for a single DOI
 */
const fetchCitationCount = async (doi, apiKey) => {
  if (!doi) return null;

  const normalizedDoi = normalizeDoi(doi);
  if (!normalizedDoi) {
    console.debug(`Invalid DOI format: ${doi}`);
    return null;
  }

  // Check cache first
  if (citationCache.has(normalizedDoi)) {
    return citationCache.get(normalizedDoi);
  }

  try {
    // OpenAlex API endpoint
    const url = `https://api.openalex.org/works/doi:${normalizedDoi}?api_key=${apiKey}`;

    const response = await fetch(url);

    if (!response.ok) {
      if (response.status === 404) {
        console.debug(`DOI not found in OpenAlex: ${normalizedDoi}`);
      } else {
        console.warn(`OpenAlex API error (${response.status}) for DOI: ${normalizedDoi}`);
      }
      return null;
    }

    const data = await response.json();

    if (data && typeof data.cited_by_count === 'number') {
      const citationCount = data.cited_by_count;
      citationCache.set(normalizedDoi, citationCount);
      return citationCount;
    }

    return null;
  } catch (error) {
    console.error(`Error fetching citation count for DOI ${normalizedDoi}:`, error);
    return null;
  }
};

/**
 * Main handler for POST requests
 */
export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { dois } = req.body;

    // Validate input
    if (!Array.isArray(dois) || dois.length === 0) {
      return res.status(400).json({ error: 'Invalid input: dois must be a non-empty array' });
    }

    // Limit batch size for security and performance
    if (dois.length > 100) {
      return res.status(400).json({ error: 'Too many DOIs: maximum 100 per request' });
    }

    // Get API key from Vercel environment variables (server-side only)
    const apiKey = process.env.OPENALEX_API_KEY;
    if (!apiKey) {
      console.error('OPENALEX_API_KEY environment variable not set');
      return res.status(500).json({ error: 'API key not configured' });
    }

    // Fetch all citations
    const citationPromises = dois.map(doi => fetchCitationCount(doi, apiKey));
    const results = await Promise.all(citationPromises);

    // Map results back to DOIs
    const citationMap = {};
    dois.forEach((doi, index) => {
      const normalizedDoi = normalizeDoi(doi);
      if (normalizedDoi) {
        citationMap[normalizedDoi] = results[index];
      }
    });

    // Cache-Control: allow browser cache but revalidate on server
    res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=3600');
    
    return res.status(200).json(citationMap);
  } catch (error) {
    console.error('API error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
