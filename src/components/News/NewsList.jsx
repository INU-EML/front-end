import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import NewsCard from './NewsCard';
import { theme, breakpoints } from '../../styles/GlobalStyles';

const NewsGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;
  
  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 1.5rem 0;
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const NewsList = ({ newsItems }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <NewsGridContainer>
        {newsItems.map((news, index) => (
          <NewsCard 
            key={news.id} 
            news={news} 
            index={index} 
          />
        ))}
      </NewsGridContainer>
    </motion.div>
  );
};

export default NewsList;
