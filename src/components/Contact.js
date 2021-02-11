import React from 'react';
import styled from 'styled-components';
import '../index.css';
import * as Mixins from '../styles/Mixins';
import { mediaMin } from '../styles/MediaQueries';
import Form from '../components/contact/form';

const ContactWrapper = styled.div`
    height: auto;
    background: linear-gradient(to right, #8eaff1 0%, #d4f0f5 100%);
    ${Mixins.wrapper};
`;

const ContactContainer = styled.div`
    ${Mixins.container};
`;

const ContactRow = styled.div`
    ${Mixins.row}
    h2 {
        font-size: 3rem;
        font-weight: 700;
        background: linear-gradient( -45deg, #3db3c5, #274685);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
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
                        this is transparent
                    </FormContainer2>
                    <FormContainer>
                        <Form />
                    </FormContainer>                   
                </ContactRow>
            </ContactContainer>
        </ContactWrapper>
    )
};