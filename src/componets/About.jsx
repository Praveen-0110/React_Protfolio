import React from 'react';
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
  );
}

// Styled components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(170deg, #4d7776, #7e9cba); /* Vibrant gradient background */
  /* padding-top: 30px; Adjust for fixed navbar */
`;

const Card = styled.div`
  background: #ffffff;
  border: 1px solid #64b5f6; /* Border color matches background gradient */
  border-radius: 20px; /* Rounded corners */
  padding: 3rem;
  max-width: 800px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1); /* Slight shadow */
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, background 0.3s ease-in-out;

  &:hover {
    transform: scale(0.98); /* Slight zoom out effect */
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.2); /* Enhanced shadow on hover */
    background: linear-gradient(135deg, #ffffff, #f9f9f9); /* Lighter gradient on hover */
  }
  
  display: flex;
  flex-direction: column;
  align-items: center; /* Center horizontally */
`;

const CardHeader = styled.h1`
  margin: 0 0 1rem;
  font-size: 2rem; /* Increased font size */
  color: #ffffff; /* Text color */
  background: linear-gradient(to right, #64b5f6, #1976d2); /* Gradient background */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: color 0.3s ease-in-out;

  ${Card}:hover & {
    color: #1976d2; /* Change text color on hover */
  }
`;

const CardContent = styled.p`
  font-size: 1.25rem; /* Increased font size */
  color: #333; /* Text color */
  line-height: 1.6;
  transition: color 0.3s ease-in-out;

  ${Card}:hover & {
    color: #444; /* Change text color on hover */
  }
`;

export default About;
