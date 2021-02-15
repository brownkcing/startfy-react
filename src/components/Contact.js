import React from 'react';
import styled from 'styled-components';
import '../index.css';
import * as Mixins from '../styles/Mixins';
import { mediaMax, mediaMin } from '../styles/MediaQueries';
import Form from '../components/contact/form';
import Address from '../components/contact/address';

const ContactWrapper = styled.div`
    ${Mixins.wrapper};
    background: linear-gradient(to right, #8eaff1 0%, #d4f0f5 100%);
    padding: 3em 0;
`;

const ContactContainer = styled.div`
    ${Mixins.container};
`;

const ContactRow = styled.div`
    ${Mixins.row}
    h2 {
        padding: 2.5rem 0.525rem;
        font-size: 3rem;
        font-weight: 700;
        background: linear-gradient( -45deg, #3db3c5, #274685);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        ${mediaMax.tablet`
            padding: 2rem 0;
        `}
    }
    justify-content: center;
    ${mediaMin.tablet`
        justify-content: space-between;
    `};
`;

const FormContainer = styled.div`
    ${mediaMin.tablet`
        flex: 0 0 50%;
        max-width: 50%;
    `};
`;

const FormContainer2 = styled.div`
    margin-left: auto;
    order: 2;
    ${mediaMin.tablet`
       
        flex: 0 0 33.333333%;
        max-width: 33.333333%;   
    `};
    ${mediaMax.tablet`
    margin-left: 0;
    margin-right: auto;
    padding: 0 1.25em;
    `}
`;

export default function Contact() {
    return (
        <ContactWrapper>
            <ContactContainer>
                <ContactRow>
                    <h2>Get in Touch With Us</h2>
                </ContactRow>
                <ContactRow>
                    <FormContainer2>
                        <Address />
                    </FormContainer2>
                    <FormContainer>
                        <Form />
                    </FormContainer>                   
                </ContactRow>
            </ContactContainer>
        </ContactWrapper>
    )
};