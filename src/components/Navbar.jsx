import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled components for the navbar
const NavContainer = styled.nav`
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const NavInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 70px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
  text-decoration: none;
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  position: relative;
  margin-left: 1.5rem;
  
  &:hover > ul {
    display: block;
  }
`;

const NavLink = styled(Link)`
  color: #333;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 0;
  display: block;
  
  &:hover {
    color: #0066cc;
  }
`;

const DropdownMenu = styled.ul`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  min-width: 180px;
  padding: 0.5rem 0;
  list-style: none;
  z-index: 1001;
`;

const DropdownItem = styled.li`
  padding: 0;
`;

const DropdownLink = styled(Link)`
  color: #333;
  text-decoration: none;
  padding: 0.5rem 1rem;
  display: block;
  
  &:hover {
    background-color: #f5f5f5;
    color: #0066cc;
  }
`;

const Navbar = () => {
  return (
    <NavContainer>
      <NavInner>
        <Logo to="/">EML Lab</Logo>
        <NavMenu>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          
          <NavItem>
            <NavLink to="/research/fc-ec">Research</NavLink>
            <DropdownMenu>
              <DropdownItem>
                <DropdownLink to="/research/fc-ec">FC/EC</DropdownLink>
              </DropdownItem>
              <DropdownItem>
                <DropdownLink to="/research/nanocatalyst">Nanocatalyst</DropdownLink>
              </DropdownItem>
              <DropdownItem>
                <DropdownLink to="/research/battery">Battery</DropdownLink>
              </DropdownItem>
            </DropdownMenu>
          </NavItem>
          
          <NavItem>
            <NavLink to="/members/professor">Members</NavLink>
            <DropdownMenu>
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
            <NavLink to="/publications">Publications</NavLink>
          </NavItem>
          
          <NavItem>
            <NavLink to="/news">News</NavLink>
          </NavItem>
          
          <NavItem>
            <NavLink to="/gallery">Gallery</NavLink>
          </NavItem>
          
          <NavItem>
            <NavLink to="/contact">Contact</NavLink>
          </NavItem>
        </NavMenu>
      </NavInner>
    </NavContainer>
  );
};

export default Navbar;
