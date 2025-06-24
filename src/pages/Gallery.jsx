import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 1rem 0;
`;

const PageHeader = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const GalleryItem = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
  }
`;

const ImageContainer = styled.div`
  height: 250px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
`;

const ImageCaption = styled.div`
  padding: 1rem;
  background-color: #fff;
`;

const CaptionTitle = styled.h3`
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const CaptionText = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

const Gallery = () => {
  // Hardcoded gallery data
  const galleryItems = [
    {
      id: 1,
      title: 'Laboratory Equipment',
      description: 'Our state-of-the-art electrochemical testing station.'
    },
    {
      id: 2,
      title: 'Research Team Meeting',
      description: 'Weekly group meeting discussing recent experimental results.'
    },
    {
      id: 3,
      title: 'Conference Presentation',
      description: 'Prof. Doe presenting our research at the International Energy Materials Conference.'
    },
    {
      id: 4,
      title: 'Nanomaterial Synthesis',
      description: 'Preparation of core-shell nanoparticles for catalytic applications.'
    },
    {
      id: 5,
      title: 'TEM Image',
      description: 'Transmission electron microscopy image of our novel nanocatalyst.'
    },
    {
      id: 6,
      title: 'Lab Celebration',
      description: 'Celebrating the publication of our paper in Nature Catalysis.'
    },
    {
      id: 7,
      title: 'Outreach Event',
      description: 'Demonstrating fuel cell technology to high school students.'
    },
    {
      id: 8,
      title: 'Collaborative Meeting',
      description: 'Meeting with industry partners to discuss potential applications of our technology.'
    },
    {
      id: 9,
      title: 'Award Ceremony',
      description: 'Dr. Rodriguez receiving the Young Investigator Award.'
    }
  ];

  return (
    <PageContainer>
      <PageHeader>
        <Title>Gallery</Title>
        <p>Photos from our laboratory, research activities, and events.</p>
      </PageHeader>

      <GalleryGrid>
        {galleryItems.map(item => (
          <GalleryItem key={item.id}>
            <ImageContainer>Image Placeholder: {item.title}</ImageContainer>
            <ImageCaption>
              <CaptionTitle>{item.title}</CaptionTitle>
              <CaptionText>{item.description}</CaptionText>
            </ImageCaption>
          </GalleryItem>
        ))}
      </GalleryGrid>
    </PageContainer>
  );
};

export default Gallery;
