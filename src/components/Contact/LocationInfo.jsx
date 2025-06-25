import React from 'react';
import styled from 'styled-components';

const LocationContainer = styled.div`
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const InfoCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const CardTitle = styled.h3`
  font-family: 'Pretendard', sans-serif;
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 1.5rem;
  padding-bottom: 0.8rem;
  border-bottom: 2px solid #f0f0f0;
  font-weight: 600;
  width: 100%;
  text-align: center;
`;

const InfoList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
  max-width: 500px;
`;

const InfoItem = styled.li`
  display: flex;
  justify-content: center;
  margin-bottom: 1.2rem;
  font-family: 'Pretendard', sans-serif;
  font-size: 1.1rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const InfoLabel = styled.span`
  font-weight: 600;
  color: #444;
  width: 100px;
  flex-shrink: 0;
  margin-right: 1rem;
`;

const InfoValue = styled.span`
  color: #333;
  font-weight: 500;
`;

const LocationInfo = ({ lab }) => {
  return (
    <LocationContainer>
      <InfoCard>
        <CardTitle>Laboratory</CardTitle>
        <InfoList>
          <InfoItem>
            <InfoLabel>Location:</InfoLabel>
            <InfoValue>{lab.location}</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Tel:</InfoLabel>
            <InfoValue>{lab.tel}</InfoValue>
          </InfoItem>
        </InfoList>
      </InfoCard>
    </LocationContainer>
  );
};

export default LocationInfo;
