import React from 'react';
import styled from 'styled-components';

const ProfessorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 10px;
  margin-bottom: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const ImageContainer = styled.div`
  flex: 0 0 auto;
  
  @media (min-width: 768px) {
    width: 200px;
  }
`;

const ProfessorImage = styled.img`
  width: 100%;
  max-width: 200px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const InfoContainer = styled.div`
  flex: 1;
`;

const Name = styled.h2`
  font-family: 'Pretendard', sans-serif;
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const InfoList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const InfoItem = styled.li`
  display: flex;
  margin-bottom: 0.8rem;
  font-family: 'Pretendard', sans-serif;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const InfoLabel = styled.span`
  font-weight: 500;
  color: #555;
  width: 80px;
  flex-shrink: 0;
`;

const InfoValue = styled.span`
  color: #333;
`;

const ProfessorInfo = ({ professor, lab }) => {
  return (
    <ProfessorContainer>
      <ImageContainer>
        <ProfessorImage src={professor.image} alt={professor.name} />
      </ImageContainer>
      <InfoContainer>
        <Name>{professor.name}</Name>
        <InfoList>
          <InfoItem>
            <InfoLabel>Tel:</InfoLabel>
            <InfoValue>{professor.tel}</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>E-mail:</InfoLabel>
            <InfoValue>{professor.email}</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Office:</InfoLabel>
            <InfoValue>{professor.office}</InfoValue>
          </InfoItem>
          <InfoItem style={{ marginTop: '10px', paddingTop: '10px', borderTop: '1px solid #eee' }}>
            <InfoLabel>Lab:</InfoLabel>
            <InfoValue>{lab.location}</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Lab Tel:</InfoLabel>
            <InfoValue>{lab.tel}</InfoValue>
          </InfoItem>
        </InfoList>
      </InfoContainer>
    </ProfessorContainer>
  );
};

export default ProfessorInfo;
