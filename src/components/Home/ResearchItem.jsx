import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../../styles/GlobalStyles';

const ResearchCard = styled(Link)`
  flex: 0 0 auto;
  width: 360px; /* 710px 이미지 너비에 맞게 조정 */
  background-color: ${theme.white};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  text-decoration: none;
  color: ${theme.text};
  display: flex;
  flex-direction: column;
  height: auto;
  scroll-snap-align: start;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
  
  /* 선택 효과 제거 */
  &.active {
    /* 테두리 효과 제거 */
  }
`;

const ResearchImageContainer = styled.div`
  height: 360px; /* 706px 이미지 높이에 맞게 조정 (1:1 비율에 가깝게) */
  background-color: ${theme.darkBlue};
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ResearchImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* 이미지가 컨테이너를 꽉 채우도록 설정 */
  object-position: center;
  transition: transform 0.3s ease;
  
  ${ResearchCard}:hover & {
    transform: scale(1.05);
  }
`;

const ResearchContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ResearchTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: ${theme.dark};
`;

const ResearchDescription = styled.p`
  color: ${theme.textLight};
  margin-bottom: 1.5rem;
  flex: 1;
`;

const ResearchLink = styled.span`
  color: ${theme.primary};
  font-weight: 600;
  display: flex;
  align-items: center;
  
  &::after {
    content: '→';
    margin-left: 0.5rem;
    transition: transform 0.3s ease;
  }
  
  ${ResearchCard}:hover & {
    color: ${theme.secondary};
    
    &::after {
      transform: translateX(5px);
    }
  }
`;

const ResearchItem = ({ research, isActive }) => {
  return (
    <ResearchCard 
      to={research.path} 
      className={isActive ? 'active' : ''}
    >
      <ResearchImageContainer>
        <ResearchImage src={research.image} alt={research.title} />
      </ResearchImageContainer>
      <ResearchContent>
        <ResearchTitle>{research.title}</ResearchTitle>
        <ResearchDescription>{research.description}</ResearchDescription>
        <ResearchLink>Learn more</ResearchLink>
      </ResearchContent>
    </ResearchCard>
  );
};

export default ResearchItem;
