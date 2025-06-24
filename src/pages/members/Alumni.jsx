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

const AlumniSection = styled.section`
  margin-bottom: 2.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #444;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #eee;
`;

const AlumniList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const AlumniCard = styled.div`
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const AlumniName = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const AlumniDegree = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 0.5rem;
`;

const AlumniYear = styled.p`
  font-size: 0.9rem;
  color: #777;
  margin-bottom: 0.5rem;
`;

const AlumniPosition = styled.p`
  font-size: 0.9rem;
  color: #0066cc;
  font-weight: 500;
`;

const Alumni = () => {
  // Hardcoded alumni data
  const phDAlumni = [
    {
      id: 1,
      name: 'Dr. Thomas Wilson',
      degree: 'Ph.D. in Chemical Engineering',
      year: '2021',
      position: 'Research Scientist at National Laboratory'
    },
    {
      id: 2,
      name: 'Dr. Lisa Rodriguez',
      degree: 'Ph.D. in Materials Science',
      year: '2020',
      position: 'Assistant Professor at University of Technology'
    },
    {
      id: 3,
      name: 'Dr. James Taylor',
      degree: 'Ph.D. in Chemical Engineering',
      year: '2019',
      position: 'Senior Engineer at Energy Solutions Inc.'
    }
  ];

  const mastersAlumni = [
    {
      id: 1,
      name: 'Alex Brown',
      degree: 'M.S. in Chemical Engineering',
      year: '2022',
      position: 'Process Engineer at Green Energy Co.'
    },
    {
      id: 2,
      name: 'Michelle Park',
      degree: 'M.S. in Materials Science',
      year: '2021',
      position: 'Ph.D. Student at Stanford University'
    },
    {
      id: 3,
      name: 'Kevin Zhang',
      degree: 'M.S. in Chemical Engineering',
      year: '2020',
      position: 'Research Engineer at Battery Technologies Ltd.'
    },
    {
      id: 4,
      name: 'Sophia Lee',
      degree: 'M.S. in Materials Science',
      year: '2019',
      position: 'Product Developer at Advanced Materials Inc.'
    }
  ];

  const undergradAlumni = [
    {
      id: 1,
      name: 'Daniel Kim',
      degree: 'B.S. in Chemical Engineering',
      year: '2022',
      position: 'Graduate Student at MIT'
    },
    {
      id: 2,
      name: 'Rachel Johnson',
      degree: 'B.S. in Chemistry',
      year: '2021',
      position: 'Research Assistant at University of California'
    }
  ];

  return (
    <PageContainer>
      <PageHeader>
        <Title>Alumni</Title>
        <p>Former members of our laboratory who have contributed to our research and moved on to new opportunities.</p>
      </PageHeader>

      <AlumniSection>
        <SectionTitle>Ph.D. Alumni</SectionTitle>
        <AlumniList>
          {phDAlumni.map(alumni => (
            <AlumniCard key={alumni.id}>
              <AlumniName>{alumni.name}</AlumniName>
              <AlumniDegree>{alumni.degree}</AlumniDegree>
              <AlumniYear>Graduated: {alumni.year}</AlumniYear>
              <AlumniPosition>Current: {alumni.position}</AlumniPosition>
            </AlumniCard>
          ))}
        </AlumniList>
      </AlumniSection>

      <AlumniSection>
        <SectionTitle>Master's Alumni</SectionTitle>
        <AlumniList>
          {mastersAlumni.map(alumni => (
            <AlumniCard key={alumni.id}>
              <AlumniName>{alumni.name}</AlumniName>
              <AlumniDegree>{alumni.degree}</AlumniDegree>
              <AlumniYear>Graduated: {alumni.year}</AlumniYear>
              <AlumniPosition>Current: {alumni.position}</AlumniPosition>
            </AlumniCard>
          ))}
        </AlumniList>
      </AlumniSection>

      <AlumniSection>
        <SectionTitle>Undergraduate Alumni</SectionTitle>
        <AlumniList>
          {undergradAlumni.map(alumni => (
            <AlumniCard key={alumni.id}>
              <AlumniName>{alumni.name}</AlumniName>
              <AlumniDegree>{alumni.degree}</AlumniDegree>
              <AlumniYear>Graduated: {alumni.year}</AlumniYear>
              <AlumniPosition>Current: {alumni.position}</AlumniPosition>
            </AlumniCard>
          ))}
        </AlumniList>
      </AlumniSection>
    </PageContainer>
  );
};

export default Alumni;
