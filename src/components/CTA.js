import React from 'react';
import styled from 'styled-components';
import * as Mixins from '../styles/Mixins';
import { mediaMin } from '../styles/MediaQueries';

const CTAWrapper = styled.div`
    ${Mixins.wrapper}
    padding: 4em 0;
    background: linear-gradient(to right, #274685 0%, #3db3c5 100%);
    color: #fff;
`;

const CTAContainer = styled.div`
    ${Mixins.container}
`;

const CTARow= styled.div`
    ${Mixins.row}
    align-items: center;
`;

const CTAText = styled.div`
    color: #fff;
    text-align:center;
    > h2 {
        font-size: 3rem;
        font-weight: 700;
    }
    ${mediaMin.tablet`
        text-align: left;
        flex: 0 0 66.666667%;
        max-width: 66.666667%;
    `}
`;

const CTAButton = styled.div`
    text-align: center;
    flex: auto;
    ${mediaMin.tablet`
        flex: 0 0 33.333333%;
        max-width: 33.333333%;
        text-align: right;
    `}
    > p {
        > a {
            display: inline-block;
            background: #000000;
            color: #fff;
            border: none;
            border-radius: .25rem;
            padding: 1rem 2rem;    
            vertical-align: middle;
            text-align: center;
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.5;
            cursor: pointer;
        }
    }
`;
export default function CTA() {
    return (
        <CTAWrapper>
            <CTAContainer>
                <CTARow>
                    <CTAText><h2>What are you waiting for? Let's kickstart your kickstart!</h2></CTAText>
                    <CTAButton><p><a>Sign-Up</a></p></CTAButton>
                </CTARow>
            </CTAContainer>
        </CTAWrapper>
    )
}