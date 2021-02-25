import React from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import Color from '../../styles/Colors';
import { mediaMax } from '../../styles/MediaQueries'
import HeroImage from '../../img/hero-img.png';

const Herostyle = styled.div`
    color: ${Color.whiteish};
    width: 37rem;
    h1 {
        margin: 0;
        font-size: 3.5rem;  
        font-weight: 700;      
        line-height: 1.2;
    }
    p {
         font-size: 1.125rem;
         margin-bottom: 3rem;
    }
    a { 
        font-size: 1rem;
        border: 2px solid #fff;
        padding: 15px 30px !important;
        background: none;
        color: #fff;
        text-decoration: none;
        padding: .375rem .75rem;
        line-height: 1.5;
        border-radius: .25rem;
        display: inline-block;
        :hover { 
            background: #fff;
            color: #2d71a1;
            transition: 0.3s all ease;
        }
    }
    
    ${mediaMax.custom`
    width: 25rem;
    `}

    ${mediaMax.desktop`
    width: 40rem;
    text-align: center;
    margin-top: 4em;
    h1 {
        margin: 0;
        font-size: 2.5rem;        
        line-height: 1.2;
    }
    `}
`;

const HeroImg = styled.img`
    margin-bottom: 2em;
    ${mediaMax.desktop`
    display: none;
    `}
`;

function Hero() {
    return (
        <React.Fragment>
            <Herostyle id='home'>
                <h1 data-aos="fade-right" data-aos-duration="1000" >A startup mentoring platform</h1>
                <p data-aos="fade-right" data-aos-duration="1800" style={{color:'white'}}>Still figuring out where to start? Let us help you kick it off!</p>
                <a data-aos="fade-right" data-aos-duration="2000" href="#pricing2" >Get started</a>
            </Herostyle>
            <HeroImg src={HeroImage} data-aos="fade-right" data-aos-duration="1000"></HeroImg>
        </React.Fragment>
    )
};

export default Hero;