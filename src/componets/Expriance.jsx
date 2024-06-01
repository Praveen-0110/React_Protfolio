import React from 'react';
import styled from 'styled-components';

const Expriance = () => {
  return (
    <Container>
      <h1>Experience</h1>
      <Card>
        <CardContent>
          <Title>Associate Software Engineer</Title>
          <Date>Dec 2021 - Feb 2023</Date>
          <Company>Vaivue ResourceQ Services Pvt, Hyderabad</Company>
          <Description>
            Collaborated with cross-functional teams to develop and deploy software solutions, gaining practical experience in full-stack development.
            Demonstrated proficiency in Python and SQL to build robust data pipelines and algorithms.
          </Description>
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
  transition: transform 0.3s ease-in-out;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const CardContent = styled.div`
`;

const Title = styled.h2`
  margin-bottom: 0.5rem;
  color: #4CAF50; /* Green color for title */
`;

const Date = styled.p`
  color: #007bff; /* Blue color for date */
`;

const Company = styled.p`
  color: #FF6347; /* Red color for company */
`;

const Description = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
  margin-top: 1rem;
`;

export default Expriance;
