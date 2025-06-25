import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { theme, breakpoints } from '../../styles/GlobalStyles';
import { alumniData } from '../../data/Members/AlumniData';
import AlumniCard from '../../components/members/AlumniCard';

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
  animation: ${fadeIn} 0.8s ease-out forwards;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  background: linear-gradient(135deg, ${theme.primary}, ${theme.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
  
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: ${theme.text};
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
  }
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

const AlumniGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  
  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const EmptyMessage = styled.p`
  text-align: center;
  color: ${theme.gray};
  font-style: italic;
  padding: 2rem;
  grid-column: 1 / -1;
`;










const Alumni = () => {
  return (
    <PageContainer>
      {/* Background shapes */}
      <Shape1 />
      <Shape2 />
      <Shape3 />
      
      <PageHeader>
        <Title>Alumni</Title>
        <Description>
          Former members of our laboratory who have gone on to successful careers in academia, industry, and research institutions.
        </Description>
      </PageHeader>

      <AlumniGrid>
        {alumniData && alumniData.length > 0 ? (
          alumniData.map((alumni, index) => (
            <AlumniCard key={index} alumni={alumni} index={index} />
          ))
        ) : (
          <EmptyMessage>No alumni data available at this time.</EmptyMessage>
        )}
      </AlumniGrid>
    </PageContainer>
  );
};

export default Alumni;
