import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { theme, breakpoints } from '../../styles/GlobalStyles';

const CardWrapper = styled.div`
  cursor: pointer;
  margin-bottom: 2rem;
  width: 100%;
  position: relative;
  z-index: 1;
`;

const Card = styled(motion.div)`
  background-color: ${props => props.bgColor || theme.white};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.18);
    transform: translateY(-5px);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props => props.accentColor ? `linear-gradient(135deg, ${props.accentColor}15, transparent 60%)` : 'none'};
    z-index: 0;
    opacity: 0.7;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: ${props => props.accentColor || `linear-gradient(90deg, ${theme.primary}, ${theme.accent})`};
  }
`;

const CardPreview = styled.div`
  display: flex;
  flex-direction: ${props => props.imagePosition === 'right' ? 'row-reverse' : 'row'};
  align-items: center;
  padding: ${props => props.isExpanded ? '1.5rem 1.5rem 0' : '1.5rem'};
  gap: 1.5rem;
  position: relative;
  z-index: 1;
  
  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    padding: ${props => props.isExpanded ? '1.5rem 1.5rem 0' : '1.5rem'};
  }
  
  @media (max-width: ${breakpoints.mobile}) {
    padding: ${props => props.isExpanded ? '1rem 1rem 0' : '1rem'};
    gap: 1rem;
  }
`;

const ImageContainer = styled.div`
  flex: 1.5; /* 이미지 영역 비율 증가 */
  min-width: 340px;
  max-width: 500px; /* 최대 너비 증가 */
  height: 340px; /* 높이 증가 */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.bgColor || 'transparent'};
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.4s ease;
  padding: 0 15px; /* 좌우 여백 */
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props => props.accentColor ? `radial-gradient(circle at top right, ${props.accentColor}30, transparent 70%)` : 'none'};
    z-index: 0;
  }
  
  ${CardWrapper}:hover & {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
    transform: scale(1.02);
  }
  
  @media (max-width: ${breakpoints.laptop}) {
    min-width: 300px;
    height: 300px;
    padding: 0 15px;
  }
  
  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    max-width: 550px;
    height: 380px; /* 태블릿에서 더 큰 이미지 */
    margin: 0 0 1rem 0;
    padding: 0 20px;
  }
  
  @media (max-width: ${breakpoints.mobile}) {
    height: 300px;
    padding: 0 15px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  transition: transform 0.6s ease;
  position: relative;
  z-index: 1;
  
  ${CardWrapper}:hover & {
    transform: scale(1.08);
  }
`;

const PreviewTitle = styled.h3`
  font-size: 1.7rem;
  color: ${props => props.textColor || theme.dark};
  margin: 0;
  font-weight: 600;
  flex: 1; /* 이미지 영역이 더 넓어지도록 타이틀 영역 축소 */
  padding: 0;
  position: relative;
  z-index: 1;
  text-shadow: 0 1px 2px rgba(0,0,0,0.05);
  
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1.6rem;
    padding: 0.5rem 0;
    text-align: center;
  }
  
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.4rem;
  }
`;

const ExpandButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  margin-left: auto;
  color: ${theme.textLight};
  transition: all 0.3s ease;
  
  svg {
    transition: transform 0.3s ease;
    transform: ${props => props.isExpanded ? 'rotate(180deg)' : 'rotate(0)'};
  }
  
  &:hover {
    color: ${theme.primary};
}
`;

const ContentContainer = styled(motion.div)`
  padding: 0 2rem 2rem;
  overflow: hidden;
  position: relative;
  z-index: 1;
  
  @media (max-width: ${breakpoints.mobile}) {
    padding: 0 1.5rem 1.5rem;
  }
`;

const DetailTitle = styled.h4`
  font-size: 1.4rem;
  color: ${props => props.textColor || theme.dark};
  margin-bottom: 1rem;
  font-weight: 600;
  position: relative;
  padding-bottom: 0.8rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background: ${props => props.accentColor || `linear-gradient(90deg, ${theme.primary}, ${theme.accent})`};
  }
  
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1.3rem;
  }
  
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.2rem;
  }
`;

const Description = styled.p`
  font-size: 1.05rem;
  color: ${props => props.textColor || theme.textLight};
  line-height: 1.8;
  white-space: pre-line;
  margin-bottom: 1rem;
  
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.95rem;
    line-height: 1.7;
  }
  
  strong {
    color: ${props => props.accentColor || theme.primary};
    font-weight: 500;
  }
`;

const Divider = styled.div`
  height: 1px;
  background: ${theme.border};
  margin: 1rem 0;
  width: 100%;
`;

// 카드 색상 테마 프리셋 정의
const cardThemes = {
  blue: {
    accent: '#3498db',
    bg: '#f7fbfe',
    text: '#2c3e50',
    textLight: '#34495e'
  },
  green: {
    accent: '#2ecc71',
    bg: '#f7fcf9',
    text: '#27ae60',
    textLight: '#2c3e50'
  },
  purple: {
    accent: '#9b59b6',
    bg: '#faf7fc',
    text: '#8e44ad',
    textLight: '#34495e'
  },
  orange: {
    accent: '#e67e22',
    bg: '#fef8f4',
    text: '#d35400',
    textLight: '#34495e'
  },
  red: {
    accent: '#e74c3c',
    bg: '#fef7f6',
    text: '#c0392b',
    textLight: '#34495e'
  }
};

const ResearchCard = ({ 
  title, 
  description, 
  image, 
  imagePosition = 'left',
  colorTheme = 'blue' // 기본 색상 테마
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // 색상 테마 선택 (지정된 테마가 없으면 기본 테마 사용)
  const themeColors = cardThemes[colorTheme] || cardThemes.blue;
  
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  
  return (
    <CardWrapper onClick={toggleExpand}>
      <Card
        layout
        transition={{
          layout: { duration: 0.3, type: "spring" }
        }}
        accentColor={themeColors.accent}
        bgColor={themeColors.bg}
      >
        <CardPreview imagePosition={imagePosition} isExpanded={isExpanded}>
          <ImageContainer 
            isExpanded={isExpanded} 
            imagePosition={imagePosition}
            accentColor={themeColors.accent}
          >
            <Image src={image} alt={title} />
          </ImageContainer>
          <PreviewTitle textColor={themeColors.text}>{title}</PreviewTitle>
          <ExpandButton isExpanded={isExpanded}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M19 9L12 16L5 9" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </ExpandButton>
        </CardPreview>
        
        <AnimatePresence>
          {isExpanded && (
            <ContentContainer
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Divider />
              <DetailTitle 
                textColor={themeColors.text}
                accentColor={themeColors.accent}
              >
                Overview
              </DetailTitle>
              <Description 
                textColor={themeColors.textLight}
                accentColor={themeColors.accent}
              >
                {description}
              </Description>
            </ContentContainer>
          )}
        </AnimatePresence>
      </Card>
    </CardWrapper>
  );
};

export default ResearchCard;
