import React from 'react';
import styled from 'styled-components';
import * as Mixins from '../../styles/Mixins';
import { mediaMin } from '../../styles/MediaQueries';
import Pitch from '../../img/pitch.jpg';
import Marketing from '../../img/marketing.jpg';
import Methodology from '../../img/methodology.jpg';


const Section2Row = styled.div`
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8em;
    &:nth-child(3) {
        margin-top: 13em;
    }
    ${Mixins.row}
`;

const Section2Container = styled.div`
    margin-top: 15em;
    ${Mixins.container}
`;

const Section2a = styled.div`
    ${mediaMin.tablet`
        max-width: 720px
        flex: 0 0 33.333333%;
        max-width: 33.333333%;
    `}
    h2 {
        margin-bottom: 1.5rem;
        font-size: 2rem;
    }
`;

const Section2b = styled.div`
    ${mediaMin.tablet`
        flex: 0 0 50%;
        max-width: 50%;
    `}
`;

const Section2Image = styled.img`
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    border-style: none;
`;

function Section2() {
    return (
        <Section2Container id='features'>
            <Section2Row>
                <Section2a data-aos="fade-down" data-aos-duration="1500" data-aos-once="true" data-aos-delay="500">
                    <h2>Pitch Coaching</h2>
                    <p>We re-work your pitch in line with our framework in three stages - creating clarity, 
                        communicating the opportunity and demonstrating the validation. For each stage, we make 
                        sure to explain why the content matters and what different stakeholders need to see. Our 
                        one-on-one pitch training is split into three separate workshops. Between each workshop we 
                        expect our participants to re-work different elements of their pitch and their business in 
                        preparation for the next session.</p>
                </Section2a>
                <Section2b><Section2Image src={Pitch} data-aos="fade-up" data-aos-duration="1500" data-aos-once="true" data-aos-delay="500" /></Section2b>
            </Section2Row>
            <Section2Row>
                <Section2b><Section2Image src={Marketing} data-aos="fade-right" data-aos-duration="1500" data-aos-once="true" data-aos-delay="500" /></Section2b>
                <Section2a data-aos="fade-left" data-aos-duration="1500" data-aos-once="true" data-aos-delay="500">
                    <h2>The Marketing Strategy</h2>
                    <p>Our practical marketing course, specifically more on digital marketing, covers key aspects 
                        of marketing, showing you how to integrate and reach customers and grow revenues. It is 
                        suitable for a variety of professions and for all levels of marketing and business experience; 
                        and will help you to understand how to maximise online strategies and the performance of your 
                        online marketing investments. It will also provide you with insights on how digital marketing 
                        is approached from both, a client and an agency perspective.</p>
                </Section2a>
            </Section2Row>     
            <Section2Row>
                <Section2a data-aos="fade-down" data-aos-duration="1500" data-aos-once="true" data-aos-delay="500">
                    <h2>Methodology</h2>
                    <p>Too many startups begin with an idea for a product that they think people want. They then 
                        spend months, sometimes years, perfecting that product without ever showing the product, 
                        even in a very rudimentary form. Startify team use a scientific approach then teaches 
                        entrepreneur to create and manage startups for them get a desired product to customers'
                        hands faster. Our method teaches you how to drive a startup-how to steer, when to turn, 
                        and when to persevere-and grow a business with maximum acceleration.</p>
                </Section2a>
                <Section2b><Section2Image src={Methodology} data-aos="fade-up" data-aos-duration="1500" data-aos-once="true" data-aos-delay="500" /></Section2b>
            </Section2Row> 
        </Section2Container>
    )
}

export default Section2;