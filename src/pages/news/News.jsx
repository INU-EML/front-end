import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import NewsList from '../../components/News/NewsList';
import { newsList } from '../../data/News/newsData';
import { theme, breakpoints } from '../../styles/GlobalStyles';

const NewsPageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${theme.lightGray};
`;

const HeroSection = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  background: linear-gradient(135deg, ${theme.primary} 0%, ${theme.darkBlue} 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  
  @media (max-width: ${breakpoints.mobile}) {
    height: 220px;
  }
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
`;

const PageTitle = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  color: ${theme.white};
  margin: 0;
  position: relative;
  font-family: 'Pretendard', sans-serif;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, ${theme.accent}, ${theme.secondary});
    border-radius: 2px;
  }
  
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 2.5rem;
    
    &:after {
      width: 60px;
      bottom: -10px;
    }
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  
  @media (max-width: ${breakpoints.mobile}) {
    padding: 1.5rem;
  }
`;

const News = () => {
  const [sortedNews, setSortedNews] = useState([]);
  
  useEffect(() => {
    // Sort news by date (newest first)
    const sorted = [...newsList].sort((a, b) => {
      const dateA = new Date(a.date.split('.').join('-'));
      const dateB = new Date(b.date.split('.').join('-'));
      return dateB - dateA;
    });
    
    setSortedNews(sorted);
  }, []);
  

  
  return (
    <NewsPageContainer>
      <HeroSection>
        <HeroOverlay />
        <HeroContent>
          <PageTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            News
          </PageTitle>
        </HeroContent>
      </HeroSection>
      
      <ContentContainer>
        <NewsList newsItems={sortedNews} />
      </ContentContainer>
    </NewsPageContainer>
  );
};

export default News;
