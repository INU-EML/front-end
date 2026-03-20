import React from 'react';
import styled from 'styled-components';
import { theme, breakpoints } from '../../styles/GlobalStyles';
import FacilityCard from './FacilityCard';

const SectionWrapper = styled.section`
  margin-bottom: 4rem;

  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 3.5rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 3rem;
  }
`;

const SectionHeader = styled.div`
  margin-bottom: 2.5rem;
  position: relative;
  padding-bottom: 1.5rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, ${theme.primary}, ${theme.accent});
    border-radius: 2px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 2rem;
    padding-bottom: 1.25rem;

    &::after {
      width: 80px;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 1.75rem;
    padding-bottom: 1rem;

    &::after {
      width: 60px;
    }
  }
`;

const CategoryTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${theme.dark};
  margin: 0;
  letter-spacing: 0.3px;
  background: linear-gradient(to right, ${theme.primary}, ${theme.accent});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1.5rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.3rem;
  }
`;

const ItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  width: 100%;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.25rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const FacilitySection = ({ category }) => {
  const { categoryTitle, items } = category;

  return (
    <SectionWrapper>
      <SectionHeader>
        <CategoryTitle>{categoryTitle}</CategoryTitle>
      </SectionHeader>
      <ItemsGrid>
        {items.map((equipment) => (
          <FacilityCard key={equipment.id} equipment={equipment} />
        ))}
      </ItemsGrid>
    </SectionWrapper>
  );
};

export default FacilitySection;
