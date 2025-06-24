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

const NewsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const NewsItem = styled.article`
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const NewsDate = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
`;

const NewsTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const NewsContent = styled.div`
  font-size: 1rem;
  color: #444;
  line-height: 1.6;
`;

const News = () => {
  // Hardcoded news data
  const newsItems = [
    {
      id: 1,
      date: 'June 15, 2023',
      title: 'New Research Grant Awarded',
      content: 'Our laboratory has been awarded a $2.5 million grant from the Department of Energy to develop next-generation fuel cell catalysts. This project will focus on platinum-free catalysts for PEM fuel cells and will involve collaboration with researchers from National Laboratory and University of Technology.'
    },
    {
      id: 2,
      date: 'May 3, 2023',
      title: 'Paper Published in Nature Catalysis',
      content: 'Our recent work on single-atom catalysts for the oxygen reduction reaction has been published in Nature Catalysis. This research demonstrates a novel synthesis approach that significantly enhances catalytic activity while reducing precious metal content.'
    },
    {
      id: 3,
      date: 'April 20, 2023',
      title: 'Dr. Lisa Rodriguez Receives Young Investigator Award',
      content: 'Former lab member Dr. Lisa Rodriguez has received the Young Investigator Award from the American Chemical Society for her outstanding contributions to the field of electrocatalysis. Dr. Rodriguez completed her Ph.D. in our lab in 2020 and is now an Assistant Professor at University of Technology.'
    },
    {
      id: 4,
      date: 'March 8, 2023',
      title: 'New Equipment Installation',
      content: 'Our lab has recently installed a state-of-the-art X-ray photoelectron spectrometer (XPS) that will enhance our capabilities for surface analysis of catalytic materials. This equipment was funded by a university infrastructure grant and will be available for collaborative research projects.'
    },
    {
      id: 5,
      date: 'February 12, 2023',
      title: 'International Conference Presentation',
      content: 'Prof. John Doe and Ph.D. student Sarah Lee presented our latest research on nanocatalysts for CO2 reduction at the International Conference on Energy Materials in Tokyo, Japan. Their presentation received significant interest from the research community and has led to new collaboration opportunities.'
    }
  ];

  return (
    <PageContainer>
      <PageHeader>
        <Title>News & Events</Title>
        <p>Latest updates, achievements, and events from our laboratory.</p>
      </PageHeader>

      <NewsList>
        {newsItems.map(item => (
          <NewsItem key={item.id}>
            <NewsDate>{item.date}</NewsDate>
            <NewsTitle>{item.title}</NewsTitle>
            <NewsContent>
              <p>{item.content}</p>
            </NewsContent>
          </NewsItem>
        ))}
      </NewsList>
    </PageContainer>
  );
};

export default News;
