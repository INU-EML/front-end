import React, { useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { theme, breakpoints } from '../../styles/GlobalStyles';
import { currentMembersData } from '../../data/Members/CurrentMembersData';
import MemberCard from '../../components/members/MemberCard';

// Animation keyframes
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.03); }
  100% { transform: scale(1); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const PageContainer = styled.div`
  padding: 6rem 0 3rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  
  @media (max-width: ${breakpoints.desktop}) {
    padding: 6rem 2rem 3rem;
  }
  
  @media (max-width: ${breakpoints.mobile}) {
    padding: 6rem 1rem 2rem;
  }
`;

const PageHeader = styled.div`
  margin-bottom: 3rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  background: linear-gradient(135deg, ${theme.primary} 0%, ${theme.secondary} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: ${theme.textLight};
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

const SectionContainer = styled.section`
  margin-bottom: 4rem;
  padding: 2.5rem 2rem;
  border-radius: 16px;
  position: relative;
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.8s ease-out forwards;
  animation-delay: ${props => props.index * 0.2}s;
  opacity: 0;
  
  /* Different background styles for each section */
  ${props => props.index === 0 && css`
    background: linear-gradient(135deg, rgba(0, 102, 204, 0.05) 0%, rgba(0, 102, 204, 0.02) 100%);
    box-shadow: 0 10px 30px rgba(0, 102, 204, 0.05);
    
    &:before {
      content: '';
      position: absolute;
      top: -15px;
      right: 10%;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(0, 102, 204, 0.1) 0%, rgba(0, 102, 204, 0) 70%);
      z-index: -1;
    }
  `}
  
  ${props => props.index === 1 && css`
    background: linear-gradient(135deg, rgba(0, 168, 255, 0.05) 0%, rgba(0, 168, 255, 0.02) 100%);
    box-shadow: 0 10px 30px rgba(0, 168, 255, 0.05);
    
    &:before {
      content: '';
      position: absolute;
      bottom: -20px;
      left: 15%;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(0, 168, 255, 0.1) 0%, rgba(0, 168, 255, 0) 70%);
      z-index: -1;
    }
  `}
  
  ${props => props.index === 2 && css`
    background: linear-gradient(135deg, rgba(0, 229, 255, 0.05) 0%, rgba(0, 229, 255, 0.02) 100%);
    box-shadow: 0 10px 30px rgba(0, 229, 255, 0.05);
    
    &:before {
      content: '';
      position: absolute;
      top: 20%;
      right: -20px;
      width: 120px;
      height: 120px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(0, 229, 255, 0.1) 0%, rgba(0, 229, 255, 0) 70%);
      z-index: -1;
    }
  `}
  
  ${props => props.index === 3 && css`
    background: linear-gradient(135deg, rgba(26, 42, 58, 0.05) 0%, rgba(26, 42, 58, 0.02) 100%);
    box-shadow: 0 10px 30px rgba(26, 42, 58, 0.05);
    
    &:before {
      content: '';
      position: absolute;
      bottom: 30%;
      left: -15px;
      width: 90px;
      height: 90px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(26, 42, 58, 0.1) 0%, rgba(26, 42, 58, 0) 70%);
      z-index: -1;
    }
  `}
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  }
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: ${breakpoints.tablet}) {
    padding: 2rem 1.5rem;
  }
  
  @media (max-width: ${breakpoints.mobile}) {
    padding: 1.5rem 1rem;
  }
