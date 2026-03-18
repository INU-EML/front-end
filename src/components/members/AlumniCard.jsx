import React from 'react';
import styled, { keyframes } from 'styled-components';
import { theme, breakpoints } from '../../styles/GlobalStyles';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const AlumniCard = ({ alumni, index, onClick }) => {
  // Extract initials for placeholder
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  const initials = getInitials(alumni.name);

  const handleClick = () => {
    if (onClick) {
      onClick(alumni);
    }
  };

  return (
    <CardContainer index={index} clickable={!!onClick} onClick={handleClick}>
      <ImageContainer>
        {alumni.image ? (
          <ProfileImage
            src={alumni.image}
            alt={`${alumni.name} profile`}
            loading="lazy"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
        ) : null}
        <PlaceholderContainer isVisible={!alumni.image}>
          <Initials>{initials}</Initials>
        </PlaceholderContainer>
      </ImageContainer>
      <ContentContainer>
        <Name>{alumni.name}</Name>

        <SectionTitle>Current Affiliation</SectionTitle>
        <List>
          {alumni.currentAffiliation.map((affiliation, idx) => (
            <ListItem key={idx} isLast={idx === alumni.currentAffiliation.length - 1}>{affiliation}</ListItem>
          ))}
        </List>

        <SectionTitle>Career</SectionTitle>
        <List>
          {alumni.career.map((career, idx) => (
            <ListItem key={idx} isLast={idx === alumni.career.length - 1}>{career}</ListItem>
          ))}
        </List>
      </ContentContainer>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.white};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  height: 100%;
  animation: ${fadeIn} 0.6s ease-out forwards;
  animation-delay: ${props => props.index * 0.1}s;
  opacity: 0;
  text-align: center;
  border-top: 4px solid ${props => {
    const colors = [theme.primary, theme.secondary, theme.accent, theme.darkBlue];
    return colors[props.index % colors.length];
  }};
  cursor: ${props => props.clickable ? 'pointer' : 'default'};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
  }
`;

const ImageContainer = styled.div`
  width: 150px;
  height: 150px;
  overflow: hidden;
  position: relative;
  background-color: ${theme.lightGray};
  border-radius: 50%;
  margin: 1.5rem auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PlaceholderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: ${props => props.isVisible ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, ${theme.lightGray}, #e6e9f0);
  border-radius: 50%;
  border: 2px dashed ${theme.border};
`;

const Initials = styled.span`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${theme.primary};
  opacity: 0.7;
  letter-spacing: -1px;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  position: relative;
  z-index: 1;
  
  ${CardContainer}:hover & {
    transform: scale(1.05);
  }
`;

const ContentContainer = styled.div`
  padding: 0 1.5rem 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const Name = styled.h3`
  font-size: 1.4rem;
  margin: 0 0 1rem;
  color: ${theme.darkBlue};
  position: relative;
  padding-bottom: 0.5rem;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, ${theme.primary}, ${theme.secondary});
    border-radius: 3px;
  }
`;

const SectionTitle = styled.h4`
  font-size: 0.9rem;
  color: ${theme.gray};
  margin: 0.8rem 0 0.4rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  text-align: center;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0 0 0.8rem;
  text-align: center;
`;

const ListItem = styled.li`
  font-size: 0.95rem;
  margin-bottom: 0.3rem;
  color: ${theme.text};
  line-height: 1.4;
  display: inline-block;
  position: relative;
  
  &:after {
    content: '';
    display: ${props => props.isLast ? 'none' : 'inline-block'};
    width: 4px;
    height: 4px;
    background-color: ${theme.secondary};
    border-radius: 50%;
    margin: 0 6px;
    vertical-align: middle;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export default AlumniCard;
