import { createGlobalStyle } from 'styled-components';

// Define breakpoints for responsive design
export const breakpoints = {
  mobile: '576px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1200px',
};

// Define theme colors
export const theme = {
  primary: '#0066cc',       // Primary blue color
  secondary: '#00a8ff',     // Secondary lighter blue
  accent: '#00e5ff',        // Accent color for highlights
  dark: '#121921',          // Dark background color
  darkBlue: '#1a2a3a',      // Dark blue for sections
  light: '#f8f9fa',         // Light background color
  white: '#ffffff',         // White
  text: '#333333',          // Main text color
  textLight: '#666666',     // Secondary text color
  border: '#e0e0e0',        // Border color
  success: '#28a745',       // Success color
  warning: '#ffc107',       // Warning color
  error: '#dc3545',         // Error color
};

// Font face declarations for Pretendard
const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard';
    src: url('/font/Pretendard-Thin.otf') format('opentype');
    font-weight: 100;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Pretendard';
    src: url('/font/Pretendard-ExtraLight.otf') format('opentype');
    font-weight: 200;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Pretendard';
    src: url('/font/Pretendard-Light.otf') format('opentype');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Pretendard';
    src: url('/font/Pretendard-Regular.otf') format('opentype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Pretendard';
    src: url('/font/Pretendard-Medium.otf') format('opentype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Pretendard';
    src: url('/font/Pretendard-SemiBold.otf') format('opentype');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Pretendard';
    src: url('/font/Pretendard-Bold.otf') format('opentype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Pretendard';
    src: url('/font/Pretendard-ExtraBold.otf') format('opentype');
    font-weight: 800;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Pretendard';
    src: url('/font/Pretendard-Black.otf') format('opentype');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.6;
    color: ${theme.text};
    background-color: ${theme.light};
    overflow-x: hidden;
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 0.5rem;
    font-weight: 600;
    line-height: 1.2;
  }
  
  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    
    @media (max-width: ${breakpoints.tablet}) {
      font-size: 2rem;
    }
  }
  
  h2 {
    font-size: 2rem;
    font-weight: 600;
    
    @media (max-width: ${breakpoints.tablet}) {
      font-size: 1.75rem;
    }
  }
  
  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    
    @media (max-width: ${breakpoints.tablet}) {
      font-size: 1.25rem;
    }
  }
  
  p {
    margin-bottom: 1rem;
    font-weight: 400;
  }
  
  a {
    color: ${theme.primary};
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: ${theme.secondary};
    }
  }
  
  ul, ol {
    margin-bottom: 1rem;
    padding-left: 1.5rem;
  }
  
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
  
  button {
    cursor: pointer;
    font-family: 'Pretendard', sans-serif;
    transition: all 0.3s ease;
  }
  
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    
    @media (max-width: ${breakpoints.tablet}) {
      padding: 0 1.5rem;
    }
    
    @media (max-width: ${breakpoints.mobile}) {
      padding: 0 1rem;
    }
  }
  
  section {
    padding: 5rem 0;
    
    @media (max-width: ${breakpoints.tablet}) {
      padding: 4rem 0;
    }
    
    @media (max-width: ${breakpoints.mobile}) {
      padding: 3rem 0;
    }
  }
`;

export default GlobalStyles;
