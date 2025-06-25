import React from 'react';
import styled from 'styled-components';
import PhotoCard from './PhotoCard';

const SectionContainer = styled.div`
  margin: 2rem 0;
`;

const YearTitle = styled.h2`
  font-family: 'Pretendard', sans-serif;
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #f0f0f0;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 60px;
    height: 2px;
    background-color: #4a90e2;
  }
`;

const PhotosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;
  margin: 0 -1rem;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const YearSection = ({ year, photos }) => {
  return (
    <SectionContainer>
      <YearTitle>{year}</YearTitle>
      <PhotosContainer>
        {photos.map((photo, index) => (
          <PhotoCard key={`${year}-${index}`} photo={photo} index={index} />
        ))}
      </PhotosContainer>
    </SectionContainer>
  );
};

export default YearSection;