`;

const SectionHeader = styled.div`
  margin-bottom: 2rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  
  &:before {
    content: '';
    flex-grow: 1;
    height: 1px;
    background: ${props => {
      switch(props.index) {
        case 0: return 'linear-gradient(to right, transparent, rgba(0, 102, 204, 0.5))';
        case 1: return 'linear-gradient(to right, transparent, rgba(0, 168, 255, 0.5))';
        case 2: return 'linear-gradient(to right, transparent, rgba(0, 229, 255, 0.5))';
        case 3: return 'linear-gradient(to right, transparent, rgba(26, 42, 58, 0.5))';
        default: return theme.border;
      }
    }};
    margin-right: 1.5rem;
  }
  
  &:after {
    content: '';
    flex-grow: 1;
    height: 1px;
    background: ${props => {
      switch(props.index) {
        case 0: return 'linear-gradient(to left, transparent, rgba(0, 102, 204, 0.5))';
        case 1: return 'linear-gradient(to left, transparent, rgba(0, 168, 255, 0.5))';
        case 2: return 'linear-gradient(to left, transparent, rgba(0, 229, 255, 0.5))';
        case 3: return 'linear-gradient(to left, transparent, rgba(26, 42, 58, 0.5))';
        default: return theme.border;
      }
    }};
    margin-left: 1.5rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: ${props => {
    switch(props.index) {
      case 0: return theme.primary;
      case 1: return theme.secondary;
      case 2: return theme.accent;
      case 3: return theme.darkBlue;
      default: return theme.darkBlue;
    }
  }};
  position: relative;
  margin: 0;
  padding: 0 1rem;
  transition: all 0.3s ease;
  
  ${props => props.index === 0 && css`
    animation: ${pulse} 3s infinite ease-in-out;
  `}
  
  ${props => props.index === 1 && css`
    animation: ${pulse} 3.5s infinite ease-in-out;
  `}
  
  ${props => props.index === 2 && css`
    animation: ${pulse} 4s infinite ease-in-out;
  `}
  
  ${props => props.index === 3 && css`
    animation: ${pulse} 4.5s infinite ease-in-out;
  `}
  
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`;

const MembersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  
  /* Animation for child elements */
  & > div {
    opacity: 0;
    animation: ${fadeIn} 0.6s ease-out forwards;
  }
  
  /* Staggered animation delay for each card */
  & > div:nth-child(1) { animation-delay: 0.1s; }
  & > div:nth-child(2) { animation-delay: 0.2s; }
  & > div:nth-child(3) { animation-delay: 0.3s; }
  & > div:nth-child(4) { animation-delay: 0.4s; }
  & > div:nth-child(5) { animation-delay: 0.5s; }
  & > div:nth-child(6) { animation-delay: 0.6s; }
  
  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const EmptyMessage = styled.p`
  text-align: center;
  padding: 2rem;
  color: ${theme.textLight};
  font-style: italic;
  background-color: ${theme.lightGray || '#f5f7fa'};
  border-radius: 8px;
  grid-column: 1 / -1;
`;













// Background shape components
const BackgroundShape = styled.div`
  position: absolute;
  border-radius: 50%;
  opacity: 0.05;
  z-index: -1;
`;

const Shape1 = styled(BackgroundShape)`
  width: 300px;
  height: 300px;
  top: 15%;
  left: -150px;
  background: radial-gradient(circle, ${theme.primary} 0%, transparent 70%);
  animation: ${float} 15s infinite ease-in-out;
`;

const Shape2 = styled(BackgroundShape)`
  width: 200px;
  height: 200px;
  top: 40%;
  right: -100px;
  background: radial-gradient(circle, ${theme.secondary} 0%, transparent 70%);
  animation: ${float} 12s infinite ease-in-out reverse;
`;

const Shape3 = styled(BackgroundShape)`
  width: 250px;
  height: 250px;
  bottom: 10%;
  left: 10%;
  background: radial-gradient(circle, ${theme.accent} 0%, transparent 70%);
  animation: ${float} 18s infinite ease-in-out;
`;

const CurrentMembers = () => {
  const { postDoctors, doctoralCourse, masterCourse, interns } = currentMembersData;

  return (
    <PageContainer>
      {/* Background shapes */}
      <Shape1 />
      <Shape2 />
      <Shape3 />
      
      <PageHeader>
        <Title>Current Lab Members</Title>
        <Description>
          Meet our team of talented researchers working on cutting-edge projects in electrochemical materials and energy technologies.
        </Description>
      </PageHeader>

      {/* Post Doctor Section */}
      <SectionContainer index={0}>
        <SectionHeader index={0}>
          <SectionTitle index={0}>Post Doctors</SectionTitle>
        </SectionHeader>
        <MembersGrid>
          {postDoctors && postDoctors.length > 0 ? (
            postDoctors.map((member, index) => (
              <MemberCard key={index} member={member} index={index} />
            ))
          ) : (
            <EmptyMessage>Currently no post doctors in the lab.</EmptyMessage>
          )}
        </MembersGrid>
      </SectionContainer>

      {/* Doctoral Course Section */}
      <SectionContainer index={1}>
        <SectionHeader index={1}>
          <SectionTitle index={1}>Doctoral Course</SectionTitle>
        </SectionHeader>
        <MembersGrid>
          {doctoralCourse && doctoralCourse.length > 0 ? (
            doctoralCourse.map((member, index) => (
              <MemberCard key={index} member={member} index={index} />
            ))
          ) : (
            <EmptyMessage>Currently no doctoral students in the lab.</EmptyMessage>
          )}
        </MembersGrid>
      </SectionContainer>

      {/* Master Course Section */}
      <SectionContainer index={2}>
        <SectionHeader index={2}>
          <SectionTitle index={2}>Master Course</SectionTitle>
        </SectionHeader>
        <MembersGrid>
          {masterCourse && masterCourse.length > 0 ? (
            masterCourse.map((member, index) => (
              <MemberCard key={index} member={member} index={index} />
            ))
          ) : (
            <EmptyMessage>Currently no master students in the lab.</EmptyMessage>
          )}
        </MembersGrid>
      </SectionContainer>

      {/* Interns Section */}
      <SectionContainer index={3}>
        <SectionHeader index={3}>
          <SectionTitle index={3}>Interns</SectionTitle>
        </SectionHeader>
        <MembersGrid>
          {interns && interns.length > 0 ? (
            interns.map((member, index) => (
              <MemberCard key={index} member={member} index={index} />
            ))
          ) : (
            <EmptyMessage>Currently no interns in the lab.</EmptyMessage>
          )}
        </MembersGrid>
      </SectionContainer>
    </PageContainer>
  );
};

export default CurrentMembers;
