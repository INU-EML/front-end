import React from 'react';
import styled from 'styled-components';
import { theme, breakpoints } from '../../styles/GlobalStyles';

const PublicationCardContainer = styled.div`
  background: linear-gradient(135deg, ${theme.white} 0%, #f8f9fa 100%);
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border-left: 4px solid ${theme.primary};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 102, 204, 0.15);
    transform: translateX(4px);
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1.2rem;
    border-left-width: 3px;
  }
`;

const PublicationYear = styled.span`
  display: inline-block;
  background: linear-gradient(135deg, ${theme.primary}, ${theme.secondary});
  color: ${theme.white};
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const PublicationTitle = styled.h4`
  font-size: 1.1rem;
  color: ${theme.darkBlue};
  margin: 0.5rem 0 0.8rem 0;
  font-weight: 600;
  line-height: 1.5;
  word-break: break-word;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
  }
`;

const PublicationAuthors = styled.p`
  font-size: 0.9rem;
  color: ${theme.text};
  margin: 0.5rem 0;
  font-style: italic;
  line-height: 1.4;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.85rem;
  }
`;

const PublicationJournal = styled.p`
  font-size: 0.9rem;
  color: ${theme.textLight};
  margin: 0.5rem 0 0.8rem 0;
  line-height: 1.4;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.85rem;
  }
`;

const DoiLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: ${theme.primary};
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 500;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  transition: all 0.2s ease;
  word-break: break-all;

  &:hover {
    background-color: rgba(0, 102, 204, 0.1);
    color: ${theme.secondary};
  }

  svg {
    width: 14px;
    height: 14px;
    flex-shrink: 0;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.8rem;
  }
`;

const DoiIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
  </svg>
);

/**
 * MemberPublicationCard Component
 *
 * Displays a single publication in a modal
 *
 * Props:
 * - publication: Publication data object with id, title, authors, journal, year, doi
 */
const MemberPublicationCard = ({ publication }) => {
  if (!publication) {
    return null;
  }

  return (
    <PublicationCardContainer>
      <PublicationYear>{publication.year}</PublicationYear>

      <PublicationTitle>{publication.title}</PublicationTitle>

      <PublicationAuthors>{publication.authors}</PublicationAuthors>

      <PublicationJournal>{publication.journal}</PublicationJournal>

      {publication.doi && (
        <DoiLink
          href={publication.doi}
          target="_blank"
          rel="noopener noreferrer"
          title="Open publication DOI"
        >
          <DoiIcon />
          View Publication
        </DoiLink>
      )}
    </PublicationCardContainer>
  );
};

export default MemberPublicationCard;
