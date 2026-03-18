import React, { useMemo } from 'react';
import styled from 'styled-components';
import { theme, breakpoints } from '../../styles/GlobalStyles';

const PublicationContainer = styled.div`
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  background-color: ${theme.white};
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  border-left: 4px solid ${props => {
    const colors = [theme.primary, theme.secondary, theme.accent, theme.darkBlue];
    return colors[props.index % colors.length];
  }};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 1.2rem;
  }
`;

const PublicationHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
`;

const PublicationId = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${theme.gray};
  margin-right: 1rem;
  min-width: 2.5rem;
`;

const PublicationYear = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${theme.white};
  background: linear-gradient(135deg, ${props => {
    const colors = [
      `${theme.primary}, ${theme.secondary}`,
      `${theme.secondary}, ${theme.accent}`,
      `${theme.accent}, ${theme.darkBlue}`,
      `${theme.darkBlue}, ${theme.primary}`
    ];
    return colors[props.index % colors.length];
  }});
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
`;

const PublicationContent = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-start;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const PublicationContentLeft = styled.div`
  flex: 1;
  min-width: 0;
`;

const PublicationContentRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-width: 150px;

  @media (max-width: ${breakpoints.tablet}) {
    justify-content: flex-start;
    width: 100%;
  }
`;

const PublicationTitle = styled.h3`
  font-size: 1.2rem;
  color: ${theme.darkBlue};
  margin: 0 0 0.8rem 0;
  font-weight: 600;
  line-height: 1.4;
`;

const PublicationAuthors = styled.p`
  font-size: 0.95rem;
  color: ${theme.text};
  margin: 0 0 0.5rem 0;
  font-style: italic;
`;

const PublicationJournal = styled.p`
  font-size: 0.95rem;
  color: ${theme.darkGray};
  margin: 0 0 0.8rem 0;
  font-weight: 500;
`;

const PublicationCitations = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem 1.5rem;
  background: linear-gradient(135deg, rgba(0, 123, 255, 0.08), rgba(0, 170, 255, 0.05));
  border: 1px solid rgba(0, 123, 255, 0.15);
  border-radius: 12px;
  min-width: 120px;
  gap: 0.3rem;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: row;
    gap: 0.5rem;
    width: 100%;
    padding: 0.5rem 0;
    background: transparent;
    border: none;
    min-width: auto;
  }
`;

const CitationNumber = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: ${theme.primary};
  line-height: 1;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1.2rem;
  }
`;

const CitationLabel = styled.div`
  font-size: 0.85rem;
  font-weight: 500;
  color: ${theme.darkGray};
  text-transform: uppercase;
  letter-spacing: 0.5px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 0.8rem;
  }
`;

const PublicationDoi = styled.a`
  font-size: 0.9rem;
  color: ${theme.primary};
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  margin-top: 0;
  transition: all 0.2s ease;
  word-break: break-all;

  &:hover {
    color: ${theme.secondary};
    text-decoration: underline;
  }

  svg {
    margin-right: 0.4rem;
    flex-shrink: 0;
  }
`;

const LinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
  </svg>
);

/**
 * PublicationItem Component
 *
 * Displays a publication card with citation information.
 *
 * Props:
 * - publication: Publication data object (required)
 *   - id, year, title, authors, journal, doi
 * - index: Position in list for styling (required)
 * - citationCount: Pre-fetched citation count from parent (optional)
 *   - If provided, uses this value instead of fetching
 *   - Recommended for performance when loading multiple items
 * - isLoadingCitation: Whether citation is currently being loaded (optional)
 *   - Only used if citationCount prop is provided
 *
 * Usage:
 * // With pre-fetched citations (recommended)
 * <PublicationItem
 *   publication={pub}
 *   index={0}
 *   citationCount={34}
 *   isLoadingCitation={false}
 * />
 */
const PublicationItem = ({ publication, index, citationCount, isLoadingCitation = false }) => {
  // Memoize citation display logic to avoid unnecessary recalculations
  const citationDisplay = useMemo(() => {
    if (!publication.doi) {
      return { number: '-', label: 'Citations' };
    }

    if (isLoadingCitation) {
      return { number: '...', label: 'Loading' };
    }

    if (citationCount !== null && citationCount !== undefined && typeof citationCount === 'number') {
      return { number: citationCount.toString(), label: 'Citations' };
    }

    return { number: '-', label: 'Citations' };
  }, [publication.doi, isLoadingCitation, citationCount]);

  return (
    <PublicationContainer index={index}>
      <PublicationHeader>
        <PublicationId>#{publication.id}</PublicationId>
        <PublicationYear index={index}>{publication.year}</PublicationYear>
      </PublicationHeader>

      <PublicationContent>
        <PublicationContentLeft>
          <PublicationTitle>{publication.title}</PublicationTitle>
          <PublicationAuthors>{publication.authors}</PublicationAuthors>
          <PublicationJournal>{publication.journal}</PublicationJournal>
          <PublicationDoi href={publication.doi} target="_blank" rel="noopener noreferrer">
            <LinkIcon /> {publication.doi}
          </PublicationDoi>
        </PublicationContentLeft>

        <PublicationContentRight>
          <PublicationCitations>
            <CitationNumber>{citationDisplay.number}</CitationNumber>
            <CitationLabel>{citationDisplay.label}</CitationLabel>
          </PublicationCitations>
        </PublicationContentRight>
      </PublicationContent>
    </PublicationContainer>
  );
};

export default PublicationItem;
