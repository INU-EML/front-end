import React from 'react';
import styled from 'styled-components';
import ResearchCard from './ResearchCard';
import { theme, breakpoints } from '../../styles/GlobalStyles';
import { motion } from 'framer-motion';

const SectionContainer = styled(motion.section)`
  margin-bottom: 4rem;
  position: relative;
  padding: 1rem 0;
`;

const SectionHeader = styled(motion.div)`
  margin-bottom: 3rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 2rem 0;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, ${theme.primary}, ${theme.accent});
    border-radius: 2px;
  }
`;

const Title = styled.h2`
  font-size: 2.4rem;
  background: linear-gradient(to right, ${theme.primary}, ${theme.accent});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  font-weight: 700;
  
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 2.2rem;
  }
  
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.8rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: ${theme.textLight};
  line-height: 1.7;
  
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1.1rem;
  }
  
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
  }
`;

const CardContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  
  @media (max-width: ${breakpoints.mobile}) {
    gap: 2rem;
  }
`;

// 애니메이션 변수 정의
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const headerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// 카드 색상 테마 순환 배열
const colorThemes = ['blue', 'green', 'purple', 'orange', 'red'];

const ResearchSection = ({ title, description, items }) => {
  return (
    <SectionContainer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {(title || description) && (
        <SectionHeader variants={headerVariants}>
          {title && <Title>{title}</Title>}
          {description && <Description>{description}</Description>}
        </SectionHeader>
      )}
      <CardContainer variants={cardContainerVariants}>
        {items.map((item, index) => {
          // 각 카드마다 다른 색상 테마 적용
          const colorTheme = colorThemes[index % colorThemes.length];
          
          return (
            <motion.div key={index} variants={cardVariants}>
              <ResearchCard
                title={item.title}
                description={item.description}
                image={item.image}
                imagePosition={index % 2 === 0 ? 'left' : 'right'}
                colorTheme={colorTheme} // 색상 테마 전달
              />
            </motion.div>
          );
        })}
      </CardContainer>
    </SectionContainer>
  );
};

export default ResearchSection;
