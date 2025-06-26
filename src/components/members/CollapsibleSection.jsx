import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/GlobalStyles';

const SectionContainer = styled.div`
  margin-bottom: 1.5rem;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  background-color: ${theme.white};
`;

const SectionHeader = styled.div`
  padding: 1rem 1.5rem;
  background: ${props => props.isOpen 
    ? `linear-gradient(135deg, ${theme.secondary} 0%, ${theme.accent} 100%)` 
    : theme.darkBlue};
  color: ${theme.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.isOpen 
      ? `linear-gradient(135deg, ${theme.secondary} 0%, ${theme.accent} 100%)` 
      : `linear-gradient(135deg, ${theme.darkBlue} 0%, ${theme.primary} 100%)`};
  }
`;

const SectionTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
`;

const ToggleIcon = styled.span`
  font-size: 1.2rem;
  transition: transform 0.3s ease;
  transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0)'};
`;

const SectionContent = styled.div`
  padding: ${props => props.isOpen ? '1.5rem' : '0'};
  max-height: ${props => props.isOpen ? '2000px' : '0'};
  opacity: ${props => props.isOpen ? '1' : '0'};
  overflow: hidden;
  transition: all 0.5s ease;
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  height: ${props => props.isOpen ? 'auto' : '0'};
`;

const CollapsibleSection = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  const toggleSection = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <SectionContainer>
      <SectionHeader isOpen={isOpen} onClick={toggleSection}>
        <SectionTitle>{title}</SectionTitle>
        <ToggleIcon isOpen={isOpen}>▼</ToggleIcon>
      </SectionHeader>
      <SectionContent isOpen={isOpen}>
        {children}
      </SectionContent>
    </SectionContainer>
  );
};

export default CollapsibleSection;
