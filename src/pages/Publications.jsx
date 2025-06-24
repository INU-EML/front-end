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

const YearSection = styled.section`
  margin-bottom: 2.5rem;
`;

const YearTitle = styled.h2`
  font-size: 1.5rem;
  color: #444;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #eee;
`;

const PublicationList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const PublicationItem = styled.li`
  margin-bottom: 1.5rem;
  padding-left: 1rem;
  border-left: 3px solid #0066cc;
`;

const PublicationTitle = styled.h3`
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const PublicationAuthors = styled.p`
  font-size: 0.95rem;
  color: #555;
  margin-bottom: 0.5rem;
`;

const PublicationJournal = styled.p`
  font-style: italic;
  font-size: 0.95rem;
  color: #666;
`;

const PublicationDOI = styled.a`
  font-size: 0.9rem;
  color: #0066cc;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Publications = () => {
  // Hardcoded publication data
  const publications = {
    2023: [
      {
        id: 1,
        title: 'Advanced Platinum-Free Catalysts for Proton Exchange Membrane Fuel Cells',
        authors: 'Smith, J., Johnson, M., Lee, S., Doe, J.',
        journal: 'Journal of Energy Materials, 45(3), 1023-1035',
        doi: 'https://doi.org/10.xxxx/xxxxx'
      },
      {
        id: 2,
        title: 'Novel Nanostructured Electrocatalysts for Efficient CO2 Reduction',
        authors: 'Lee, S., Kim, D., Chen, E., Doe, J.',
        journal: 'ACS Catalysis, 13(8), 4567-4580',
        doi: 'https://doi.org/10.xxxx/xxxxx'
      }
    ],
    2022: [
      {
        id: 1,
        title: 'High-Performance Solid-State Electrolytes for Next-Generation Batteries',
        authors: 'Johnson, M., Wilson, T., Doe, J.',
        journal: 'Advanced Energy Materials, 12(5), 2103456',
        doi: 'https://doi.org/10.xxxx/xxxxx'
      },
      {
        id: 2,
        title: 'Single-Atom Catalysts for Enhanced Oxygen Reduction Reaction',
        authors: 'Rodriguez, L., Smith, J., Doe, J.',
        journal: 'Nature Catalysis, 5(2), 123-135',
        doi: 'https://doi.org/10.xxxx/xxxxx'
      },
      {
        id: 3,
        title: 'In-situ Characterization of Electrode Materials During Battery Cycling',
        authors: 'Kim, D., Park, R., Doe, J.',
        journal: 'Journal of Power Sources, 535, 231489',
        doi: 'https://doi.org/10.xxxx/xxxxx'
      }
    ],
    2021: [
      {
        id: 1,
        title: 'Core-Shell Nanostructures for Enhanced Catalytic Activity',
        authors: 'Taylor, J., Brown, A., Doe, J.',
        journal: 'ACS Nano, 15(7), 11234-11245',
        doi: 'https://doi.org/10.xxxx/xxxxx'
      },
      {
        id: 2,
        title: 'Computational Modeling of Catalytic Surfaces for Hydrogen Evolution',
        authors: 'Park, M., Zhang, K., Doe, J.',
        journal: 'Journal of Physical Chemistry C, 125(15), 8765-8778',
        doi: 'https://doi.org/10.xxxx/xxxxx'
      }
    ]
  };

  return (
    <PageContainer>
      <PageHeader>
        <Title>Publications</Title>
        <p>Research papers published by our laboratory members.</p>
      </PageHeader>

      {Object.keys(publications).sort((a, b) => b - a).map(year => (
        <YearSection key={year}>
          <YearTitle>{year}</YearTitle>
          <PublicationList>
            {publications[year].map(pub => (
              <PublicationItem key={pub.id}>
                <PublicationTitle>{pub.title}</PublicationTitle>
                <PublicationAuthors>{pub.authors}</PublicationAuthors>
                <PublicationJournal>{pub.journal}</PublicationJournal>
                <PublicationDOI href={pub.doi} target="_blank" rel="noopener noreferrer">
                  {pub.doi}
                </PublicationDOI>
              </PublicationItem>
            ))}
          </PublicationList>
        </YearSection>
      ))}
    </PageContainer>
  );
};

export default Publications;
