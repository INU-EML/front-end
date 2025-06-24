import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 1rem 0;
`;

const ProfileSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ImageContainer = styled.div`
  flex: 0 0 300px;
`;

const ProfileImage = styled.div`
  width: 100%;
  height: 350px;
  background-color: #f0f0f0;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
`;

const ProfileInfo = styled.div`
  flex: 1;
`;

const Name = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const Position = styled.h2`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 1rem;
  font-weight: 500;
`;

const ContactInfo = styled.div`
  margin-bottom: 1.5rem;
`;

const ContactItem = styled.p`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.3rem;
  color: #444;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #eee;
`;

const Professor = () => {
  return (
    <PageContainer>
      <ProfileSection>
        <ImageContainer>
          <ProfileImage>Professor Photo Placeholder</ProfileImage>
        </ImageContainer>
        
        <ProfileInfo>
          <Name>Prof. John Doe</Name>
          <Position>Professor, Department of Chemical Engineering</Position>
          
          <ContactInfo>
            <ContactItem>
              <strong>Email:</strong> professor@university.edu
            </ContactItem>
            <ContactItem>
              <strong>Office:</strong> Engineering Building, Room 123
            </ContactItem>
            <ContactItem>
              <strong>Phone:</strong> +1-234-567-8900
            </ContactItem>
          </ContactInfo>
          
          <Section>
            <SectionTitle>Biography</SectionTitle>
            <p>
              Professor John Doe received his Ph.D. in Chemical Engineering from Stanford University in 2005.
              Before joining our university, he worked as a postdoctoral researcher at MIT and as an assistant
              professor at UC Berkeley. His research interests include electrochemical materials, catalysis,
              and energy storage technologies.
            </p>
          </Section>
        </ProfileInfo>
      </ProfileSection>
      
      <Section>
        <SectionTitle>Research Interests</SectionTitle>
        <ul>
          <li>Electrochemical energy conversion and storage</li>
          <li>Catalyst design and characterization</li>
          <li>Nanomaterials synthesis and applications</li>
          <li>Fuel cell technology</li>
          <li>Advanced battery materials</li>
        </ul>
      </Section>
      
      <Section>
        <SectionTitle>Education</SectionTitle>
        <ul>
          <li>Ph.D. in Chemical Engineering, Stanford University, 2005</li>
          <li>M.S. in Materials Science, MIT, 2000</li>
          <li>B.S. in Chemistry, University of Michigan, 1998</li>
        </ul>
      </Section>
      
      <Section>
        <SectionTitle>Selected Publications</SectionTitle>
        <ul>
          <li>Doe, J., et al. "Advanced Catalysts for Fuel Cell Applications." Journal of Energy Materials, 2022.</li>
          <li>Doe, J., et al. "Novel Electrode Materials for High-Performance Batteries." Advanced Energy Materials, 2020.</li>
          <li>Doe, J., et al. "Nanostructured Catalysts for Electrochemical CO2 Reduction." Nature Catalysis, 2018.</li>
        </ul>
      </Section>
    </PageContainer>
  );
};

export default Professor;
