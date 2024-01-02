// src/components/AboutSection.js
import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
margin-left: 30px;
  h2 {
    color:white;
  },
  span{
    color: yellow;
  }
`;

const AboutSection = () => {
  return (
    <AboutContainer>
      <h2>About Me :</h2>
      <h2>Hi I'm <span>Supritam Pal</span> , web developer frontend</h2>
      <h2>Skills: HTML, CSS, JAVASCRIPT , REACT, BOOTSTRAP, TAILWIND, MATERIAL UI , GIT & GITHUB , NODEJS , FIREBASE</h2>
    </AboutContainer>
  );
};

export default AboutSection;
