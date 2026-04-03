/**
 * OpenAlex API Service
 * Handles citation count fetching with DOI-based lookup and caching
 *
 * ⚠️ IMPORTANT: Only uses DOI-based single work lookup
 * Endpoint: https://api.openalex.org/works/doi:{normalizedDOI}
 *
 * This is FREE and counts against the unlimited free tier.
 * Search/filter/list endpoints are NOT used here.
 */

// Memory cache for resolved citation results (not promises)
// This prevents unnecessary re-computations and network hits
const citationCache = new Map();

/**
 * Normalize DOI to standard format: "10.xxxx/abcd"
 *
 * Handles various input formats:
 * - https://doi.org/10.xxxx/abcd
 * - http://doi.org/10.xxxx/abcd
 * - doi:10.xxxx/abcd
 * - http://www.nature.com/doifinder/10.xxxx/abcd (extract DOI part)
 * - 10.xxxx/abcd (already normalized)
 * - 10.xxxx/abcd. (with trailing punctuation)
 *
 * @param {string} doi - The DOI to normalize
 * @returns {string|null} - Normalized DOI or null if invalid
 */
const normalizeDoi = (doi) => {
  if (!doi || typeof doi !== 'string') {
    return null;
  }

  let normalized = doi.trim();

  // Remove https:// or http:// prefix
  normalized = normalized.replace(/^https?:\/\//, '');

  // Remove common domain prefixes (nature.com/doifinder/, doi.org/, etc.)
  normalized = normalized.replace(/^(?:dx\.)?doi\.org\//, '');
  normalized = normalized.replace(/^[^/]+\/doifinder\//, '');

  // Remove doi: prefix
  normalized = normalized.replace(/^doi:/, '');

  // Remove trailing punctuation and whitespace (period, comma, semicolon, etc.)
  normalized = normalized.replace(/[.,;:!?\s]+$/, '');

  // Check if it matches DOI pattern: 10.XXXX/YYYY
  // DOI must start with "10." followed by a number, then "/", then suffix
  if (/^10\.\d+\/.+$/.test(normalized)) {
    return normalized;
  }

  return null;
};

/**
 * In-flight request tracking
 * Prevents duplicate simultaneous requests for the same DOI
 * Stores the Promise while it's resolving
 */
const inFlightRequests = new Map();

/**
 * Fetch citation count from OpenAlex API using DOI
 * 
 * NOTE: Now calls Vercel serverless function instead of direct API
 * This keeps the API key secure on the server side.
 *
 * @param {string} doi - The DOI to fetch citations for
 * @returns {Promise<number|null>} - Citation count or null on failure
 */
const fetchCitationCount = async (doi) => {
  if (!doi) {
    return null;
  }

  const normalizedDoi = normalizeDoi(doi);
  if (!normalizedDoi) {
    console.debug(`Invalid DOI format: ${doi}`);
    return null;
  }

  // Check result cache first (fastest path)
  if (citationCache.has(normalizedDoi)) {
    return citationCache.get(normalizedDoi);
  }

  // Check if request is already in-flight
  if (inFlightRequests.has(normalizedDoi)) {
    return inFlightRequests.get(normalizedDoi);
  }

  // Create the API request promise calling our Vercel serverless function
  const requestPromise = (async () => {
    try {
      // Call our Vercel serverless function (server-side)
      // The API key is kept secure on the server, never exposed to browser
      const response = await fetch('/api/citations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ dois: [normalizedDoi] })
      });

      if (!response.ok) {
        console.warn(`API error (${response.status})`);
        return null;
      }

      const data = await response.json();

      // Extract citation count from response
      if (data && typeof data[normalizedDoi] === 'number') {
        const citationCount = data[normalizedDoi];
        citationCache.set(normalizedDoi, citationCount);
        return citationCount;
      }

      return null;
    } catch (error) {
      console.error(`Error fetching citation count for DOI ${normalizedDoi}:`, error);
      return null;
    } finally {
      // Clean up in-flight request tracking
      inFlightRequests.delete(normalizedDoi);
    }
  })();

  // Store in-flight request
  inFlightRequests.set(normalizedDoi, requestPromise);

  return requestPromise;
};

/**
 * Batch fetch citations for multiple DOIs
 * Efficient implementation: sends all DOIs to Vercel function in one batch
 * Reduces network calls and improves performance
 *
 * @param {string[]} dois - Array of DOIs to fetch
 * @returns {Promise<Object>} - Map of DOI -> citation count
 */
const fetchCitationsForMultiple = async (dois) => {
  const results = {};

  if (!dois || dois.length === 0) {
    return results;
  }

  try {
    // Normalize all DOIs first
    const normalizedDois = dois
      .map(doi => normalizeDoi(doi))
      .filter(doi => doi !== null);

    if (normalizedDois.length === 0) {
      return results;
    }

    // Call Vercel serverless function with batch of DOIs
    // This is much more efficient than individual calls
    const response = await fetch('/api/citations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ dois: normalizedDois })
    });

    if (!response.ok) {
      console.error(`Batch API error (${response.status})`);
      return results;
    }

    const data = await response.json();

    // Parse response and cache results
    Object.entries(data).forEach(([doi, count]) => {
      citationCache.set(doi, count);
      results[doi] = count;
    });

    return results;
  } catch (error) {
    console.error('Error fetching citations batch:', error);
    return results;
  }
};

/**
 * Get cached result without fetching
 * Useful for checking if data is already cached
 *
 * @param {string} doi - The DOI to check
 * @returns {number|null} - Cached citation count or null
 */
const getCachedCitation = (doi) => {
  const normalizedDoi = normalizeDoi(doi);
  if (!normalizedDoi) {
    return null;
  }
  return citationCache.get(normalizedDoi) || null;
};

/**
 * Clear entire cache
 * Useful for testing or manual refresh
 */
const clearCache = () => {
  citationCache.clear();
  inFlightRequests.clear();
};

/**
 * Get cache statistics
 * Useful for monitoring and debugging
 */
const getCacheStats = () => {
  return {
    cachedResults: citationCache.size,
    inFlightRequests: inFlightRequests.size,
    totalEntries: citationCache.size + inFlightRequests.size
  };
};

export {
  fetchCitationCount,
  fetchCitationsForMultiple,
  getCachedCitation,
  normalizeDoi,
  clearCache,
  getCacheStats
};

