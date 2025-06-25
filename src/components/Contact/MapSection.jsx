import React from 'react';
import styled from 'styled-components';

const MapContainer = styled.div`
  margin-bottom: 2rem;
`;

const MapTitle = styled.h2`
  font-family: 'Pretendard', sans-serif;
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 1.5rem;
  font-weight: 600;
`;

const MapLink = styled.a`
  display: block;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const MapImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const MapSection = ({ mapUrl, mapImage }) => {
  return (
    <MapContainer>
      <MapTitle>Location</MapTitle>
      <MapLink href={mapUrl} target="_blank" rel="noopener noreferrer">
        <MapImage 
          src={mapImage} 
          alt="Map to Incheon National University Engineering College" 
        />
      </MapLink>
    </MapContainer>
  );
};

export default MapSection;
