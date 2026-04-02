import React, { useState } from 'react';
import styled from 'styled-components';
import { theme, breakpoints } from '../../styles/GlobalStyles';
import { professorData } from '../../data/Members/Professor';
import Timeline from '../../components/members/Timeline';
import PublicationTabs from '../../components/members/PublicationTabs';
import CollapsibleSection from '../../components/members/CollapsibleSection';

const PageContainer = styled.div`
  padding: 6rem 0 3rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: ${breakpoints.desktop}) {
    padding: 6rem 2rem 3rem;
  }
  
  @media (max-width: ${breakpoints.mobile}) {
    padding: 6rem 1rem 2rem;
  }
`;

const ProfileSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
  }
`;

const ImageContainer = styled.div`
  flex: 0 0 300px;
  
  @media (max-width: ${breakpoints.tablet}) {
    flex: 0 0 100%;
    display: flex;
    justify-content: center;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  object-fit: cover;
`;

const ProfileInfo = styled.div`
  flex: 1;
`;

const Name = styled.h1`
  font-size: 2.5rem;
  background: linear-gradient(135deg, ${theme.primary} 0%, ${theme.secondary} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
  
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const Position = styled.h2`
  font-size: 1.2rem;
  color: ${theme.textLight};
  margin-bottom: 1.5rem;
  font-weight: 500;
`;

const ContactButtonContainer = styled.div`
  margin-bottom: 2rem;
`;

const ContactButton = styled.button`
  background: linear-gradient(135deg, ${theme.primary} 0%, ${theme.secondary} 100%);
  color: ${theme.white};
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.2s ease-out;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalContent = styled.div`
  background: ${theme.white};
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  padding: 2rem;
  max-width: 500px;
  width: 90%;
  animation: slideIn 0.3s ease-out;
  position: relative;
  
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @media (max-width: ${breakpoints.mobile}) {
    padding: 1.5rem;
    margin: 1rem;
  }
`;

const ModalHeader = styled.h2`
  font-size: 1.8rem;
  color: ${theme.primary};
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${theme.textLight};
  cursor: pointer;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${theme.text};
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: #f5f9ff;
  border-radius: 8px;
  border-left: 4px solid ${theme.secondary};
`;

const ContactLabel = styled.strong`
  color: ${theme.primary};
  font-weight: 600;
  min-width: 70px;
  white-space: nowrap;
`;

const ContactLabel2 = styled.strong`
  color: ${theme.primary};
  font-weight: 600;
  min-width: 70px;
  white-space: nowrap;
`;

const ContactValue = styled.p`
  margin: 0;
  color: ${theme.text};
  word-break: break-all;
`;

const ContactLink = styled.a`
  color: ${theme.secondary};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${theme.primary};
    text-decoration: underline;
  }
`;

const ContentGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 3rem;
  
  & > div {
    flex: 1 1 calc(50% - 1rem);
    min-width: 300px;
    align-self: flex-start;
  }
  
  @media (max-width: ${breakpoints.tablet}) {
    & > div {
      flex: 1 1 100%;
    }
  }
`;

const ResearchInterests = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const InterestTag = styled.span`
  background: ${props => props.index % 3 === 0 ? 
    `linear-gradient(135deg, ${theme.primary} 0%, ${theme.secondary} 100%)` : 
    props.index % 3 === 1 ? 
    `linear-gradient(135deg, ${theme.secondary} 0%, ${theme.accent} 100%)` :
    `linear-gradient(135deg, ${theme.darkBlue} 0%, ${theme.primary} 100%)`};
  color: ${theme.white};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  display: inline-block;
`;

const FeaturedPublications = styled.div`
  margin-top: 1.5rem;
`;

const FeaturedItem = styled.div`
  background-color: ${props => props.index % 2 === 0 ? theme.white : '#f5f9ff'};
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border-left: 4px solid ${props => props.index % 2 === 0 ? theme.primary : theme.secondary};
  color: ${props => props.index % 2 === 0 ? theme.text : theme.darkBlue};
  
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const TabsContainer = styled.div`
  margin-top: 2rem;
`;

const Professor = () => {
  const { profile, position, education, career, publications, researchInterests } = professorData;
  const [showContactModal, setShowContactModal] = useState(false);
  
  const openContactModal = () => setShowContactModal(true);
  const closeContactModal = () => setShowContactModal(false);
  
  return (
    <PageContainer>
      <ProfileSection>
        <ImageContainer>
          <ProfileImage src={profile.image} alt={profile.name} />
        </ImageContainer>
        
        <ProfileInfo>
          <Name>{profile.name}</Name>
          <Position>{position.position}</Position>
          
          <ContactButtonContainer>
            <ContactButton onClick={openContactModal}>
              📧 Contact Information
            </ContactButton>
          </ContactButtonContainer>
          
          {showContactModal && (
            <ModalOverlay onClick={closeContactModal}>
              <ModalContent onClick={(e) => e.stopPropagation()}>
                <ModalHeader>
                  <span>Contact Information</span>
                  <CloseButton onClick={closeContactModal}>✕</CloseButton>
                </ModalHeader>
                
                <ContactInfo>
                  <ContactItem>
                    <ContactLabel>Tel:</ContactLabel>
                    <ContactValue>{profile.contact.tel}</ContactValue>
                  </ContactItem>
                  
                  <ContactItem>
                    <ContactLabel2>Email:</ContactLabel2>
                    <ContactValue>
                      <ContactLink href={`mailto:${profile.contact.email}`}>
                        {profile.contact.email}
                      </ContactLink>
                    </ContactValue>
                  </ContactItem>
                  
                  <ContactItem>
                    <ContactLabel>Office:</ContactLabel>
                    <ContactValue>{profile.contact.office}</ContactValue>
                  </ContactItem>
                </ContactInfo>
              </ModalContent>
            </ModalOverlay>
          )}
          
          <CollapsibleSection title="Research Interests" defaultOpen={true}>
            <ResearchInterests>
              {researchInterests.map((interest, index) => (
                <InterestTag key={index} index={index}>{interest}</InterestTag>
              ))}
            </ResearchInterests>
          </CollapsibleSection>
        </ProfileInfo>
      </ProfileSection>
      
      <ContentGrid>
        <CollapsibleSection title="Education" defaultOpen={true}>
          <Timeline items={education} />
        </CollapsibleSection>
        
        <CollapsibleSection title="Career" defaultOpen={true}>
          <Timeline items={career} />
        </CollapsibleSection>
      </ContentGrid>
      
      <CollapsibleSection title="Featured Publications">
        <FeaturedPublications>
          {publications.featured.map((publication, index) => (
            <FeaturedItem key={index} index={index}>{publication}</FeaturedItem>
          ))}
        </FeaturedPublications>
      </CollapsibleSection>
      
      <CollapsibleSection title="Publications by Year">
        <TabsContainer>
          <PublicationTabs publications={publications} />
        </TabsContainer>
      </CollapsibleSection>
    </PageContainer>
  );
};

export default Professor;
