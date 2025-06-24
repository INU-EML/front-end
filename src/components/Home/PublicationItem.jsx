import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/GlobalStyles';

const PublicationCard = styled.a`
  flex: 0 0 auto;
  width: 320px; /* 726px 이미지 너비에 맞게 조정 */
  background-color: ${theme.white};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  scroll-snap-align: start;
  text-decoration: none;
  display: block;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const PublicationImageContainer = styled.div`
  height: 420px; /* 955px 이미지 높이에 맞게 조정 */
  background-color: ${theme.darkBlue};
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '${props => props.year}';
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: ${theme.accent};
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
  object-fit: cover; /* 이미지가 컨테이너를 꽉 채우도록 설정 */
  object-position: center top; /* 이미지의 상단부터 보이도록 설정 */
  transition: transform 0.3s ease;
  
  ${PublicationCard}:hover & {
    transform: scale(1.05);
  }
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
`;

const PublicationItem = ({ publication }) => {
  return (
    <PublicationCard 
      href={publication.doi} 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <PublicationImageContainer year={publication.year}>
        <PublicationImg src={publication.image} alt={publication.title} />
      </PublicationImageContainer>
      <PublicationContent>
        <PublicationTitle>{publication.title}</PublicationTitle>
        <PublicationAuthors>{publication.authors}</PublicationAuthors>
        <PublicationJournal>{publication.journal}</PublicationJournal>
      </PublicationContent>
    </PublicationCard>
  );
};

export default PublicationItem;
