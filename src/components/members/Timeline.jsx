import React from 'react';
import styled from 'styled-components';
import { theme, breakpoints } from '../../styles/GlobalStyles';

const TimelineContainer = styled.div`
  position: relative;
  margin: 0 0 2rem 1rem;
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 2px;
    background: linear-gradient(to bottom, ${theme.secondary}, ${theme.accent});
  }
  
  @media (max-width: ${breakpoints.mobile}) {
    margin-left: 0.5rem;
  }
`;

const TimelineItem = styled.div`
  position: relative;
  padding: 0.75rem 0 2rem 2rem;
  border-radius: 8px;
  background-color: ${props => props.index % 2 === 0 ? 'transparent' : 'rgba(245, 249, 255, 0.6)'};
  
  &:last-child {
    padding-bottom: 0;
  }
  
  &:before {
    content: '';
    position: absolute;
    left: -0.5rem;
    top: 0.75rem;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: ${props => props.index % 2 === 0 ? theme.accent : theme.secondary};
    box-shadow: 0 0 0 3px ${props => props.index % 2 === 0 ? 'rgba(0, 229, 255, 0.2)' : 'rgba(0, 156, 255, 0.2)'};
  }
`;

const Period = styled.div`
  font-weight: 600;
  color: ${props => props.index % 2 === 0 ? theme.primary : theme.secondary};
  margin-bottom: 0.25rem;
  font-size: 0.95rem;
`;

const Position = styled.h4`
  font-size: 1.1rem;
  margin: 0 0 0.25rem 0;
  color: ${props => props.index % 2 === 0 ? theme.text : theme.darkBlue};
`;

const Institution = styled.div`
  color: ${props => props.index % 2 === 0 ? theme.textLight : '#5a6a8a'};
  font-size: 0.95rem;
`;

const Timeline = ({ items }) => {
  return (
    <TimelineContainer>
      {items.map((item, index) => (
        <TimelineItem key={index} index={index}>
          <Period index={index}>{item.period}</Period>
          <Position index={index}>{item.position || item.degree}</Position>
          <Institution index={index}>{item.institution}</Institution>
        </TimelineItem>
      ))}
    </TimelineContainer>
  );
};

export default Timeline;
