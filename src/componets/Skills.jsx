import React from 'react'
import styled from 'styled-components';

const Skills = () => {

  // Array of skills
  const skills = [
    {
      title: 'Data Engineering',
      description: 'Experience with data modeling, warehousing, and building ETL pipelines.'
    },
    {
      title: 'Big Data Technologies',
      description: 'Proficient in Hadoop, Hive, Spark, and EMR.'
    },
    {
      title: 'Cloud Platforms',
      description: 'Experience with AWS resources including EC2, RDS, Redshift, Kinesis, and Lambda.'
    },
    {
      title: 'Programming Languages',
      description: 'Python, R, SQL, Scala, Java.'
    },
    {
      title: 'Data Analysis and Visualization',
      description: 'Proficient with Pandas, NumPy, Matplotlib, ggplot2.'
    },
    {
      title: 'Database Management',
      description: 'MySQL, PostgreSQL, SQL Server.'
    },
    {
      title: 'ETL Tools',
      description: 'Talend, Apache NiFi.'
    },
    {
      title: 'Version Control',
      description: 'Git.'
    },
    {
      title: 'Machine Learning',
      description: 'Familiar with classification, regression, clustering algorithms, and model evaluation.'
    },
    {
      title: 'Development Methodologies',
      description: 'Agile, Scrum.'
    }
  ];

  return (
<Container>
      <h1>Skills</h1>
      <CardContainer>
        {skills.map((skill, index) => (
          <Card key={index}>
            <CardHeader>{skill.title}</CardHeader>
            <CardContent>{skill.description}</CardContent>
          </Card>
        ))}
      </CardContainer>
    </Container>
  )
  
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
`;

const CardHeader = styled.h2`
  margin: 0 0 1rem;
  font-size: 1.25rem;
  color: #333;
`;

const CardContent = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
`;

export default Skills
