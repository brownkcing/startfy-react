import React, { useEffect } from 'react';
import AOS from 'aos';
import { Switch, Route } from 'react-router-dom';
import {useAuth0} from '@auth0/auth0-react';
import './App.css';
import Header from './components/Header.js';
import Intro from './components/Intro.js';
import GlobalStyles from './styles/GlobalStyles';
import Content from './components/Content';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Up from './components/Up';
import Profile from './components/authentication/profile';
import ProtectedRoute from './components/authentication/protected-route';
import Loading from './components/authentication/loading';

function App() {
  const { isLoading } = useAuth0();
  useEffect (() => {
    AOS.init();
    AOS.refresh();
  },[])
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Intro />
        <Content />
        <Contact />
        <Switch>
        <ProtectedRoute path="/profile" component={Profile} />
      </Switch>
      <CTA />
      <Footer />
      <Up />
    </div>
  );
}

export default App;
