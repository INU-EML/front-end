import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import PhotoCard from './PhotoCard';

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  margin: 2rem 0;
  padding: 1rem 0;
`;

const SliderTrack = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  transform: translateX(${props => props.translateX}px);
  gap: 1.5rem;
  padding: 0.5rem;
  align-items: center;
  min-height: 350px; /* Minimum height to accommodate cards */
`;

const SliderControls = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
`;

const SliderButton = styled.button`
  background-color: ${props => props.disabled ? '#e0e0e0' : '#4a90e2'};
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? 0.5 : 1};
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.disabled ? '#e0e0e0' : '#3a7bc8'};
  }
  
  &:focus {
    outline: none;
  }
`;

const YearTitle = styled.h2`
  font-family: 'Pretendard', sans-serif;
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #f0f0f0;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 60px;
    height: 2px;
    background-color: #4a90e2;
  }
`;

const PhotoSlider = ({ year, photos }) => {
  const [position, setPosition] = useState(0);
  const trackRef = useRef(null);
  const containerRef = useRef(null);
  
  const moveLeft = () => {
    if (position < 0) {
      // Move by the width of a card (280px) plus gap (24px)
      const newPosition = Math.min(position + 304, 0);
      setPosition(newPosition);
    }
  };
  
  const moveRight = () => {
    const trackWidth = trackRef.current?.scrollWidth || 0;
    const containerWidth = containerRef.current?.clientWidth || 0;
    
    if (Math.abs(position) < trackWidth - containerWidth) {
      // Move by the width of a card (280px) plus gap (24px)
      const newPosition = Math.max(position - 304, -(trackWidth - containerWidth));
      setPosition(newPosition);
    }
  };
  
  return (
    <div>
      <YearTitle>{year}</YearTitle>
      <SliderContainer ref={containerRef}>
        <SliderTrack ref={trackRef} translateX={position}>
          {photos.map((photo, index) => (
            <PhotoCard key={`${year}-${index}`} photo={photo} index={index} />
          ))}
        </SliderTrack>
      </SliderContainer>
      <SliderControls>
        <SliderButton onClick={moveLeft} disabled={position >= 0}>
          &larr;
        </SliderButton>
        <SliderButton onClick={moveRight} disabled={trackRef.current && containerRef.current && 
          Math.abs(position) >= trackRef.current.scrollWidth - containerRef.current.clientWidth}>
          &rarr;
        </SliderButton>
      </SliderControls>
    </div>
  );
};

export default PhotoSlider;
