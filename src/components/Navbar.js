import React, { useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components'
import Logo from './nav/Logo';
import { mediaMax } from '../styles/MediaQueries'
import Burger from './nav/Burger';
import { useState } from 'react';

const Nav = styled.nav`
  transition: 0.3s all ease;
  position: ${({ theme }) => theme.position};
  width: 100%;
  height: 12vh;
  z-index: 1999;
  color: ${({ theme }) => theme.text};
  box-shadow: ${({ theme }) => theme.shadow};
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.bgColor};

  ${mediaMax.phone`
     height: 10vh;
  `}
`;

const navNotScrolled = {
  position: 'absolute',
  text : 'white',
  bgColor: 'none',
  navColor: 'white',
  shadow: 'none'
};

const navScrolled = {
  position: 'fixed',
  text : 'black',
  bgColor: 'white',
  navColor: 'black',
  shadow: '0.25px 0 0.85em -0.25em rgb(0 0 0 / 50%)'
};


const Navstyle = styled.nav`
  padding: 0 11em;
  display: flex;
  flex-wrap:wrap;
  justify-content: space-between;
  
  
  ${mediaMax.menuMax`
    padding: 0 1em;
  `}

  ${mediaMax.desktop`
    padding: 0 3em;
  `}

  ${mediaMax.phone`
  padding: 0 3em;
`}
`;

function Navbar() {
  const [scrolled, setScrolled] = useState (false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 1 ) {
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })
    return (
      <ThemeProvider theme = { scrolled === false ? navNotScrolled : navScrolled}>
        <Nav>
          <Navstyle>
            <Logo></Logo>
            <Burger scrolled = {scrolled}>
            </Burger>
	        </Navstyle> 
        </Nav>
      </ThemeProvider>
    );
  }

  export default Navbar; 