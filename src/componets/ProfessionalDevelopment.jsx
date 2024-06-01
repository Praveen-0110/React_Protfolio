import React from 'react'
import styled from 'styled-components';

const ProfessionalDevelopment = () => {
  return (
    <Container>
      <h1>Professional Development</h1>
      <Box>
        <p>Attended workshops on advanced ETL techniques and big data technologies.</p>
        <p>Regularly participate in webinars and online courses to stay updated with the latest data engineering and analytics trends.</p>
      </Box>
    </Container>
  );
}

// Styled components
const Container = styled.div`
  padding: 2rem;
`;

const Box = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
  margin-top: 1rem;
  background-color: #f9f9f9; /* Set background color */
`;

export default ProfessionalDevelopment
