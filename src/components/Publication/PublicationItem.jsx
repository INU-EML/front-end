import React from 'react';
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

const PublicationTitle = styled.h3`
  font-size: 1.2rem;
  color: ${theme.darkBlue};
  margin: 0.8rem 0;
  font-weight: 600;
  line-height: 1.4;
`;

const PublicationAuthors = styled.p`
  font-size: 0.95rem;
  color: ${theme.text};
  margin: 0.5rem 0;
  font-style: italic;
`;

const PublicationJournal = styled.p`
  font-size: 0.95rem;
  color: ${theme.darkGray};
  margin: 0.5rem 0;
  font-weight: 500;
`;

const PublicationDoi = styled.a`
  font-size: 0.9rem;
  color: ${theme.primary};
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  margin-top: 0.5rem;
  transition: all 0.2s ease;
  
  &:hover {
    color: ${theme.secondary};
    text-decoration: underline;
  }
  
  svg {
    margin-right: 0.4rem;
  }
`;

const LinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
  </svg>
);

const PublicationItem = ({ publication, index }) => {
  return (
    <PublicationContainer index={index}>
      <PublicationHeader>
        <PublicationId>#{publication.id}</PublicationId>
        <PublicationYear index={index}>{publication.year}</PublicationYear>
      </PublicationHeader>
      <PublicationTitle>{publication.title}</PublicationTitle>
      <PublicationAuthors>{publication.authors}</PublicationAuthors>
      <PublicationJournal>{publication.journal}</PublicationJournal>
      <PublicationDoi href={publication.doi} target="_blank" rel="noopener noreferrer">
        <LinkIcon /> {publication.doi}
      </PublicationDoi>
    </PublicationContainer>
  );
};

export default PublicationItem;
