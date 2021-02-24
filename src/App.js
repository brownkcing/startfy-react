import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Intro from './components/Intro.js';
import GlobalStyles from './styles/GlobalStyles';
import Content from './components/Content';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Up from './components/Up';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Intro />
      <Content />
      <Contact />
      <CTA />
      <Footer />
      <Up />
    </div>
  );
}

export default App;
