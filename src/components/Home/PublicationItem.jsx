import React from 'react';
import styled from 'styled-components';
import { theme, breakpoints } from '../../styles/GlobalStyles';

const PublicationCard = styled.a`
  flex: 0 0 auto;
  width: 320px;
  background-color: ${theme.white};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  scroll-snap-align: start;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &:focus-visible {
    outline: 3px solid ${theme.primary};
    outline-offset: 3px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: min(320px, 100%);
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover { transform: none; }
  }
`;

const PublicationImageContainer = styled.div`
  aspect-ratio: 320 / 420;
  background-color: ${theme.light};
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '${props => props.$year}';
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: ${theme.primary};
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 0.8rem;
    font-weight: 600;
    z-index: 1;
  }
`;

const PublicationImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
`;

const PublicationContent = styled.div`
  padding: 1.5rem;
`;

const PublicationTitle = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 0.8rem;
  color: ${theme.dark};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PublicationAuthors = styled.p`
  font-size: 0.9rem;
  color: ${theme.textLight};
  margin-bottom: 0.5rem;
  font-style: italic;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PublicationJournal = styled.p`
  font-size: 0.8rem;
  color: ${theme.textLight};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0;
`;

const CoverLabel = styled.span`
  display: inline-block;
  margin-bottom: 0.75rem;
  padding: 0.25rem 0.65rem;
  border-radius: 6px;
  background: #eaf3fc;
  color: ${theme.primary};
  font-size: 0.75rem;
  font-weight: 600;
`;

const PublicationItem = ({ publication, showCoverLabel = false }) => {
  return (
    <PublicationCard 
      href={publication.doi} 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <PublicationImageContainer $year={publication.year}>
        <PublicationImg 
          src={publication.image} 
          alt={publication.title}
          loading="lazy"
          width={320}
          height={420}
        />
      </PublicationImageContainer>
      <PublicationContent>
        {showCoverLabel && publication.coverLabel && <CoverLabel>{publication.coverLabel}</CoverLabel>}
        <PublicationTitle title={publication.title}>{publication.title}</PublicationTitle>
        <PublicationAuthors title={publication.authors}>{publication.authors}</PublicationAuthors>
        <PublicationJournal>{publication.journal}</PublicationJournal>
      </PublicationContent>
    </PublicationCard>
  );
};

export default PublicationItem;
