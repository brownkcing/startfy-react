import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar.js';
import Hero from './hero/Hero'
import {mediaMin} from '../styles/MediaQueries';
import { ReactComponent as HeroWave } from './hero/wave.svg';
import BackgroundImg from '../img/hero-bg.jpg';

const Headerstyle = styled.div`
    background-image: url(${BackgroundImg});
    height: 110vh;
    width: 100vw;
    padding: 140px 0px 100px;
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
`;

const Headeroverlay = styled.div`
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
`;
const HeaderContainer = styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    transition: 0.3s all ease;
    ${mediaMin.phone`
        max-width: 540px;
    `};
    ${mediaMin.tablet`
        max-width: 720px;
    `};
    ${mediaMin.desktop`
        max-width: 960px;
    `};
    ${mediaMin.custom`
        max-width: 1140px;
    `};
`;

const Wave = styled(HeroWave)`
    width: 100%;
    overflow: hidden;
    position: absolute;
    z-index: 1;
    bottom: -16em;
    color: white;
`;

const Header = () => {
    return (
        <React.Fragment>
            <Wave />
            <Navbar />
            <Headerstyle>
                <Headeroverlay>
                    <HeaderContainer>
                        <Hero />       
                    </HeaderContainer>
                </Headeroverlay>
            </Headerstyle>
        </React.Fragment>
    )
}

export default Header