import React from 'react'

import styled from 'styled-components';

const Expriance = () => {
  return (
    <Container>
      <h1>Experience</h1>
      <Card>
        <CardContent>
          <h2>Associate Software Engineer</h2>
          <p>Dec 2021 - Feb 2023</p>
          <p>Vaivue ResourceQ Services Pvt, Hyderabad</p>
          <ul>
            <li>Collaborated with cross-functional teams to develop and deploy software solutions, gaining practical experience in full-stack development.</li>
            <li>Demonstrated proficiency in Python and SQL to build robust data pipelines and algorithms.</li>
          </ul>
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
  h2 {
    margin-bottom: 0.5rem;
  }
  
  ul {
    margin-top: 1rem;
    padding-left: 1rem;
  }
`;


export default Expriance
