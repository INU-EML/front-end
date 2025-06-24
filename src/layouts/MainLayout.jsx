import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
  margin-top: 70px; /* Same as navbar height */
  padding: 2rem;
  max-width: 1200px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

const MainLayout = ({ children }) => {
  return (
    <LayoutContainer>
      <Navbar />
      <Main>{children}</Main>
    </LayoutContainer>
  );
};

export default MainLayout;
