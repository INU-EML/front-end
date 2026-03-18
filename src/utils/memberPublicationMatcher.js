/**
 * Utility functions for matching member names with publications
 */

/**
 * Normalize a name for comparison
 * - Convert to lowercase
 * - Trim whitespace
 * - Replace multiple spaces with single space
 * - Handle special characters in Korean/English names
 *
 * @param {string} name - The name to normalize
 * @returns {string} - Normalized name
 */
export const normalizeName = (name) => {
  if (!name || typeof name !== 'string') {
    return '';
  }

  return name
    .toLowerCase()
    .trim()
    .replace(/\s+/g, ' '); // Replace multiple spaces with single space
};

/**
 * Split authors string into individual author names
 * Handles comma and "and" separators
 *
 * @param {string} authorsString - Authors string like "Name1, Name2, and Name3"
 * @returns {string[]} - Array of normalized individual author names
 */
export const parseAuthors = (authorsString) => {
  if (!authorsString || typeof authorsString !== 'string') {
    return [];
  }

  // Replace "and" with comma for consistent splitting
  let cleaned = authorsString.replace(/\s+and\s+/gi, ', ');

  // Split by comma and asterisk (some authors have *)
  return cleaned
    .split(',')
    .map(author => normalizeName(author.replace('*', '')))
    .filter(author => author.length > 0);
};

/**
 * Check if a member is an author of a publication
 * Uses normalized name comparison and author parsing
 *
 * @param {string} memberName - Member's name to search for
 * @param {string} authorsString - Publication's authors string
 * @returns {boolean} - True if member is an author
 */
export const isMemberAuthor = (memberName, authorsString) => {
  if (!memberName || !authorsString) {
    return false;
  }

  const normalizedMemberName = normalizeName(memberName);
  const authors = parseAuthors(authorsString);

  // Check if normalized member name matches any author
  return authors.some(author => author === normalizedMemberName);
};

/**
 * Filter publications to only those where the member is an author
 *
 * @param {string} memberName - Member's name to search for
 * @param {Array} publications - Array of publication objects
 * @returns {Array} - Filtered publications where member is an author
 */
export const getMemberPublications = (memberName, publications) => {
  if (!memberName || !Array.isArray(publications)) {
    return [];
  }

  return publications
    .filter(pub => isMemberAuthor(memberName, pub.authors))
    .sort((a, b) => b.year - a.year); // Sort by year descending
};
