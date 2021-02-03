import React from 'react';
import styled from 'styled-components';
import { mediaMin, mediaMax } from '../styles/MediaQueries'
import IntroSection from '../components/intro/IntroSection'

const WrapperHealine = styled.div`
    padding: 7rem 0;
    display: flex;
    flex-wrap: wrap;
`;
const HeadlineContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    z-index: 2;
    position: relative;
    transition: 0.3s all ease;
    text-align: center;
    justify-content: center;
    ${mediaMax.phone`
        max-width: 540px;
    `};
    ${mediaMin.tablet`
        max-width: 720px;
    `};
    ${mediaMin.desktop`
        max-width: 960px;
    `}; 
    ${mediaMin.menuMax`
        max-width: 1140px;
    `};
`;

const IntroStyle = styled.h2`
    ${mediaMin.menuMax`
    margin-right: 2em;
    margin-left: 2em;
    `};
    margin: 0;
    font-size: 3rem;
    font-weight: 700;
    line-height: 1.2;
    background: linear-gradient(-45deg, #3db3c5, #274685);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
`;

const IntroDesc = styled.p`
    line-height: 1.5;
    ${mediaMin.phone`
        margin-right: 5em;
        margin-left: 5em;
    `};
    ${mediaMin.tablet`
        margin-right: 6em;
        margin-left: 6em;
    `};
    ${mediaMin.desktop`
        margin-right: 10em;
        margin-left: 10em;
    `}; 
    ${mediaMin.custom`
        margin-right: 13em;
        margin-left: 13em;
    `};
`;

function intro () {
    return (
        <WrapperHealine>
            <HeadlineContainer>
                <IntroStyle>Startyfy is a mentor-driven acceleration program</IntroStyle>
                <IntroDesc>Everybody can start something. It takes careful planning and hardwork to make it into fruition. 
                        We are here to guide and mentor you in such manner not only for your own growth as an entrepreneur, 
                        but to make sure your startup thrives.</IntroDesc>
                <IntroSection />
            </HeadlineContainer>
        </WrapperHealine>
    );
};

export default intro;