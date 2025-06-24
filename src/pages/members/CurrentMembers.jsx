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

const MembersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
`;

const MemberCard = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const MemberImage = styled.div`
  height: 250px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
`;

const MemberInfo = styled.div`
  padding: 1rem;
`;

const MemberName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

const MemberPosition = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 0.5rem;
`;

const MemberEmail = styled.p`
  font-size: 0.9rem;
  color: #0066cc;
`;

const MemberResearch = styled.p`
  font-size: 0.9rem;
  color: #555;
  margin-top: 0.5rem;
`;

const CurrentMembers = () => {
  // Hardcoded member data
  const members = [
    {
      id: 1,
      name: 'Jane Smith',
      position: 'Postdoctoral Researcher',
      email: 'jane.smith@university.edu',
      research: 'Fuel cell catalysts, ORR mechanisms'
    },
    {
      id: 2,
      name: 'Mike Johnson',
      position: 'Ph.D. Student',
      email: 'mike.johnson@university.edu',
      research: 'Battery materials, solid-state electrolytes'
    },
    {
      id: 3,
      name: 'Sarah Lee',
      position: 'Ph.D. Student',
      email: 'sarah.lee@university.edu',
      research: 'Nanocatalysts for CO2 reduction'
    },
    {
      id: 4,
      name: 'David Kim',
      position: 'Master Student',
      email: 'david.kim@university.edu',
      research: 'Electrochemical characterization techniques'
    },
    {
      id: 5,
      name: 'Emily Chen',
      position: 'Master Student',
      email: 'emily.chen@university.edu',
      research: 'Nanostructured electrode materials'
    },
    {
      id: 6,
      name: 'Robert Park',
      position: 'Undergraduate Researcher',
      email: 'robert.park@university.edu',
      research: 'Computational modeling of catalytic surfaces'
    }
  ];

  return (
    <PageContainer>
      <PageHeader>
        <Title>Current Lab Members</Title>
        <p>Meet our team of researchers working on various projects in electrochemical materials.</p>
      </PageHeader>

      <MembersGrid>
        {members.map(member => (
          <MemberCard key={member.id}>
            <MemberImage>Photo Placeholder</MemberImage>
            <MemberInfo>
              <MemberName>{member.name}</MemberName>
              <MemberPosition>{member.position}</MemberPosition>
              <MemberEmail>{member.email}</MemberEmail>
              <MemberResearch>Research: {member.research}</MemberResearch>
            </MemberInfo>
          </MemberCard>
        ))}
      </MembersGrid>
    </PageContainer>
  );
};

export default CurrentMembers;
