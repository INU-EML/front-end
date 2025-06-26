import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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

const FooterLink = styled(Link)`
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
  line-height: 1.5;
  font-size: 0.9rem;
  margin-bottom: 1.2rem;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.5;
  
  a {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: ${theme.accent};
    }
  }
  
  .contact-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    i {
      color: ${theme.accent};
      width: 16px;
    }
  }
  
  @media (max-width: ${breakpoints.mobile}) {
    .contact-item {
      justify-content: center;
    }
  }
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
            <FooterTitle>Research Focus</FooterTitle>
            <FooterText>
              Our laboratory specializes in advanced energy materials research with focus on:
            </FooterText>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '12px' }}>
              <span style={{ background: 'rgba(255,255,255,0.1)', padding: '4px 10px', borderRadius: '4px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)' }}>SOFC/EC</span>
              <span style={{ background: 'rgba(255,255,255,0.1)', padding: '4px 10px', borderRadius: '4px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)' }}>PCFC</span>
              <span style={{ background: 'rgba(255,255,255,0.1)', padding: '4px 10px', borderRadius: '4px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)' }}>MCEC</span>
              <span style={{ background: 'rgba(255,255,255,0.1)', padding: '4px 10px', borderRadius: '4px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)' }}>Exsolution</span>
              <span style={{ background: 'rgba(255,255,255,0.1)', padding: '4px 10px', borderRadius: '4px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)' }}>Nanocomposite</span>
              <span style={{ background: 'rgba(255,255,255,0.1)', padding: '4px 10px', borderRadius: '4px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)' }}>Metal-air battery</span>
            </div>
          </FooterSection>
          
          <FooterSection>
            <FooterTitle>Quick Links</FooterTitle>
            <FooterLink to="/research/fc-ec">Fuel Cell Research</FooterLink>
            <FooterLink to="/research/nanocatalyst">Nanocatalyst</FooterLink>
            <FooterLink to="/research/battery">Battery Technology</FooterLink>
            <FooterLink to="/publications">Publications</FooterLink>
            <FooterLink to="/members/professor">Meet Our Team</FooterLink>
          </FooterSection>
          
          <FooterSection>
            <FooterTitle>Contact Us</FooterTitle>
            <FooterAddress>
              Department of Materials Science & Engineering<br />
              Incheon National University, Room 377, Bldg. No. 8<br />
              119 Academy-ro, Yeonsu-gu<br />
              Incheon 22012, South Korea
            </FooterAddress>
            <ContactInfo>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <a href="mailto:mjaeha@inu.ac.kr">mjaeha@inu.ac.kr</a>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>+82-32-835-8407</span>
              </div>
            </ContactInfo>
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
