// src/components/ContactSection.js
import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
margin-left:30px;
a{
  color:blue;
}
  h2{
    color:green;
  }
  p{
    color: pink;
  }
`;

const ContactSection = () => {
  return (
    <ContactContainer>
      <h2>Contact Me:</h2>
      <p>email : supritampal8@gmail.com</p>
      <p>linkdiin : <a href="https://www.linkedin.com/in/supritam-pal-b12b3825a">https://www.linkedin.com/in/supritam-pal-b12b3825a</a> </p>
      <p>twitter :<a href="https://twitter.com/SUPRITAMPA75861">https://twitter.com/SUPRITAMPA75861</a></p>
    </ContactContainer>
  );
};

export default ContactSection;
