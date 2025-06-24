import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { researchData } from '../data/Home/researchData';
import { publicationData } from '../data/Home/publicationData';
import { theme, breakpoints } from '../styles/GlobalStyles';
import ResearchItem from '../components/Home/ResearchItem';
import PublicationItem from '../components/Home/PublicationItem';
import ProfessorProfile from '../components/Home/ProfessorProfile';

// Hero Section
const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('/src/assets/images/Home/home_background.png') center/cover no-repeat;
    z-index: 0;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7); /* 검정색 오버레이 추가 (투명도 70%) */
    z-index: 1;
  }
`;

const HeroContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 0 2rem;
  position: relative;
  z-index: 2; /* 오버레이보다 위에 표시되도록 z-index 증가 */
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2; /* 오버레이보다 위에 표시되도록 z-index 증가 */
  max-width: 800px;
  padding: 0 2rem;
  margin: 0 auto;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: ${theme.white};
  background: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 2px 10px rgba(79, 172, 254, 0.3);
  
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 2.8rem;
  }
  
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 2.2rem;
  }
`;

const HeroSubtitle = styled.div`
  max-width: 800px;
  margin: 0 auto 1.5rem;
  color: ${theme.white};
  line-height: 1.8;
  letter-spacing: 0.3px;
  text-align: center;
  
  .short-intro {
    font-size: 1.25rem;
    font-weight: 300;
    opacity: 0.9;
  }
  
  .full-intro {
    font-size: 1.1rem;
    font-weight: 300;
    opacity: 0.85;
    max-width: 700px;
    margin: 0 auto;
    
    strong {
      color: ${theme.accent};
      font-weight: 500;
      opacity: 1;
    }
  }
  
  @media (max-width: ${breakpoints.mobile}) {
    .short-intro {
      font-size: 1.1rem;
    }
    
    .full-intro {
      font-size: 0.95rem;
    }
  }
`;

const ReadMoreButton = styled.button`
  background: transparent;
  border: none;
  color: ${theme.white};
  font-size: 0.9rem;
  font-weight: 300;
  cursor: pointer;
  padding: 0;
  margin: 0 auto 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  opacity: 0.7;
  letter-spacing: 0.5px;
  
  &:hover {
    opacity: 1;
  }
  
  span {
    margin-left: 5px;
    font-size: 0.7rem;
    transition: transform 0.3s ease;
  }
  
  &.expanded span {
    transform: rotate(180deg);
  }
`;

const HeroButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const PrimaryButton = styled(Link)`
  display: inline-block;
  background: linear-gradient(135deg, ${theme.secondary} 0%, ${theme.accent} 100%);
  color: ${theme.white};
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }
  
  @media (max-width: ${breakpoints.mobile}) {
    padding: 0.8rem 1.6rem;
    font-size: 1rem;
  }
`;

const SecondaryButton = styled(Link)`
  display: inline-block;
  background: ${theme.white};
  color: ${theme.dark};
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }
  
  @media (max-width: ${breakpoints.mobile}) {
    padding: 0.8rem 1.6rem;
    font-size: 1rem;
  }
`;

// Research Areas Section
const ResearchSection = styled.section`
  padding: 6rem 0;
  background-color: ${theme.lightGray || '#f5f7fa'};
`;

const SectionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: ${breakpoints.tablet}) {
    padding: 0 1.5rem;
  }
  
  @media (max-width: ${breakpoints.mobile}) {
    padding: 0 1rem;
  }
`;

const SectionHeader = styled.div`
  margin-bottom: 3rem;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  color: ${theme.dark};
  margin-bottom: 1rem;
  
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  text-align: center;
  color: ${theme.textLight || '#666'};
  max-width: 700px;
  margin: 0 auto 2rem;
  
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
  }
`;

const ResearchSliderContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 0 0 2rem;
`;

const ResearchSlider = styled.div`
  display: flex;
  gap: 1.5rem;
  width: 100%;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 1.5rem 0;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
  
  /* CSS Scroll Snap */
  scroll-snap-type: x mandatory;
  scroll-padding: 0;
`;

const SliderDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
`;

const SliderDot = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${props => props.active ? theme.accent : '#ccc'};
  border: none;
  padding: 0;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? theme.accent : theme.secondary};
  }
`;

