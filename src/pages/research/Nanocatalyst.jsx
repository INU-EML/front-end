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

const Nanocatalyst = () => {
  return (
    <PageContainer>
      <PageHeader>
        <Title>Nanocatalyst Research</Title>
        <Description>
          Our laboratory specializes in the design, synthesis, and characterization of nanoscale catalysts
          for various energy and environmental applications.
        </Description>
      </PageHeader>

      <Section>
        <SectionTitle>Research Focus</SectionTitle>
        <p>
          Our nanocatalyst research focuses on developing highly efficient, stable, and selective
          catalytic materials at the nanoscale. We explore various synthesis methods to control
          the size, shape, composition, and structure of nanomaterials to optimize their catalytic performance.
        </p>
      </Section>

      <Section>
        <SectionTitle>Current Projects</SectionTitle>
        <ul>
          <li>Core-shell nanostructures for enhanced catalytic activity</li>
          <li>Single-atom catalysts for efficient energy conversion</li>
          <li>Supported metal nanoparticles for heterogeneous catalysis</li>
          <li>Bimetallic nanocatalysts with tunable properties</li>
        </ul>
      </Section>

      <Section>
        <SectionTitle>Key Achievements</SectionTitle>
        <p>
          Placeholder for key achievements in nanocatalyst research area.
        </p>
      </Section>
    </PageContainer>
  );
};

export default Nanocatalyst;
