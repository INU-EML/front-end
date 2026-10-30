import React, { useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import { publicationCategories, publicationData } from '../../data/Home/publicationData';
import { theme, breakpoints } from '../../styles/GlobalStyles';
import PublicationItem from './PublicationItem';

const Section = styled.section`
  padding: 6rem 0;
  background: ${theme.white};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0 1rem;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h2 {
    font-size: 2.5rem;
    color: ${theme.dark};
    margin-bottom: 1rem;
  }

  p {
    color: ${theme.textLight};
    margin-bottom: 0;
  }

  @media (max-width: ${breakpoints.mobile}) {
    h2 { font-size: 2rem; }
  }
`;

const Tabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.4rem;
  margin: 0 auto 1.25rem;
  width: fit-content;
  max-width: 100%;
  border: 1px solid #e8edf3;
  border-radius: 14px;
  background: ${theme.light};

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    gap: 0.25rem;
  }
`;

const Tab = styled.button`
  flex: 1;
  padding: 0.8rem 1.4rem;
  border: none;
  border-radius: 10px;
  background: ${props => props.$selected ? theme.primary : 'transparent'};
  color: ${props => props.$selected ? theme.white : theme.textLight};
  box-shadow: ${props => props.$selected ? '0 3px 10px rgba(0, 102, 204, 0.15)' : 'none'};
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1.4;

  &:hover {
    color: ${props => props.$selected ? theme.white : theme.primary};
  }

  &:focus-visible {
    outline: 2px solid ${theme.primary};
    outline-offset: 3px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0.7rem 0.4rem;
    font-size: 0.8rem;
  }
`;

const Description = styled.p`
  text-align: center;
  color: ${theme.textLight};
  font-size: 0.95rem;
  margin-bottom: 1rem;
