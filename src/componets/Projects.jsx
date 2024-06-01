import React from 'react';
import styled from 'styled-components';

const Projects = () => {
  // Array of projects
  const projects = [
    {
      title: 'Predictive Customer Churn Analysis',
      description: 'Developed a machine learning model to predict customer churn for a telecom company. Utilized logistic regression and decision tree algorithms for classification. Conducted feature engineering to improve model accuracy.'
    },
    {
      title: 'Sales Forecasting',
      description: 'Built a time series forecasting model to predict future sales for an e-commerce business. Employed techniques such as ARIMA and Exponential Smoothing for accurate predictions.'
    },
    {
      title: 'Healthcare Data Analysis with R',
      description: 'Analyzed patient data using R to identify patterns and correlations in healthcare outcomes. Implemented logistic regression and survival analysis techniques to predict patient readmissions. Created comprehensive reports with R Markdown, providing actionable insights to healthcare providers.'
    }
  ];

  return (
    <Container>
      <h1>Projects</h1>
      <CardContainer>
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>{project.title}</CardHeader>
            <CardContent>{project.description}</CardContent>
          </Card>
        ))}
      </CardContainer>
    </Container>
  );
};

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
`;

const CardHeader = styled.h2`
  margin: 0 0 1rem;
  font-size: 1.25rem;
  color: #333;
  /* Apply color to project titles */
  color: #007bff; /* Blue color */
`;

const CardContent = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
`;

export default Projects;
