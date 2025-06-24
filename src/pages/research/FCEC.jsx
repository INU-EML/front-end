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

const FCEC = () => {
  return (
    <PageContainer>
      <PageHeader>
        <Title>Fuel Cells & Electrocatalysis Research</Title>
        <Description>
          Our laboratory focuses on developing advanced materials and technologies for fuel cells
          and electrocatalysis applications, aiming to enhance energy conversion efficiency and sustainability.
        </Description>
      </PageHeader>

      <Section>
        <SectionTitle>Research Focus</SectionTitle>
        <p>
          Our research in fuel cells and electrocatalysis focuses on developing novel catalysts
          and understanding fundamental electrochemical processes. We investigate materials that can
          efficiently catalyze key reactions in fuel cells, such as the oxygen reduction reaction (ORR)
          and hydrogen oxidation reaction (HOR).
        </p>
      </Section>

      <Section>
        <SectionTitle>Current Projects</SectionTitle>
        <ul>
          <li>Development of platinum-free catalysts for PEM fuel cells</li>
          <li>Novel electrocatalysts for CO2 reduction</li>
          <li>Advanced characterization techniques for electrocatalytic materials</li>
          <li>Computational modeling of catalytic surfaces</li>
        </ul>
      </Section>

      <Section>
        <SectionTitle>Key Achievements</SectionTitle>
        <p>
          Placeholder for key achievements in FC/EC research area.
        </p>
      </Section>
    </PageContainer>
  );
};

export default FCEC;
