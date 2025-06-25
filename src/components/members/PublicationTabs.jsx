import React, { useState } from 'react';
import styled from 'styled-components';
import { theme, breakpoints } from '../../styles/GlobalStyles';

const TabContainer = styled.div`
  margin-bottom: 2rem;
`;

const TabsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${theme.border};
  
  @media (max-width: ${breakpoints.mobile}) {
    overflow-x: auto;
    padding-bottom: 0.5rem;
    flex-wrap: nowrap;
    &::-webkit-scrollbar {
      height: 4px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${theme.border};
      border-radius: 4px;
    }
  }
`;

const Tab = styled.button`
  padding: 0.75rem 1.25rem;
  background: ${props => props.active ? `linear-gradient(135deg, ${theme.secondary} 0%, ${theme.accent} 100%)` : 'transparent'};
  color: ${props => props.active ? theme.white : theme.textLight};
  border: none;
  border-radius: 4px;
  font-weight: ${props => props.active ? '600' : '500'};
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Pretendard', sans-serif;
  
  &:hover {
    background: ${props => props.active ? `linear-gradient(135deg, ${theme.secondary} 0%, ${theme.accent} 100%)` : 'rgba(0, 0, 0, 0.05)'};
    color: ${props => props.active ? theme.white : theme.primary};
  }
`;

const PublicationList = styled.ul`
  list-style: none;
  padding: 0;
`;

const PublicationItem = styled.li`
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  background-color: ${props => props.index % 2 === 0 ? theme.white : '#f5f9ff'};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border-left: 4px solid ${props => props.index % 2 === 0 ? theme.primary : theme.secondary};
  color: ${props => props.index % 2 === 0 ? theme.text : theme.darkBlue};
  
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`;

const PublicationTabs = ({ publications }) => {
  const years = Object.keys(publications.byYear).sort((a, b) => b - a); // Sort years in descending order
  const [activeTab, setActiveTab] = useState(years[0]); // Set the most recent year as default
  
  return (
    <TabContainer>
      <TabsWrapper>
        {years.map(year => (
          <Tab 
            key={year}
            active={activeTab === year}
            onClick={() => setActiveTab(year)}
          >
            {year}
          </Tab>
        ))}
      </TabsWrapper>
      
      <PublicationList>
        {publications.byYear[activeTab].map((publication, index) => (
          <PublicationItem key={index} index={index}>
            {publication}
          </PublicationItem>
        ))}
      </PublicationList>
    </TabContainer>
  );
};

export default PublicationTabs;
