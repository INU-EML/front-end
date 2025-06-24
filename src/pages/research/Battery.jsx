import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 1rem 0;
`;

const PageHeader = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
`;

const Section = styled.section`
  margin-bottom: 2.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #444;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #eee;
`;

const Battery = () => {
  return (
    <PageContainer>
      <PageHeader>
        <Title>Battery Research</Title>
        <Description>
          Our laboratory is dedicated to developing next-generation battery technologies with improved
          energy density, safety, and sustainability.
        </Description>
      </PageHeader>

      <Section>
        <SectionTitle>Research Focus</SectionTitle>
        <p>
          Our battery research focuses on developing advanced electrode materials, electrolytes,
          and cell designs for various battery technologies including lithium-ion, sodium-ion,
          and solid-state batteries. We aim to address key challenges in energy storage such as
          capacity fading, dendrite formation, and thermal stability.
        </p>
      </Section>

      <Section>
        <SectionTitle>Current Projects</SectionTitle>
        <ul>
          <li>High-capacity anode materials for lithium-ion batteries</li>
          <li>Novel cathode materials with enhanced stability</li>
          <li>Solid-state electrolytes for next-generation batteries</li>
          <li>In-situ characterization of battery materials during cycling</li>
        </ul>
      </Section>

      <Section>
        <SectionTitle>Key Achievements</SectionTitle>
        <p>
          Placeholder for key achievements in battery research area.
        </p>
      </Section>
    </PageContainer>
  );
};

export default Battery;
