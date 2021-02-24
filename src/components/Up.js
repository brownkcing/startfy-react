import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Icofont from 'react-icofont';
import { Link } from 'react-scroll';

const UpIcon = styled(Link)`
    transition: 0.5s all ease;
    position: ${({theme}) => theme.position};
    opacity: ${({theme}) => theme.opacity};
    background: #2d71a1;
    color: #fff;
    width: 2.75em;
    height: 2.75em;
    text-align: center;
    line-height: 1;
    font-size: 1rem;
    border-radius: 50%;
    right: 1em;
    bottom: 1em;
    z-index: 19;
`;

const navScrolled = {
    position: 'fixed',
    opacity: 1
}

const navNotScrolled = {
    position: 'static',
    opacity: 0
}

const IconArrow = styled(Icofont)`
    color: #fff;
    font-size: 1.5em;
    position: absolute;
    top: 0.4em;
    left: 0.45em;
`;

export default function Up() {
    const [scrolled, setScrolled] = useState(false)
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
            <UpIcon activeClass="active" to="home" spy={true} smooth='easeInOutQuint' duration={1500}>
                 <IconArrow icon="icofont-simple-up" />
            </UpIcon>
        </ThemeProvider>
    )
}   