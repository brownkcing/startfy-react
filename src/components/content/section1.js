import React from 'react';
import styled from 'styled-components';
import * as Mixins from '../../styles/Mixins';
import Process from '../../img/process.jpg';
import { mediaMin } from '../../styles/MediaQueries';

const Section1A = styled.div`
    ${mediaMin.tablet`
        flex: 0 0 50%;
        max-width: 50%;
    `}
`;

const Section1Image = styled.img`
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    border-style: none;
`;

const Section1B = styled.div`
    box-shadow: 0 10px 30px -5px rgb(0 0 0 / 10%);
    background: #fff;
    padding: 2.5em;
    span {
        background: linear-gradient( -45deg, #1391a5, #274685);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 700;
        letter-spacing: 0.2rem;
        margin-bottom: -1rem;
        line-height: 1;
        display: block;
    }
    h3 {
        margin-bottom: -0.5rem;
        font-size: 1.75rem;
        font-weight: 500;
        line-height: 1.2;
    }

    ${mediaMin.tablet`
        max-width: 720px
        flex: 0 0 33.333333%;
        max-width: 33.333333%;
    `}
`;

const SectionRow = styled.div`
    &:nth-child(1) {
        justify-content:center;
    }
    ${Mixins.row}
`;

const SectionContainer = styled.div`
    ${Mixins.container}
`;


function Section1 () {
    return (
        <SectionContainer>
            <SectionRow>
                <Section1A>
                    <Section1Image src={Process} />
                </Section1A>
            </SectionRow>
            <SectionRow>
                <Section1B>
                    <span>01</span>
                    <h3>Sign Up with our Program</h3>
                    <p>Sign up to our 3 or 6 months program</p>
                </Section1B>
                <Section1B>
                    <span>02</span>
                    <h3>Attend Seminars and Meetups</h3>
                    <p>As you learn, we extend our knowledge with meetups alongside other succesful entrepreneur</p>
                </Section1B>
                <Section1B>
                    <span>03</span>
                    <h3>Ready to Startup</h3>
                    <p>At the end of the program, you will be able to start your business with confident and our guarantee.</p>
                </Section1B>
            </SectionRow>
        </SectionContainer>
    )
}

export default Section1;