// Publications Section
const PublicationsSection = styled.section`
  padding: 6rem 0;
  background-color: ${theme.white};
`;

const PublicationsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
`;

const PublicationsHeader = styled.div`
  margin-bottom: 3rem;
  text-align: center;
`;

const PublicationsTitle = styled.h2`
  font-size: 2.5rem;
  color: ${theme.dark};
  margin-bottom: 1rem;
`;

const PublicationsDescription = styled.p`
  color: ${theme.textLight || '#666'};
  max-width: 700px;
  margin: 0 auto;
`;

const PublicationsScroll = styled.div`
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  padding: 1rem 0;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  scroll-behavior: smooth;
  
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
  
  /* CSS Scroll Snap */
  scroll-snap-type: x mandatory;
  scroll-padding: 1rem;
`;

const PublicationsDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
`;

const PublicationDot = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${props => props.active ? theme.accent : '#ccc'};
  border: none;
  padding: 0;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? theme.accent : theme.secondary};
  }
`;

const Home = () => {
  // Research slider functionality
  const sliderRef = useRef(null);
  const publicationsRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activePublicationIndex, setActivePublicationIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPublicationsHovered, setIsPublicationsHovered] = useState(false);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);
  const [autoPublicationsScrollEnabled, setAutoPublicationsScrollEnabled] = useState(true);
  const [expanded, setExpanded] = useState(false);
  
  // Handle scroll events to update active index for Research slider
  useEffect(() => {
    const handleScroll = () => {
      if (sliderRef.current) {
        const scrollLeft = sliderRef.current.scrollLeft;
        const cardWidth = 360 + 24; // card width + gap
        const newIndex = Math.round(scrollLeft / cardWidth);
        
        if (newIndex !== activeIndex && newIndex >= 0 && newIndex < researchData.length) {
          setActiveIndex(newIndex);
        }
      }
    };
    
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', handleScroll);
    }
    
    return () => {
      if (slider) {
        slider.removeEventListener('scroll', handleScroll);
      }
    };
  }, [activeIndex]);
  
  // Handle scroll events to update active index for Publications slider
  useEffect(() => {
    const handlePublicationsScroll = () => {
      if (publicationsRef.current) {
        const scrollLeft = publicationsRef.current.scrollLeft;
        const cardWidth = 320 + 24; // card width + gap
        const newIndex = Math.round(scrollLeft / cardWidth);
        
        if (newIndex !== activePublicationIndex && newIndex >= 0 && newIndex < publicationData.length) {
          setActivePublicationIndex(newIndex);
        }
      }
    };
    
    const slider = publicationsRef.current;
    if (slider) {
      slider.addEventListener('scroll', handlePublicationsScroll);
    }
    
    return () => {
      if (slider) {
        slider.removeEventListener('scroll', handlePublicationsScroll);
      }
    };
  }, [activePublicationIndex]);
  
  // Auto-scroll functionality for Research slider
  useEffect(() => {
    let interval;
    
    if (autoScrollEnabled && !isHovered) {
      interval = setInterval(() => {
        if (sliderRef.current) {
          const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
          const nextScrollLeft = sliderRef.current.scrollLeft + (360 + 24); // card width + gap
          
          if (nextScrollLeft > maxScrollLeft) {
            // Reset to beginning when reaching the end
            sliderRef.current.scrollLeft = 0;
            setActiveIndex(0);
          } else {
            sliderRef.current.scrollLeft = nextScrollLeft;
            setActiveIndex(prev => (prev + 1) % researchData.length);
          }
        }
      }, 5000); // Auto-scroll every 5 seconds
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoScrollEnabled, isHovered, researchData.length]);
  
  // Auto-scroll functionality for Publications slider
  useEffect(() => {
    let interval;
    
    if (autoPublicationsScrollEnabled && !isPublicationsHovered) {
      interval = setInterval(() => {
        if (publicationsRef.current) {
          const maxScrollLeft = publicationsRef.current.scrollWidth - publicationsRef.current.clientWidth;
          const nextScrollLeft = publicationsRef.current.scrollLeft + (320 + 24); // card width + gap
          
          if (nextScrollLeft > maxScrollLeft) {
            // Reset to beginning when reaching the end
            publicationsRef.current.scrollLeft = 0;
            setActivePublicationIndex(0);
          } else {
            publicationsRef.current.scrollLeft = nextScrollLeft;
            setActivePublicationIndex(prev => (prev + 1) % publicationData.length);
          }
        }
      }, 5000); // Auto-scroll every 5 seconds
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoPublicationsScrollEnabled, isPublicationsHovered, publicationData.length]);
  
  // Handle dot click for Research navigation
  const handleDotClick = (index) => {
    if (sliderRef.current) {
      const cardWidth = 360 + 24; // card width + gap
      const scrollLeft = index * cardWidth;
      
      sliderRef.current.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
    setAutoScrollEnabled(false); // Disable auto-scroll when manually navigating
  };
  
  // Handle dot click for Publications navigation
  const handlePublicationDotClick = (index) => {
    if (publicationsRef.current) {
      const cardWidth = 320 + 24; // card width + gap
      const scrollLeft = index * cardWidth;
      
      publicationsRef.current.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
      setActivePublicationIndex(index);
    }
    setAutoPublicationsScrollEnabled(false); // Disable auto-scroll when manually navigating
  };
  
  return (
    <>
      <HeroSection>
        <HeroContainer>
          <HeroContent>
            <HeroTitle>Energy Materials Laboratory</HeroTitle>
            <HeroSubtitle>
              {expanded 
                ? <div className="full-intro">
                    <strong>Energy Materials Laboratary (EML)</strong> at Incheon National University, led by <strong>Prof. Jae-ha Myung</strong>, is actively involved in diverse research projects concerning solid oxide cells (SOCs) and energy conversion materials. <br /><br />
                    Our research primarily focuses on developing <strong>multifunctional materials</strong> for sustainable energy conversion and hydrogen/syngas generation through electrochemistry and catalysis.
                  </div>
                : <div className="short-intro">Energy Materials Laboratary (EML) at Incheon National University</div>}
            </HeroSubtitle>
            <ReadMoreButton 
              onClick={() => setExpanded(!expanded)}
              className={expanded ? 'expanded' : ''}
            >
              {expanded ? 'Show Less' : 'Read More'}
              <span>▼</span>
            </ReadMoreButton>
            <HeroButtons>
              <PrimaryButton to="/research">Our Research</PrimaryButton>
              <SecondaryButton to="/about">About Us</SecondaryButton>
            </HeroButtons>
          </HeroContent>
        </HeroContainer>
      </HeroSection>
      
      <ResearchSection id="research">
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>Research Areas</SectionTitle>
            <SectionSubtitle>
              Explore our diverse research areas focused on advancing energy materials and technologies.
            </SectionSubtitle>
          </SectionHeader>
          
          <ResearchSliderContainer>
            <ResearchSlider 
              ref={sliderRef}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {researchData.map((research, index) => (
                <ResearchItem 
                  key={research.id}
                  research={research}
                  isActive={index === activeIndex}
                />
              ))}
            </ResearchSlider>
            
            <SliderDots>
              {researchData.map((_, index) => (
                <SliderDot 
                  key={index} 
                  active={index === activeIndex}
                  onClick={() => handleDotClick(index)}
                />
              ))}
            </SliderDots>
          </ResearchSliderContainer>
        </SectionContainer>
      </ResearchSection>
      
      <ProfessorProfile />
      
      <PublicationsSection>
        <PublicationsContainer>
          <PublicationsHeader>
            <PublicationsTitle>Recent Publications</PublicationsTitle>
            <PublicationsDescription>
              Explore our latest research publications and scientific contributions.
            </PublicationsDescription>
          </PublicationsHeader>
          
          <PublicationsScroll 
            ref={publicationsRef}
            onMouseEnter={() => setIsPublicationsHovered(true)}
            onMouseLeave={() => setIsPublicationsHovered(false)}
          >
            {publicationData.map(publication => (
              <PublicationItem key={publication.id} publication={publication} />
            ))}
          </PublicationsScroll>
          
          <PublicationsDots>
            {publicationData.map((_, index) => (
              <PublicationDot 
                key={index} 
                active={index === activePublicationIndex}
                onClick={() => handlePublicationDotClick(index)}
              />
            ))}
          </PublicationsDots>
        </PublicationsContainer>
      </PublicationsSection>
    </>
  );
};

export default Home;
