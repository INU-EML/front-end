import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import { theme, breakpoints } from '../styles/GlobalStyles';

const MainContainer = styled.div`
  padding-top: 80px; // To account for the fixed navbar
`;

const ContentWrapper = styled.main`
  min-height: calc(100vh - 80px - 300px); // Viewport height minus navbar and footer
`;

const Footer = styled.footer`
  background-color: ${theme.dark};
  color: ${theme.white};
  padding: 4rem 0 2rem;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  
  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterSection = styled.div`
  margin-bottom: 1.5rem;
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 40px;
    height: 3px;
    background: linear-gradient(90deg, ${theme.secondary} 0%, ${theme.accent} 100%);
    margin-top: 0.8rem;
    
    @media (max-width: ${breakpoints.mobile}) {
      margin: 0.8rem auto 0;
    }
  }
`;

const FooterLink = styled.a`
  display: block;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.8rem;
  transition: all 0.3s ease;
  text-decoration: none;
  
  &:hover {
    color: ${theme.accent};
    transform: translateX(5px);
    
    @media (max-width: ${breakpoints.mobile}) {
      transform: none;
    }
  }
`;

const FooterText = styled.p`
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.8rem;
  line-height: 1.6;
`;

const FooterAddress = styled.address`
  font-style: normal;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  
  @media (max-width: ${breakpoints.mobile}) {
    justify-content: center;
  }
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: ${theme.white};
  transition: all 0.3s ease;
  text-decoration: none;
  
  &:hover {
    background-color: ${theme.accent};
    transform: translateY(-3px);
  }
`;

const MainLayout = ({ children }) => {
  return (
    <MainContainer>
      <Navbar />
      <ContentWrapper>
        {children}
      </ContentWrapper>
      <Footer>
        <FooterContainer>
          <FooterSection>
            <FooterTitle>About EML</FooterTitle>
            <FooterText>
            Energy Materials Laboratary (EML) at Incheon National University, led by Prof. Jae-ha Myung, is actively involved in diverse research projects concerning solid oxide cells (SOCs) and energy conversion materials.<br/>
            Our research primarily focuses on developing multifunctional materials for sustainable energy conversion and hydrogen/syngas generation through electrochemistry and catalysis.
            </FooterText>          
          </FooterSection>
          
          <FooterSection>
            <FooterTitle>Quick Links</FooterTitle>
            <FooterLink href="/research/fc-ec">Fuel Cell Research</FooterLink>
            <FooterLink href="/research/nanocatalyst">Nanocatalyst</FooterLink>
            <FooterLink href="/research/battery">Battery Technology</FooterLink>
            <FooterLink href="/publications">Publications</FooterLink>
            <FooterLink href="/members/professor">Meet Our Team</FooterLink>
          </FooterSection>
          
          <FooterSection>
            <FooterTitle>Contact Us</FooterTitle>
            <FooterAddress>
              Department of Materials Science & Engineering<br />
              Incheon National University, Room 377, Bldg. No. 8<br />
              119 Academy-ro, Yeonsu-gu<br />
              Incheon 22012, South Korea<br/>
              Email: mjaeha@inu.ac.kr<br/>
              Seoul, South Korea
            </FooterAddress>
            <FooterText>
              Email: contact@emllab.com<br />
              Phone: +82-2-123-4567
            </FooterText>
          </FooterSection>
        </FooterContainer>
        
        <Copyright>
          &copy; {new Date().getFullYear()} Energy Materials Laboratory. All rights reserved.
        </Copyright>
      </Footer>
    </MainContainer>
  );
};

export default MainLayout;
