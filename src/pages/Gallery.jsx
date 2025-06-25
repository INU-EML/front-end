import React from 'react';
import styled from 'styled-components';
import GalleryContainer from '../components/Gallery/GalleryContainer';
import galleryData from '../data/Gallery/galleryData';

const PageContainer = styled.div`
  padding: 2rem 0;
  background-color: #fafafa;
  min-height: calc(100vh - 100px);
`;

const Gallery = () => {
  return (
    <PageContainer>
      <GalleryContainer galleryData={galleryData} />
    </PageContainer>
  );
};

export default Gallery;
