import React from 'react';
import styled from 'styled-components';
import { facilityData } from '../data/Facility/facilityData';
import FacilitySection from '../components/Facility/FacilitySection';
import { theme, breakpoints } from '../styles/GlobalStyles';

const PageWrapper = styled.div`
  background: linear-gradient(to bottom, ${theme.light}, #ffffff);
  min-height: 100vh;
`;

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 2.5rem 1.5rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 2rem 1rem;
  }
`;

const PageHeader = styled.div`
  margin-bottom: 3rem;
  text-align: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -1.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 4px;
    background: linear-gradient(90deg, ${theme.primary}, ${theme.accent});
    border-radius: 2px;

    @media (max-width: ${breakpoints.mobile}) {
      width: 100px;
      height: 3px;
      bottom: -1.2rem;
    }
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  color: ${theme.dark};
  margin-bottom: 1.5rem;
  background: linear-gradient(to right, ${theme.primary}, ${theme.accent});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
  letter-spacing: 0.5px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 2.5rem;
    margin-bottom: 1.25rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: ${theme.textLight};
  line-height: 1.8;
  max-width: 700px;
  margin: 0 auto;
  letter-spacing: 0.3px;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, transparent, ${theme.border}, transparent);
  margin: 3rem 0;

  @media (max-width: ${breakpoints.tablet}) {
    margin: 2.5rem 0;
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin: 2rem 0;
  }
`;

const ContentContainer = styled.div`
  position: relative;
`;

const Facility = () => {
  return (
    <PageWrapper>
      <PageContainer>
        <PageHeader>
          <Title>Facility</Title>
          <Description>
            Our research laboratory is equipped with instruments for catalyst synthesis, single cell fabrication, evaluation, and material characterization.
          </Description>
        </PageHeader>

        <Divider />

        <ContentContainer>
          {facilityData.map((category) => (
            <FacilitySection key={category.id} category={category} />
          ))}
        </ContentContainer>
      </PageContainer>
    </PageWrapper>
  );
};

export default Facility;
