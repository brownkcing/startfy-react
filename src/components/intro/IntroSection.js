import React from 'react';
import styled from 'styled-components';
import { mediaMin, mediaMax } from '../../styles/MediaQueries'
import IntroImg1 from '../../img/icon_2.png';
import IntroImg2 from '../../img/icon_1.png';
import IntroImg3 from '../../img/icon_3.png';

const IconImage = styled.div`
    &.icon1 {
            background-image: url(${IntroImg1});
    }
    &.icon2 {
        background-image: url(${IntroImg2});
    }
    &.icon3 {
        background-image: url(${IntroImg3});
    }
    
    h3 {
        font-weight: 500;
        margin: 1em;
    }
    display: inline-block;
    vertical-align: middle;
    background-position: 78% 50%;
    background-size: 90%;
    background-repeat: no-repeat;
    height: 6.27em;
    width: 6.27em;
    border-radius: 50%;
    position: relative;
    box-shadow: 0 1rem 2rem 0 rgb(0 0 0 / 20%);
`;

const SecStyle = styled.div`
    ${mediaMax.tablet`
        display:block;
        padding: 0px 7em
    `};
    display: flex;
    flex-wrap: wrap;
`;

const Sec = styled.div`
    ${mediaMin.tablet`
        flex: 0 0 33.333333%;
        max-width: 33.333333%;
        padding: 0 1em;
    `};
`;
function IntroSection() {
    return (
        <SecStyle >
            <Sec>
                <IconImage className='icon1'/><h3>Business Valuation</h3><p>Valuate your business pitch with our experienced business leaders and incorporate their insights.</p>
            </Sec>
            <Sec>
                <IconImage className='icon2'/><h3>Financial Advises and Project Management</h3><p>Get in touch with our professional financial advisors for financial projections.</p>
            </Sec>
            <Sec>
                <IconImage className='icon3'/><h3>Ideas to Design to Development</h3><p>Brainstorming, design, and develop alongside our team with hand-to-hand mentoring.</p>
            </Sec>
        </SecStyle>
    );
};

export default IntroSection;
