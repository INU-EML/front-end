import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme, breakpoints } from '../../styles/GlobalStyles';
import { professorData } from '../../data/Home/professorData';

const ProfileContainer = styled.section`
  padding: 5rem 0;
  background-color: ${theme.darkBlue};
  color: ${theme.white};
`;

const ProfileContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3rem;
  
  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }
`;

const ImageContainer = styled.div`
  flex: 0 0 300px;
  
  @media (max-width: ${breakpoints.tablet}) {
    flex: 0 0 250px;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
`;

const InfoContainer = styled.div`
  flex: 1;
`;

const Name = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, ${theme.secondary} 0%, ${theme.accent} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const Position = styled.h3`
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
  color: ${theme.white};
  opacity: 0.9;
  line-height: 1.6;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.85;
`;

const DetailsButton = styled(Link)`
  display: inline-block;
  background: linear-gradient(135deg, ${theme.secondary} 0%, ${theme.accent} 100%);
  color: ${theme.white};
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 500;
  margin-top: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;

const AccordionContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const AccordionItem = styled.div`
  margin-bottom: 1rem;
  border-radius: 5px;
  overflow: hidden;
`;

const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  cursor: pointer;
  transition: background 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const AccordionTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 500;
  margin: 0;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.5rem;
  }
`;

const AccordionIcon = styled.span`
  transition: transform 0.3s ease;
  transform: ${({ isOpen }) => isOpen ? 'rotate(180deg)' : 'rotate(0)'};
`;

const AccordionContent = styled.div`
  padding: ${({ isOpen }) => isOpen ? '1rem' : '0'};
  max-height: ${({ isOpen }) => isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.02);
`;

const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const InfoItem = styled.li`
  padding: 0.5rem 0;
  display: flex;
  align-items: flex-start;
  
  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const InfoLabel = styled.span`
  font-weight: 500;
  margin-right: 0.5rem;
  color: ${theme.accent};
`;

const InfoValue = styled.span`
  opacity: 0.9;
`;

const ProfessorProfile = () => {
  const [openAccordion, setOpenAccordion] = useState(null);
  
  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };
  
  return (
    <ProfileContainer>
      <ProfileContent>
        <ImageContainer>
          <ProfileImage src={professorData.image} alt={professorData.name} />
        </ImageContainer>
        
        <InfoContainer>
          <Name>{professorData.name}</Name>
          <Position>
            {professorData.position}
          </Position>
          <Description>
            {professorData.description}
          </Description>
          
          <AccordionContainer>
            <AccordionItem>
              <AccordionHeader onClick={() => toggleAccordion(0)}>
                <AccordionTitle>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.708 2.825L15 11.105V5.383zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741zM1 11.105l4.708-2.897L1 5.383v5.722z"/>
                  </svg>
                  Contact Information
                </AccordionTitle>
                <AccordionIcon isOpen={openAccordion === 0}>▼</AccordionIcon>
              </AccordionHeader>
              <AccordionContent isOpen={openAccordion === 0}>
                <InfoList>
                  {professorData.contact.map((item, index) => (
                    <InfoItem key={index}>
                      <InfoLabel>{item.label}:</InfoLabel>
                      <InfoValue>{item.value}</InfoValue>
                    </InfoItem>
                  ))}
                </InfoList>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem>
              <AccordionHeader onClick={() => toggleAccordion(1)}>
                <AccordionTitle>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z"/>
                    <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z"/>
                  </svg>
                  Education
                </AccordionTitle>
                <AccordionIcon isOpen={openAccordion === 1}>▼</AccordionIcon>
              </AccordionHeader>
              <AccordionContent isOpen={openAccordion === 1}>
                <InfoList>
                  {professorData.education.map((item, index) => (
                    <InfoItem key={index}>
                      <InfoLabel>{item.degree}</InfoLabel>
                      <InfoValue>{item.details}</InfoValue>
                    </InfoItem>
                  ))}
                </InfoList>
              </AccordionContent>
            </AccordionItem>
          </AccordionContainer>
          
          <DetailsButton to={professorData.profileLink}>
            View Full Profile
          </DetailsButton>
        </InfoContainer>
      </ProfileContent>
    </ProfileContainer>
  );
};

export default ProfessorProfile;
