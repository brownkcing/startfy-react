import React from 'react';
import styled from 'styled-components';
import BackgroundImg from '../img/hero-bg.jpg';

const Herostyle = styled.div`
    background-image: url(${BackgroundImg});
    height: 100vh;
    width: 100vw;
    padding: 140px 0px 100px;
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;

`

const Herooverlay = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-repeat: no-repeat;
    background-position: center center;
    background: linear-gradient(
        to right,
        rgba(39, 70, 133, 0.8) 0%,
        rgba(61, 179, 197, 0.8) 100%
    );
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Hero = () => {
    return( 
        <Herostyle>
            <Herooverlay>   
            </Herooverlay>
        </Herostyle>
        )
    }
export default Hero;