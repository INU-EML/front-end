import React from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { theme, breakpoints } from '../../styles/GlobalStyles';

// Card variants for different layouts
const CARD_VARIANTS = {
  FEATURED: 'featured',
  HORIZONTAL: 'horizontal',
  COMPACT: 'compact',
  VERTICAL: 'vertical'
};

// Base card styles
const CardBase = css`
  background-color: ${theme.white};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
  }
`;

// Featured card (large, horizontal with big image)
const FeaturedCard = styled(motion.div)`
  ${CardBase}
  grid-column: span 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  
  @media (max-width: ${breakpoints.tablet}) {
    grid-column: span 1;
    grid-template-columns: 1fr;
  }
`;

// Horizontal card (image on left, text on right)
const HorizontalCard = styled(motion.div)`
  ${CardBase}
  display: grid;
  grid-template-columns: 40% 60%;
  
  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

// Compact card (small, minimal)
const CompactCard = styled(motion.div)`
  ${CardBase}
  display: flex;
  flex-direction: column;
`;

// Vertical card (image on top, text below)
const VerticalCard = styled(motion.div)`
  ${CardBase}
  display: flex;
  flex-direction: column;
`;

// Image container styles based on card type
const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 66.67%; /* 2:3 aspect ratio (200:300) */
  
  ${props => props.variant === CARD_VARIANTS.FEATURED && css`
    @media (max-width: ${breakpoints.tablet}) {
      padding-top: 66.67%;
    }
  `}
  
  ${props => props.variant === CARD_VARIANTS.HORIZONTAL && css`
    height: 100%;
    padding-top: 0;
    
    @media (max-width: ${breakpoints.mobile}) {
      padding-top: 66.67%;
      height: auto;
    }
  `}
`;

const NewsImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.5s ease;
  
  ${props => props.variant === CARD_VARIANTS.FEATURED && css`
    filter: brightness(0.95);
  `}
  
  ${props => props.variant === CARD_VARIANTS.HORIZONTAL && css`
    @media (min-width: ${breakpoints.mobile}) {
      position: relative;
    }
    
    @media (max-width: ${breakpoints.mobile}) {
      position: absolute;
    }
  `}
  
  &:hover {
    transform: scale(1.05);
  }
`;

const ContentContainer = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  
  ${props => props.variant === CARD_VARIANTS.FEATURED && css`
    padding: 2rem;
  `}
  
  ${props => props.variant === CARD_VARIANTS.COMPACT && css`
    padding: 1.2rem;
  `}
`;

const NewsDate = styled.span`
  font-size: 0.85rem;
  font-weight: 500;
  color: ${theme.primary};
  margin-bottom: 0.5rem;
  font-family: 'Pretendard', sans-serif;
  
  ${props => props.variant === CARD_VARIANTS.FEATURED && css`
    font-size: 0.95rem;
  `}
`;

const NewsTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${theme.darkBlue};
  margin: 0;
  line-height: 1.4;
  font-family: 'Pretendard', sans-serif;
  
  ${props => props.variant === CARD_VARIANTS.FEATURED && css`
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  `}
  
  ${props => props.variant === CARD_VARIANTS.COMPACT && css`
    font-size: 1rem;
  `}
`;

const CategoryBadge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  margin-top: 1rem;
  text-transform: capitalize;
  font-family: 'Pretendard', sans-serif;
  
  ${props => {
    switch(props.category) {
      case 'publication':
        return css`
          background-color: rgba(25, 118, 210, 0.1);
          color: #1976d2;
        `;
      case 'award':
        return css`
          background-color: rgba(156, 39, 176, 0.1);
          color: #9c27b0;
        `;
      case 'conference':
        return css`
          background-color: rgba(0, 150, 136, 0.1);
          color: #009688;
        `;
      case 'grant':
        return css`
          background-color: rgba(76, 175, 80, 0.1);
          color: #4caf50;
        `;
      case 'collaboration':
        return css`
          background-color: rgba(255, 152, 0, 0.1);
          color: #ff9800;
        `;
      default:
        return css`
          background-color: rgba(96, 125, 139, 0.1);
          color: #607d8b;
        `;
    }
  }}
`;

