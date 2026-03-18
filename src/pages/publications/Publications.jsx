import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme, breakpoints } from '../../styles/GlobalStyles';
import PublicationItem from '../../components/Publication/PublicationItem';
import { publicationsData } from '../../data/Publication/publicationsData';
import { fetchCitationsForMultiple, normalizeDoi } from '../../api/openAlex';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 1.5rem;
  }
`;

const PageHeader = styled.div`
  margin-bottom: 3rem;
  text-align: center;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  color: ${theme.darkBlue};
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;

  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${theme.primary}, ${theme.secondary});
    border-radius: 2px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const PageDescription = styled.p`
  font-size: 1.1rem;
  color: ${theme.text};
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const FilterLabel = styled.label`
  font-size: 0.95rem;
  font-weight: 600;
  color: ${theme.darkGray};
  margin-right: 0.5rem;
`;

const FilterGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const YearSelect = styled.select`
  padding: 0.5rem 2rem 0.5rem 1rem;
  border: 1px solid ${theme.border};
  border-radius: 20px;
  background-color: ${theme.white};
  color: ${theme.darkBlue};
  font-weight: 500;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23555' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: calc(100% - 0.75rem) center;
  background-size: 12px;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${theme.primary};
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.1);
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  width: 300px;

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.7rem 1rem 0.7rem 2.5rem;
  border: 1px solid ${theme.border};
  border-radius: 20px;
  font-size: 0.9rem;

  &:focus {
    outline: none;
    border-color: ${theme.primary};
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.1);
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 0.8rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${theme.gray};
`;

const PublicationsList = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const NoResults = styled.div`
  text-align: center;
  padding: 3rem 0;
  color: ${theme.gray};
  font-size: 1.2rem;
`;

const Publications = () => {
  const [selectedYear, setSelectedYear] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [citations, setCitations] = useState({});
  const [isLoadingCitations, setIsLoadingCitations] = useState(false);

  // Get unique years from publications data
  const years = ['All', ...new Set(publicationsData.map(pub => pub.year))].sort((a, b) => b - a);

  // Memoized filtered publications
  const filteredPublications = useMemo(() => {
    let filtered = [...publicationsData];

    // Filter by year
    if (selectedYear !== 'All') {
      filtered = filtered.filter(pub => pub.year === selectedYear);
    }

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(pub =>
        pub.title.toLowerCase().includes(term) ||
        pub.authors.toLowerCase().includes(term) ||
        pub.journal.toLowerCase().includes(term)
      );
    }

    return filtered;
  }, [selectedYear, searchTerm]);

  /**
   * Fetch citations for all publications on component mount and filtered results change
   *
   * Strategy:
   * 1. On first mount, fetch citations for ALL publicationsData (to build cache)
   * 2. This ensures when filters are applied, results are already cached
   * 3. No additional API calls made for filtered results
   */
  useEffect(() => {
    const fetchAllCitations = async () => {
      setIsLoadingCitations(true);

      try {
        // Fetch citations for ALL publications to maximize cache hits
        // This is efficient because:
        // - OpenAlex API is free for DOI-based lookups
        // - Results are cached in memory
        // - Subsequent filter applications don't trigger new API calls
        const allDois = publicationsData.map(pub => pub.doi).filter(Boolean);
        const citationResults = await fetchCitationsForMultiple(allDois);

        setCitations(citationResults);

        // Log cache stats for monitoring
        // console.log('Citation fetch complete', citationResults);
      } catch (error) {
        console.error('Error fetching citations:', error);
        // Silently fail - showing "-" for citations is acceptable
      } finally {
        setIsLoadingCitations(false);
      }
    };

    // Only fetch once on mount
    if (Object.keys(citations).length === 0) {
      fetchAllCitations();
    }
  }, []); // Empty dependency - fetch once on mount only

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  /**
   * Helper function to get citation count for a publication
   * Normalizes the DOI first, then looks up in the citations cache
   */
  const getCitationCount = (doi) => {
    if (!doi) return null;
    const normalizedDoi = normalizeDoi(doi);
    if (!normalizedDoi) return null;
    return citations[normalizedDoi] || null;
  };

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Publications</PageTitle>
        <PageDescription>
          Explore our research publications in the fields of energy materials, solid oxide fuel cells,
          catalysis, and advanced materials for sustainable energy technologies.
        </PageDescription>
      </PageHeader>

      <FilterContainer>
        <FilterGroup>
          <FilterLabel>Filter by year:</FilterLabel>
          <YearSelect
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value === 'All' ? 'All' : parseInt(e.target.value))}
          >
            {years.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </YearSelect>
        </FilterGroup>

        <SearchContainer>
          <SearchIcon>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          </SearchIcon>
          <SearchInput
            type="text"
            placeholder="Search publications..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchContainer>
      </FilterContainer>

      <PublicationsList
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredPublications.length > 0 ? (
          filteredPublications.map((publication, index) => (
            <motion.div key={publication.id} variants={itemVariants}>
              <PublicationItem
                publication={publication}
                index={index}
                citationCount={getCitationCount(publication.doi)}
                isLoadingCitation={isLoadingCitations}
              />
            </motion.div>
          ))
        ) : (
          <NoResults>No publications found matching your criteria.</NoResults>
        )}
      </PublicationsList>
    </PageContainer>
  );
};

export default Publications;
