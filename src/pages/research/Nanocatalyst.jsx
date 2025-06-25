import React from 'react';
import styled from 'styled-components';
import { nanocatalystData } from '../../data/Research/nanocatalystData';
import ResearchSection from '../../components/Research/ResearchSection';
import { theme, breakpoints } from '../../styles/GlobalStyles';
import { motion } from 'framer-motion';

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
  
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 2.5rem;
  }
  
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: ${theme.textLight};
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.1rem;
    line-height: 1.7;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, transparent, ${theme.border}, transparent);
  margin: 2rem 0;
`;

const ContentContainer = styled.div`
  position: relative;
  min-height: 300px;
  margin-top: 2rem;
`;

// 애니메이션 변수
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" } 
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { duration: 0.3 }
  }
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const Nanocatalyst = () => {
  const researchItems = Object.values(nanocatalystData);

  return (
    <PageWrapper>
      <PageContainer as={motion.div} 
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        <PageHeader>
          <Title>Nanocatalyst</Title>
          <Description>
            Our laboratory focuses on developing advanced nanocatalysts for energy applications, 
            with particular emphasis on exsolution and nanocomposite technologies to enhance 
            catalytic performance and stability.
          </Description>
        </PageHeader>

        <Divider />

        <ContentContainer>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={contentVariants}
          >
            <ResearchSection items={researchItems} />
          </motion.div>
        </ContentContainer>
      </PageContainer>
    </PageWrapper>
  );
};

export default Nanocatalyst;
