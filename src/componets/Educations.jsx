import React from 'react';
import styled from 'styled-components';

const Educations = () => {
  return (
    <Container>
      <h1>Education</h1>
      <Card>
        <CardContent>
          <Title>Master of Science: Computer Information Systems</Title>
          <p className="expected">Expected in May 2024</p>
          <p>New England College</p>
          <p className="location">Henniker, NH</p>
        </CardContent>
      </Card>
    </Container>
  );
}

// Styled components
const Container = styled.div`
  padding: 2rem;
`;

const Card = styled.div`
  background: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CardContent = styled.div`
  /* Custom styles for the content */
  .expected {
    color: #ff6347; /* Red color for expected date */
    font-weight: bold;
  }

  .location {
    color: #008000; /* Green color for location */
  }
`;

const Title = styled.h2`
  margin-bottom: 0.5rem;
  color: #0000ff; /* Blue color for title */
  font-size: 1.5rem; /* Larger font size for title */
`;

export default Educations;
