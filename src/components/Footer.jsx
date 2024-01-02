// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
margin-left: 30px;

  h2{
    color: white;
    
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
   <h2>Github:<span><a href="https://github.com/Supritam-Pal">https://github.com/Supritam-Pal</a></span></h2>
   
    </FooterContainer>
  );
};

export default Footer;
