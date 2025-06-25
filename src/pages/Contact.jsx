import React from 'react';
import styled from 'styled-components';
import ProfessorInfo from '../components/Contact/ProfessorInfo';
import MapSection from '../components/Contact/MapSection';
import contactData from '../data/Contact/contactData';

const PageContainer = styled.div`
  padding: 2rem 0;
  max-width: 1200px;
  margin: 0 auto;
`;

const PageHeader = styled.div`
  margin-bottom: 3rem;
  text-align: center;
`;

const Title = styled.h1`
  font-family: 'Pretendard', sans-serif;
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const Description = styled.p`
  font-family: 'Pretendard', sans-serif;
  font-size: 1.1rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
`;

const ContentContainer = styled.div`
  padding: 0 1rem;
`;

const Contact = () => {
  return (
    <PageContainer>
      <PageHeader>
        <Title>Contact Us</Title>
        <Description>
          Get in touch with our laboratory for inquiries, collaboration opportunities, or research discussions.
        </Description>
      </PageHeader>

      <ContentContainer>
        {/* Map Section */}
        <MapSection 
          mapUrl={contactData.mapUrl} 
          mapImage={contactData.mapImage} 
        />
        
        {/* Professor and Lab Information */}
        <ProfessorInfo 
          professor={contactData.professor} 
          lab={contactData.lab} 
        />
      </ContentContainer>
    </PageContainer>
  );
};

export default Contact;
