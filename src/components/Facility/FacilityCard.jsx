import React from 'react';
import styled from 'styled-components';
import { theme, breakpoints } from '../../styles/GlobalStyles';

const CardWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  background: ${theme.white};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &:hover {
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.18);
    transform: translateY(-8px);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(0, 168, 255, 0.08), rgba(0, 229, 255, 0.08));
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
    pointer-events: none;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  background: linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%);
  aspect-ratio: 4 / 3;
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at top right, ${theme.secondary}10, transparent 70%);
    z-index: 0;
    pointer-events: none;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 16px;
  background-color: #fafafa;
  position: relative;
  z-index: 1;
  transition: transform 0.3s ease;

  ${CardWrapper}:hover & {
    transform: scale(1.05);
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 12px;
  }
`;

const ContentContainer = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 2;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1.25rem;
  }
`;

const EquipmentName = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${theme.dark};
  margin: 0;
  line-height: 1.4;
  letter-spacing: 0.3px;
  transition: color 0.3s ease;

  ${CardWrapper}:hover & {
    background: linear-gradient(to right, ${theme.primary}, ${theme.accent});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
  }
`;

const FacilityCard = ({ equipment }) => {
  return (
    <CardWrapper>
      <ImageContainer>
        <Image
          src={equipment.image}
          alt={equipment.name}
          onError={(e) => {
            e.target.src = '/images/Facility/placeholder.jpg';
          }}
        />
      </ImageContainer>
      <ContentContainer>
        <EquipmentName>{equipment.name}</EquipmentName>
      </ContentContainer>
    </CardWrapper>
  );
};

export default FacilityCard;
