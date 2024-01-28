// src/App.js
import React from 'react';
import styled from 'styled-components';

// Components
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const AppContainer = styled.div`
  font-family: 'Arial', sans-serif;
  background-color: black ;
  margin-left: 10px;
`;

function App() {
  return (
    <AppContainer>
      
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />


    </AppContainer>
  );
}

export default App;
