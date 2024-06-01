import React from 'react'
import styled from 'styled-components';

const About = () => {
  return (
    <Container>
      <Card>
        <CardHeader>Summary</CardHeader>
        <CardContent>
          Motivated and detail-oriented Data Engineer with a solid foundation in data modeling, warehousing, ETL processes, and big data technologies. Experienced in statistical analysis, machine learning, and data manipulation with a passion for deriving insights from data to improve user experiences. Proficient in leveraging programming languages such as Python and R, and skilled in using various data engineering tools and platforms.
        </CardContent>
      </Card>
    </Container>
    
  )
}

  // Styled components
const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
background-color: #f0f0f0; /* Light grey background */
`;

const Card = styled.div`
background: #ffffff;
border: 1px solid #ddd;
border-radius: 8px;
padding: 2rem;
max-width: 600px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CardHeader = styled.h1`
margin: 0 0 1rem;
font-size: 1.5rem;
color: #333;
`;

const CardContent = styled.p`
font-size: 1rem;
color: #555;
line-height: 1.5;
`;

export default About
