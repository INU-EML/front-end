import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  position: relative;
  margin: 1rem;
  transition: all 0.3s ease;
  transform: rotate(${props => props.rotation}deg);
  width: 280px; /* Fixed width for consistent card size */
  
  &:hover {
    transform: rotate(${props => props.rotation}deg) translateY(-10px);
    z-index: 10;
  }
`;

const PolaroidFrame = styled.div`
  background: white;
  padding: 10px 10px 30px 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.02);
    pointer-events: none;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  background-color: #f8f8f8;
  flex: 1;
  min-height: 200px; /* Minimum height for images */
  max-height: 300px; /* Maximum height for images */
  
  &::before {
    content: '';
    display: block;
    padding-top: 75%; /* 4:3 aspect ratio */
  }
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: contain; /* Changed to contain to ensure the whole image is visible */
  transition: transform 0.5s ease;
  background-color: #f8f8f8;
  
  ${CardContainer}:hover & {
    transform: scale(1.05);
  }
`;

const CardTitle = styled.h3`
  font-family: 'Pretendard', sans-serif;
  font-size: 1rem;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 0;
  font-weight: 500;
  color: #333;
`;

const CardYear = styled.p`
  font-family: 'Pretendard', sans-serif;
  font-size: 0.8rem;
  text-align: center;
  margin-top: 5px;
  margin-bottom: 0;
  color: #777;
`;

// Tape styling for the polaroid effect
const Tape = styled.div`
  position: absolute;
  width: 40px;
  height: 15px;
  background-color: rgba(255, 255, 255, 0.6);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  top: -7px;
  left: 50%;
  transform: translateX(-50%) rotate(${props => Math.random() * 6 - 3}deg);
  opacity: 0.7;
`;

const PhotoCard = ({ photo, index }) => {
  // Generate a slight random rotation for each card to create a natural look
  const rotation = Math.random() * 6 - 3; // Random rotation between -3 and 3 degrees
  
  return (
    <CardContainer rotation={rotation}>
      <PolaroidFrame>
        <Tape />
        <ImageWrapper>
          <Image src={photo.image} alt={photo.title} />
        </ImageWrapper>
        <CardTitle>{photo.title}</CardTitle>
        <CardYear>{photo.year}</CardYear>
      </PolaroidFrame>
    </CardContainer>
  );
};

export default PhotoCard;
