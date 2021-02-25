import React from 'react';
import styled from 'styled-components';
import Color from '../../styles/Colors';
import { mediaMax } from '../../styles/MediaQueries';
import { Link} from 'react-scroll';

const Linking = styled(Link).attrs({
  activeClass: "active",
  spy: true, 
  smooth:'easeInOutQuint', 
  duration: 1500
})`
`;

const Navrightstyle = styled.ul`
  font-size: 1.25rem;
  margin-right:2em;
  margin-left: 2em;
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 0.5em 1.3em;
      a {
        cursor: pointer;
        color:${({ scrolled }) => scrolled ? `${Color.darkest}` : `${Color.whiteish}` };
        text-decoration: none;
      }
  }

  ${mediaMax.desktop`
  margin-top: 0;
  margin-right: 3em;
  padding-left: 1.5em;
  padding-top: 5em;
  top: 0;
  right: 1.4em;
  height: 100vh;
  width: 300px;
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
    transition: 0.3s all ease;
  `}
`;



const Navright = ({open, scrolled}) => {
    return (
            <Navrightstyle open={open} scrolled={scrolled}>
                <li><Linking offset={-290} to="home" >Home</Linking></li>
                <li><Linking  to="features" >Features</Linking></li>
                <li><Linking  to="pricing" >Pricing</Linking></li>
                <li><Linking  to="contact" >Contact</Linking></li>
            </Navrightstyle>
    );
}

export default Navright;