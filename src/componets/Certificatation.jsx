import React from 'react';
import styled from 'styled-components';

const Certificatation = () => {
  // Array of certifications
  const certifications = [
    {
      title: 'Google Data Analytics Professional Certificate',
      description: 'I gained hands-on experience with Google Sheets, SQL, and Tableau. We covered essential data analysis skills and techniques.'
    },
    {
      title: 'IBM Data Science Professional Certificate',
      description: 'Introduced key concepts in data science, including machine learning and data visualization. Practical experience using Jupyter Notebooks, RStudio, and Watson Studio.'
    },
    {
      title: 'Microsoft Certified: Data Analyst Associate (DP-900) - Microsoft Azure Data Fundamentals',
      description: 'Focused on fundamental data concepts and skills using Microsoft Azure services. Provided a foundational understanding of data science in a cloud computing environment.'
    }
  ];

  return (
    <Container>
      <h1>Certification</h1>
      <CardContainer>
        {certifications.map((certification, index) => (
          <Card key={index}>
            <CardHeader>{certification.title}</CardHeader>
            <CardContent>{certification.description}</CardContent>
          </Card>
        ))}
      </CardContainer>
    </Container>
  );
}

// Styled components
const Container = styled.div`
  padding: 2rem;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
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

const CardHeader = styled.h2`
  margin: 0 0 1rem;
  font-size: 1.5rem; /* Medium font size */
  color: #4CAF50; /* Green color */
`;

const CardContent = styled.p`
  font-size: 1rem; /* Medium font size */
  color: #555;
  line-height: 1.5;
`;

export default Certificatation;
