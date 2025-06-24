import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  text-align: center;
`;

const HeroSection = styled.section`
  padding: 4rem 0;
  background-color: #f8f9fa;
  border-radius: 8px;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
`;

const ContentSection = styled.section`
  margin: 2rem 0;
`;

const Home = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <Title>Welcome to EML Laboratory</Title>
        <Subtitle>
          Exploring innovative solutions in electrochemistry and materials science
        </Subtitle>
      </HeroSection>
      
      <ContentSection>
        <h2>Our Research Focus</h2>
        <p>
          The Electrochemical Materials Laboratory (EML) focuses on developing advanced materials 
          and technologies for energy conversion and storage applications. Our research spans 
          fuel cells, electrocatalysis, nanocatalysts, and battery technologies.
        </p>
      </ContentSection>
      
      <ContentSection>
        <h2>Latest News</h2>
        <p>
          Placeholder for the latest news and updates from our laboratory.
        </p>
      </ContentSection>
      
      <ContentSection>
        <h2>Recent Publications</h2>
        <p>
          Placeholder for recent publications from our research team.
        </p>
      </ContentSection>
    </HomeContainer>
  );
};

export default Home;
