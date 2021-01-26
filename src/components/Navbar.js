import React from 'react';
import styled from 'styled-components'
import Logo from './nav/Logo';
import Color from '../styles/Colors';
import {mediaMax} from '../styles/MediaQueries'
import Burger from './nav/Burger';

const Nav = styled.nav`
  position: absolute;
  width: 100%;
  height: 12vh;
  z-index: 1999;
  color: ${Color.light};
  box-sizing: border-box;
`;

const Navstyle = styled.nav`
  transition: 0.3s all ease;
  padding: 1.1em 11em;
  display: flex;
  flex-wrap:wrap;
  justify-content: space-between;
  
  
  ${mediaMax.menuMax`
    padding: 1em 1em;
  `}

  ${mediaMax.desktop`
    padding: 1em 3em;
  `}

  ${mediaMax.phone`
  padding: 1em 3em;
`}
`;

const Navbar = () => {
    return (
      <Nav>
        <Navstyle>
          <Logo></Logo>
          <Burger>
          </Burger>
	      </Navstyle> 
      </Nav>
    );
  }

  export default Navbar; 