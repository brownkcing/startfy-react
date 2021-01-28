import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar.js';
import Hero from './hero/Hero'
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
    transition: 0.3s all ease;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    margin-right: 10em;
    margin-left: 10em;
    padding: 2em;
`;

const Wave = styled(HeroWave)`
    width: 110%;
    overflow: hidden;
    position: absolute;
    z-index: 1;
    bottom: -15em;
    color: white;
`;

const Header = () => {
    return (
        <React.Fragment>
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
{/* <Wave /> */}
export default Header