const NewsCard = ({ news, index }) => {
  // Determine card variant based on news properties and index
  const getCardVariant = () => {
    if (news.featured) {
      return CARD_VARIANTS.FEATURED;
    } else if (index % 4 === 0) {
      return CARD_VARIANTS.VERTICAL;
    } else if (index % 3 === 0) {
      return CARD_VARIANTS.HORIZONTAL;
    } else {
      return CARD_VARIANTS.COMPACT;
    }
  };
  
  const variant = getCardVariant();
  
  // Animation variants
  const cardAnimationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        delay: index * 0.1
      }
    }
  };
  
  // Render appropriate card based on variant
  const renderCard = () => {
    switch (variant) {
      case CARD_VARIANTS.FEATURED:
        return (
          <FeaturedCard
            variants={cardAnimationVariants}
            initial="hidden"
            animate="visible"
          >
            <ImageContainer variant={variant}>
              <NewsImage 
                src={news.image} 
                alt={news.title} 
                variant={variant}
                onError={(e) => {
                  e.target.onerror = null;
                  // Use a simple data URL instead of a file path
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0iIzU1NSI+SW1hZ2UgTm90IEF2YWlsYWJsZTwvdGV4dD48L3N2Zz4=';
                }}
              />
            </ImageContainer>
            <ContentContainer variant={variant}>
              <NewsDate variant={variant}>{news.date}</NewsDate>
              <NewsTitle variant={variant}>{news.title}</NewsTitle>
              <CategoryBadge category={news.category}>{news.category}</CategoryBadge>
            </ContentContainer>
          </FeaturedCard>
        );
        
      case CARD_VARIANTS.HORIZONTAL:
        return (
          <HorizontalCard
            variants={cardAnimationVariants}
            initial="hidden"
            animate="visible"
          >
            <ImageContainer variant={variant}>
              <NewsImage 
                src={news.image} 
                alt={news.title}
                variant={variant}
                onError={(e) => {
                  e.target.onerror = null;
                  // Use a simple data URL instead of a file path
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0iIzU1NSI+SW1hZ2UgTm90IEF2YWlsYWJsZTwvdGV4dD48L3N2Zz4=';
                }}
              />
            </ImageContainer>
            <ContentContainer variant={variant}>
              <NewsDate variant={variant}>{news.date}</NewsDate>
              <NewsTitle variant={variant}>{news.title}</NewsTitle>
              <CategoryBadge category={news.category}>{news.category}</CategoryBadge>
            </ContentContainer>
          </HorizontalCard>
        );
        
      case CARD_VARIANTS.VERTICAL:
        return (
          <VerticalCard
            variants={cardAnimationVariants}
            initial="hidden"
            animate="visible"
          >
            <ImageContainer variant={variant}>
              <NewsImage 
                src={news.image} 
                alt={news.title}
                variant={variant}
                onError={(e) => {
                  e.target.onerror = null;
                  // Use a simple data URL instead of a file path
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0iIzU1NSI+SW1hZ2UgTm90IEF2YWlsYWJsZTwvdGV4dD48L3N2Zz4=';
                }}
              />
            </ImageContainer>
            <ContentContainer variant={variant}>
              <NewsDate variant={variant}>{news.date}</NewsDate>
              <NewsTitle variant={variant}>{news.title}</NewsTitle>
              <CategoryBadge category={news.category}>{news.category}</CategoryBadge>
            </ContentContainer>
          </VerticalCard>
        );
        
      case CARD_VARIANTS.COMPACT:
      default:
        return (
          <CompactCard
            variants={cardAnimationVariants}
            initial="hidden"
            animate="visible"
          >
            <ImageContainer variant={variant}>
              <NewsImage 
                src={news.image} 
                alt={news.title}
                variant={variant}
                onError={(e) => {
                  e.target.onerror = null;
                  // Use a simple data URL instead of a file path
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0iIzU1NSI+SW1hZ2UgTm90IEF2YWlsYWJsZTwvdGV4dD48L3N2Zz4=';
                }}
              />
            </ImageContainer>
            <ContentContainer variant={variant}>
              <NewsDate variant={variant}>{news.date}</NewsDate>
              <NewsTitle variant={variant}>{news.title}</NewsTitle>
              <CategoryBadge category={news.category}>{news.category}</CategoryBadge>
            </ContentContainer>
          </CompactCard>
        );
    }
  };
  
  return renderCard();
};

export default NewsCard;
