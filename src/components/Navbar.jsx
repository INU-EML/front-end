import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { theme, breakpoints } from '../styles/GlobalStyles';

// Styled components for the navbar
const NavContainer = styled.nav`
  background-color: ${theme.dark};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease;
`;

const NavInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 80px;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: ${breakpoints.tablet}) {
    padding: 0 1.5rem;
  }
`;

const LogoImage = styled.img`
  height: 50px;
  width: auto;
  margin-right: 10px;
  object-fit: contain;
  object-position: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${theme.white};
  text-decoration: none;
  display: flex;
  align-items: center;
  
  span {
    background: linear-gradient(135deg, ${theme.secondary} 0%, ${theme.accent} 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    font-weight: 800;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  
  @media (max-width: ${breakpoints.laptop}) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    background-color: ${theme.dark};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 1rem 0;
    z-index: 1000;
  }
`;

const NavItem = styled.li`
  position: relative;
  margin-left: 2rem;
  
  &:hover > ul {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
  }
  
  @media (max-width: ${breakpoints.laptop}) {
    margin: 0;
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    
    &:last-child {
      border-bottom: none;
    }
  }
`;

const NavLink = styled(Link)`
  color: ${({ isActive }) => (isActive ? theme.accent : theme.white)};
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 0;
  display: block;
  position: relative;
  transition: color 0.3s ease;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${({ isActive }) => (isActive ? '100%' : '0')};
    height: 2px;
    background: linear-gradient(90deg, ${theme.secondary} 0%, ${theme.accent} 100%);
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: ${theme.accent};
    
    &:after {
      width: 100%;
    }
  }
  
  @media (max-width: ${breakpoints.laptop}) {
    padding: 1rem 2rem;
    
    &:after {
      display: none;
    }
  }
`;

const DropdownMenu = styled.ul`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: ${theme.darkBlue};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  min-width: 220px;
  padding: 0.75rem 0;
  list-style: none;
  z-index: 1001;
  transform: translateY(10px);
  transition: all 0.3s ease;
  border-radius: 4px;
  border-top: 2px solid ${theme.accent};
  
  @media (max-width: ${breakpoints.laptop}) {
    position: static;
    visibility: visible;
    opacity: 1;
    transform: none;
    box-shadow: none;
    min-width: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    padding: 0;
    border-top: none;
    margin-top: 0;
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  }
`;

const DropdownItem = styled.li`
  padding: 0;
`;

const DropdownLink = styled(Link)`
  color: ${theme.white};
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  display: block;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
    color: ${theme.accent};
    padding-left: 1.75rem;
  }
  
  @media (max-width: ${breakpoints.laptop}) {
    padding: 0.75rem 3rem;
    
    &:hover {
      padding-left: 3.25rem;
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: ${theme.white};
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1002;
  
  @media (max-width: ${breakpoints.laptop}) {
    display: block;
  }
`;

const DropdownToggle = styled.span`
  display: none;
  position: absolute;
  right: 1rem;
  top: 1rem;
  color: ${theme.white};
  font-size: 1.2rem;
  cursor: pointer;
  
  @media (max-width: ${breakpoints.laptop}) {
    display: block;
  }
`;

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  
  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };
  
  // Check if the current path matches the given path
  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <NavContainer>
      <NavInner>
        <Logo to="/">
          <LogoImage src="/public/images/INUEML_logo.png" alt="EML Lab Logo" />
        </Logo>
        
        <MobileMenuButton onClick={toggleMobileMenu}>
          {mobileMenuOpen ? '✕' : '☰'}
        </MobileMenuButton>
        
        <NavMenu isOpen={mobileMenuOpen}>
          <NavItem>
            <NavLink to="/" isActive={isActive('/')}>Home</NavLink>
          </NavItem>
          
          <NavItem>
            <NavLink to="/research/fc-ec" isActive={isActive('/research')}>
              Research
            </NavLink>
            {mobileMenuOpen && (
              <DropdownToggle onClick={() => toggleDropdown(0)}>
                {activeDropdown === 0 ? '−' : '+'}
              </DropdownToggle>
            )}
            <DropdownMenu isOpen={activeDropdown === 0}>
              <DropdownItem>
                <DropdownLink to="/research/fc-ec">Fuel Cell/Electrolyzer</DropdownLink>
              </DropdownItem>
              <DropdownItem>
                <DropdownLink to="/research/nanocatalyst">Nanocatalyst</DropdownLink>
              </DropdownItem>
              <DropdownItem>
                <DropdownLink to="/research/battery">Metal-air Battery</DropdownLink>
              </DropdownItem>
            </DropdownMenu>
          </NavItem>
          
          <NavItem>
            <NavLink to="/members/professor" isActive={isActive('/members')}>
              Members
            </NavLink>
            {mobileMenuOpen && (
              <DropdownToggle onClick={() => toggleDropdown(1)}>
                {activeDropdown === 1 ? '−' : '+'}
              </DropdownToggle>
            )}
            <DropdownMenu isOpen={activeDropdown === 1}>
              <DropdownItem>
                <DropdownLink to="/members/professor">Professor</DropdownLink>
              </DropdownItem>
              <DropdownItem>
                <DropdownLink to="/members/current">Current Members</DropdownLink>
              </DropdownItem>
              <DropdownItem>
                <DropdownLink to="/members/alumni">Alumni</DropdownLink>
              </DropdownItem>
            </DropdownMenu>
          </NavItem>
          
          <NavItem>
            <NavLink to="/publications" isActive={isActive('/publications')}>
              Publications
            </NavLink>
          </NavItem>
          
          <NavItem>
            <NavLink to="/news" isActive={isActive('/news')}>
              News
            </NavLink>
          </NavItem>
          
          <NavItem>
            <NavLink to="/gallery" isActive={isActive('/gallery')}>
              Gallery
            </NavLink>
          </NavItem>
          
          <NavItem>
            <NavLink to="/contact" isActive={isActive('/contact')}>
              Contact
            </NavLink>
          </NavItem>
        </NavMenu>
      </NavInner>
    </NavContainer>
  );
};

export default Navbar;
