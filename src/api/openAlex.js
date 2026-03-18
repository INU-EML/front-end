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
 * Uses two-level caching:
 * 1. Result cache: stores resolved values
 * 2. Request cache: tracks in-flight requests to prevent duplicate network calls
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
    // Log invalid DOI for debugging, but don't throw
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

  // Validate API key
  const apiKey = import.meta.env.VITE_OPENALEX_API_KEY;
  if (!apiKey) {
    console.warn('VITE_OPENALEX_API_KEY environment variable not set');
    return null;
  }

  // Create the API request promise
  const requestPromise = (async () => {
    try {
      // Only use DOI-based single work lookup endpoint
      // Format: https://api.openalex.org/works/doi:{normalizedDOI}
      const url = `https://api.openalex.org/works/doi:${normalizedDoi}?api_key=${apiKey}`;

      const response = await fetch(url);

      if (!response.ok) {
        // Don't retry or fallback - just return null
        if (response.status === 404) {
          console.debug(`DOI not found in OpenAlex: ${normalizedDoi}`);
        } else {
          console.warn(`OpenAlex API error (${response.status}) for DOI: ${normalizedDoi}`);
        }
        return null;
      }

      const data = await response.json();

      // Extract cited_by_count from response
      // This is guaranteed to be a number >= 0
      if (data && typeof data.cited_by_count === 'number') {
        const citationCount = data.cited_by_count;

        // Store in result cache before returning
        citationCache.set(normalizedDoi, citationCount);

        return citationCount;
      }

      // No citation data available
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
 * Useful for loading pages with multiple publications
 *
 * @param {string[]} dois - Array of DOIs to fetch
 * @returns {Promise<Object>} - Map of DOI -> citation count
 */
const fetchCitationsForMultiple = async (dois) => {
  const results = {};

  // Use Promise.allSettled to handle both success and failure cases
  const promises = dois.map(doi =>
    fetchCitationCount(doi).then(count => ({
      doi: normalizeDoi(doi) || doi,
      count
    }))
  );

  const settled = await Promise.allSettled(promises);

  settled.forEach((result, index) => {
    if (result.status === 'fulfilled') {
      results[result.value.doi] = result.value.count;
    } else {
      // This shouldn't happen with our error handling, but just in case
      results[dois[index]] = null;
    }
  });

  return results;
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

