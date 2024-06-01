import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <PageContainer>
      {/* Your page content goes here */}
      <FooterContainer>
        <ContactDetails>
          <h3>Contact Details</h3>
          <p>Email: example@example.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 Street, City, Country</p>
        </ContactDetails>
        <SocialLinks>
          <h3>Follow Us</h3>
          <ul>
            <li><a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            {/* Add more social media links if needed */}
          </ul>
        </SocialLinks>
      </FooterContainer>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  min-height: vh;
  position: relative;
`;

const FooterContainer = styled.footer`
  background-color: #f8f9fa; /* Set your desired background color *
  color: #343a40; /* Text color */
  padding: 20px;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100vh;
  position: relative;
`;

const ContactDetails = styled.div`
  margin-bottom: 20px;
`;

const SocialLinks = styled.div``;

export default Footer;
