import React, { useState } from 'react';
import styled from 'styled-components';
import { mediaMax } from '../../styles/MediaQueries';
import Navright from './Navright';
import Color from '../../styles/Colors';

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  top: 1.75em;
  display: none;
  cursor: pointer;
  position: fixed;
  z-index: 99;
  transition: 0.3s all ease;
  right: ${({ open }) => open ? '2em' : '4em'};
  

 ${mediaMax.desktop`
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
 
  `}
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ scrolled, open }) => scrolled ? (`${Color.darker}`) : (open ? `${Color.darker}`: `${Color.whiteish}`) };
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(40%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Burger = ({scrolled}) => {
  const [open, setOpen] = useState(false)
  
  return (
    <React.Fragment>
    <Navright open={open} scrolled={scrolled}/>
      <StyledBurger open={open} scrolled={scrolled} onClick={ () => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
    </React.Fragment>
  )
}
export default Burger