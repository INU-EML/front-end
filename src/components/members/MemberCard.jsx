import React from 'react';
import styled from 'styled-components';
import { theme, breakpoints } from '../../styles/GlobalStyles';

const Card = styled.div`
  background: ${props => props.index % 2 === 0 ? 
    theme.white : 
    'linear-gradient(135deg, #f8f9fa 0%, #f0f5ff 100%)'};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-left: 4px solid ${props => props.index % 2 === 0 ? theme.primary : theme.secondary};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const ImageContainer = styled.div`
  height: 300px;
  width: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.lightGray || '#f5f7fa'};
  
  @media (max-width: ${breakpoints.mobile}) {
    height: 260px;
  }
`;

const PlaceholderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f0f3f8, #e6e9f0);
`;

const PlaceholderIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${theme.white};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  border: 2px dashed ${theme.border};
`;

const Initials = styled.span`
  font-size: 2rem;
  font-weight: bold;
  color: ${props => props.index % 2 === 0 ? theme.primary : theme.secondary};
  opacity: 0.8;
  letter-spacing: -1px;
`;

const PlaceholderText = styled.p`
  font-size: 0.9rem;
  color: ${theme.gray};
  margin-top: 5px;
  font-style: italic;
`;

const Image = styled.img`
  width: auto;
  height: 100%;
  max-width: 100%;
  max-height: 300px;
  object-fit: contain;
  transition: transform 0.3s ease;
  position: relative;
  z-index: 1;
  
  ${Card}:hover & {
    transform: scale(1.03);
  }
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, ${theme.lightGray} 0%, #e0e5f0 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.textLight};
  font-size: 1.2rem;
`;

const Content = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Name = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: ${theme.dark};
  position: relative;
  padding-bottom: 0.75rem;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 3px;
    background: linear-gradient(to right, ${theme.primary}, ${theme.secondary});
    border-radius: 2px;
  }
`;

const CareerList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
`;

const CareerItem = styled.li`
  margin-bottom: 0.5rem;
  color: ${theme.text};
  font-size: 0.95rem;
  position: relative;
  padding-left: 1rem;
  
  &:before {
    content: '•';
    position: absolute;
    left: 0;
    color: ${theme.secondary};
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ResearchFieldTitle = styled.h4`
  font-size: 1rem;
  margin: 0 0 0.75rem 0;
  color: ${theme.primary};
  font-weight: 600;
`;

const ResearchFieldsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
`;

const ResearchField = styled.span`
  background: ${props => props.index % 3 === 0 ? 
    `linear-gradient(135deg, ${theme.primary} 0%, ${theme.secondary} 100%)` : 
    props.index % 3 === 1 ? 
    `linear-gradient(135deg, ${theme.secondary} 0%, ${theme.accent} 100%)` :
    `linear-gradient(135deg, ${theme.darkBlue} 0%, ${theme.primary} 100%)`};
  color: ${theme.white};
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  display: inline-block;
`;

const MemberCard = ({ member, index }) => {
  // Extract initials for placeholder
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  const initials = getInitials(member.name);
  
  return (
    <Card index={index}>
      <ImageContainer>
        {member.image ? (
          <Image 
            src={member.image} 
            alt={member.name} 
            loading="lazy" 
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
        ) : (
          <PlaceholderContainer>
            <PlaceholderIcon>
              <Initials index={index}>{initials}</Initials>
            </PlaceholderIcon>
            <PlaceholderText>Profile image not available</PlaceholderText>
          </PlaceholderContainer>
        )}
      </ImageContainer>
      <Content>
        <Name>{member.name}</Name>
        
        <CareerList>
          {member.career.map((item, i) => (
            <CareerItem key={i}>{item}</CareerItem>
          ))}
        </CareerList>
        
        <ResearchFieldTitle>Research Fields</ResearchFieldTitle>
        <ResearchFieldsContainer>
          {member.researchFields.map((field, i) => (
            <ResearchField key={i} index={i}>
              {field}
            </ResearchField>
          ))}
        </ResearchFieldsContainer>
      </Content>
    </Card>
  );
};

export default MemberCard;
