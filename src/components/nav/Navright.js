import React from 'react';
import styled from 'styled-components';
import Color from '../../styles/Colors';
import { mediaMax } from '../../styles/MediaQueries'

const Navrightstyle = styled.ul`
  margin-right:2em;
  margin-left: 2em;
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 0.8em 1.3em;
      a {
        color: ${Color.light};
        text-decoration: none;
      }
  }
  
  ${mediaMax.desktop`
  margin-right: 5em;
    li {
      padding: 1em 1.3em;
      display: block;
        a {
          color: #9fa1a4;
          text-decoration: none;
        }
      }
    display: block;
    background-color: ${Color.whiteish};
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(40%)' : 'translateX(130%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  `}
`;



const Navright = ({open}) => {
    return (
            <Navrightstyle open={open}>
                <li><a href="#">Home</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Contact</a></li>
            </Navrightstyle>
    );
}

export default Navright;