`;

const Slider = styled.div`
  position: relative;
  display: flex;
  align-items: stretch;
  gap: 1.5rem;
  overflow-x: auto;
  padding: 1rem 4px 1.5rem;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;

  &::-webkit-scrollbar { display: none; }

  &:focus-visible {
    outline: 2px solid ${theme.primary};
    outline-offset: 3px;
    border-radius: 12px;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const Arrow = styled.button`
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  border: 1px solid ${theme.border};
  border-radius: 50%;
  background: ${theme.white};
  color: ${theme.primary};
  font-size: 1rem;

  &:hover:not(:disabled) {
    background: ${theme.primary};
    border-color: ${theme.primary};
    color: ${theme.white};
  }

  &:disabled { opacity: 0.35; cursor: default; }
  &:focus-visible { outline: 2px solid ${theme.primary}; outline-offset: 3px; }
`;

const Dots = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 60%;
`;

const Dot = styled.button`
  width: 24px;
  height: 28px;
  border: none;
  background: transparent;
  display: grid;
  place-items: center;

  &::after {
    content: '';
    width: ${props => props.$active ? '18px' : '7px'};
    height: 7px;
    border-radius: 8px;
    background: ${props => props.$active ? theme.primary : '#cdd7e2'};
  }

  &:focus-visible { outline: 2px solid ${theme.primary}; border-radius: 4px; }
`;

const EmptyState = styled.p`
  padding: 4rem 1rem;
  text-align: center;
  color: ${theme.textLight};
  background: ${theme.light};
  border-radius: 12px;
`;

const PublicationCarousel = ({ publications, category }) => {
  const sliderRef = useRef(null);
  const [positions, setPositions] = useState([0]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [manualNavigation, setManualNavigation] = useState(false);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const measure = () => {
      const maxScroll = Math.max(0, slider.scrollWidth - slider.clientWidth);
      const firstOffset = slider.firstElementChild?.offsetLeft || 0;
      const stops = Array.from(slider.children, card =>
        Math.min(maxScroll, card.offsetLeft - firstOffset)
      );
      const uniqueStops = stops.filter((position, index) => index === 0 || position - stops[index - 1] > 1);
      setPositions(uniqueStops.length ? uniqueStops : [0]);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(slider);
    Array.from(slider.children).forEach(card => observer.observe(card));
    return () => observer.disconnect();
  }, [publications]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    const syncIndex = () => {
      const closest = positions.reduce((best, position, index) =>
        Math.abs(position - slider.scrollLeft) < Math.abs(positions[best] - slider.scrollLeft) ? index : best, 0);
      setActiveIndex(closest);
    };
    syncIndex();
    slider.addEventListener('scroll', syncIndex, { passive: true });
    return () => slider.removeEventListener('scroll', syncIndex);
  }, [positions]);

  useEffect(() => {
    if (hovered || focused || manualNavigation || positions.length < 2) return;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const timer = window.setInterval(() => {
      if (reducedMotion.matches) return;
      sliderRef.current?.scrollTo({ left: positions[(activeIndex + 1) % positions.length], behavior: 'smooth' });
    }, 5000);
    return () => window.clearInterval(timer);
  }, [activeIndex, focused, hovered, manualNavigation, positions]);

  const navigate = index => {
    setManualNavigation(true);
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    sliderRef.current?.scrollTo({ left: positions[index], behavior: reducedMotion ? 'auto' : 'smooth' });
  };

  if (!publications.length) {
    return <EmptyState>No publications in this category yet.</EmptyState>;
  }

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={category.label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={event => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
      }}
    >
      <Slider
        id={`publication-slider-${category.id}`}
        ref={sliderRef}
        tabIndex={0}
        aria-label={`${category.label}, scroll horizontally to explore`}
        onTouchStart={() => setManualNavigation(true)}
        onPointerDown={() => setManualNavigation(true)}
        onWheel={() => setManualNavigation(true)}
        onKeyDown={event => {
          if (event.target !== event.currentTarget) return;
          if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            event.preventDefault();
            navigate(Math.max(0, Math.min(positions.length - 1, activeIndex + (event.key === 'ArrowLeft' ? -1 : 1))));
          }
        }}
      >
        {publications.map(publication => (
          <PublicationItem key={publication.doi} publication={publication} showCoverLabel={category.id === 'cover'} />
        ))}
      </Slider>
      {positions.length > 1 && (
        <Controls>
          <Arrow type="button" onClick={() => navigate(activeIndex - 1)} disabled={activeIndex === 0} aria-label="Previous publication" aria-controls={`publication-slider-${category.id}`}>
            &#10094;
          </Arrow>
          <Dots>
            {positions.map((_, index) => (
              <Dot key={index} type="button" $active={index === activeIndex} aria-current={index === activeIndex ? 'true' : undefined} aria-label={`Go to publication slide ${index + 1}`} onClick={() => navigate(index)} />
            ))}
          </Dots>
          <Arrow type="button" onClick={() => navigate(activeIndex + 1)} disabled={activeIndex === positions.length - 1} aria-label="Next publication" aria-controls={`publication-slider-${category.id}`}>
            &#10095;
          </Arrow>
        </Controls>
      )}
    </div>
  );
};

const PublicationsSection = () => {
  const [activeCategory, setActiveCategory] = useState(publicationCategories[0].id);
  const category = publicationCategories.find(item => item.id === activeCategory);
  const publications = useMemo(() => {
    const filtered = publicationData.filter(publication => publication.categories.includes(activeCategory));
    return activeCategory === 'featured' ? filtered : filtered.sort((a, b) => b.year - a.year);
  }, [activeCategory]);

  const handleTabKeyDown = (event, index) => {
    let nextIndex;
    if (event.key === 'ArrowRight') nextIndex = (index + 1) % publicationCategories.length;
    else if (event.key === 'ArrowLeft') nextIndex = (index - 1 + publicationCategories.length) % publicationCategories.length;
    else if (event.key === 'Home') nextIndex = 0;
    else if (event.key === 'End') nextIndex = publicationCategories.length - 1;
    else return;
    event.preventDefault();
    setActiveCategory(publicationCategories[nextIndex].id);
    event.currentTarget.parentElement.children[nextIndex].focus();
  };

  return (
    <Section aria-labelledby="home-publications-title">
      <Container>
        <Header>
          <h2 id="home-publications-title">Publications</h2>
          <p>Discover our research highlights, recent work, and journal covers.</p>
        </Header>
        <Tabs role="tablist" aria-label="Publication categories">
          {publicationCategories.map((item, index) => (
            <Tab
              key={item.id}
              type="button"
              id={`publication-tab-${item.id}`}
              role="tab"
              aria-selected={item.id === activeCategory}
              aria-controls={`publication-panel-${item.id}`}
              tabIndex={item.id === activeCategory ? 0 : -1}
              $selected={item.id === activeCategory}
              onClick={() => setActiveCategory(item.id)}
              onKeyDown={event => handleTabKeyDown(event, index)}
            >
              {item.label}
            </Tab>
          ))}
        </Tabs>
        {publicationCategories.map(item => (
          <div key={item.id} id={`publication-panel-${item.id}`} role="tabpanel" aria-labelledby={`publication-tab-${item.id}`} hidden={item.id !== activeCategory}>
            {item.id === activeCategory && (
              <>
                <Description>{category.description}</Description>
                <PublicationCarousel key={activeCategory} publications={publications} category={category} />
              </>
            )}
          </div>
        ))}
      </Container>
    </Section>
  );
};

export default PublicationsSection;
