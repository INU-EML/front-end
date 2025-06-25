import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import YearSection from './YearSection';

const Container = styled.div`
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const GalleryHeader = styled.div`
  margin-bottom: 2.5rem;
  text-align: center;
`;

const GalleryTitle = styled.h1`
  font-family: 'Pretendard', sans-serif;
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const GalleryDescription = styled.p`
  font-family: 'Pretendard', sans-serif;
  font-size: 1.1rem;
  color: #666;
  max-width: 700px;
  margin: 0 auto;
`;

const FilterTabs = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem 0;
  gap: 0.5rem;
`;

const FilterTab = styled.button`
  font-family: 'Pretendard', sans-serif;
  padding: 0.5rem 1.5rem;
  background-color: ${props => props.active ? '#4a90e2' : 'transparent'};
  color: ${props => props.active ? 'white' : '#333'};
  border: 1px solid ${props => props.active ? '#4a90e2' : '#ddd'};
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  
  &:hover {
    background-color: ${props => props.active ? '#3a7bc8' : '#f5f5f5'};
  }
  
  &:focus {
    outline: none;
  }
`;

const GalleryContent = styled.div`
  margin-top: 2rem;
`;



const GalleryContainer = ({ galleryData }) => {
  const [selectedYear, setSelectedYear] = useState('all');
  const [years, setYears] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  
  // Extract unique years from data and sort them in descending order
  useEffect(() => {
    const uniqueYears = [...new Set(galleryData.map(item => item.year))];
    uniqueYears.sort((a, b) => b - a); // Sort years in descending order
    setYears(uniqueYears);
  }, [galleryData]);
  
  // Filter data based on selected year
  useEffect(() => {
    if (selectedYear === 'all') {
      setFilteredData(galleryData);
    } else {
      setFilteredData(galleryData.filter(item => item.year === parseInt(selectedYear)));
    }
  }, [selectedYear, galleryData]);
  
  // Group photos by year
  const groupedPhotos = filteredData.reduce((acc, photo) => {
    if (!acc[photo.year]) {
      acc[photo.year] = [];
    }
    acc[photo.year].push(photo);
    return acc;
  }, {});
  
  // Sort years in descending order for display
  const sortedYears = Object.keys(groupedPhotos).map(Number).sort((a, b) => b - a);
  
  return (
    <Container>
      <GalleryHeader>
        <GalleryTitle>Our Memories</GalleryTitle>
        <GalleryDescription>
          Explore the journey of our lab from 2018 to the present day. These photos capture the special moments, achievements, and growth of our research community.
        </GalleryDescription>
      </GalleryHeader>
      
      <FilterTabs>
        <FilterTab 
          active={selectedYear === 'all'} 
          onClick={() => setSelectedYear('all')}
        >
          View All
        </FilterTab>
        {years.map(year => (
          <FilterTab 
            key={year} 
            active={selectedYear === year.toString()} 
            onClick={() => setSelectedYear(year.toString())}
          >
            {year}
          </FilterTab>
        ))}
      </FilterTabs>
      

      
      <GalleryContent>
        {sortedYears.map(year => (
          <YearSection 
            key={year} 
            year={year} 
            photos={groupedPhotos[year]} 
          />
        ))}
      </GalleryContent>
    </Container>
  );
};

export default GalleryContainer;
