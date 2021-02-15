import React from 'react';
import styled, { css } from 'styled-components';
import * as Mixins from '../../styles/Mixins';
import { mediaMin } from '../../styles/MediaQueries';



const FormRow = styled.div`
    ${Mixins.row} 
`;
const FormStyle = styled.form`
    display: block;
    margin-top: 0em;
`;

const Button = styled.button`
    margin-bottom: 1rem;
    border: none;
    padding: 0.5em 1em;
    border: 0.1rem solid #8eaff1;
    border-radius: .3rem;
    color: #808080 ;
    font-size: 1.25rem;
    line-height: 1.5;
    text-transform: uppercase;
    font-weight: 500;
    text-decoration: none;
    letter-spacing: 0.1rem;
    cursor: pointer;
    outline:none;
    :hover { 
        border: 0.1rem solid #fff;
        background: #d4e2ff;
        color: #000;
        transition: 0.3s all ease;
    }
`;

const Label = styled.span`
    display: inline-block;
    text-transform: uppercase;
    font-size: 0.9rem;
    font-weight: 700;
    letter-spacing: 0.2rem;
    display: block;
    margin-bottom: 0.5em;
`;

const InputCss = css`
    font-family: "Roboto",sans-serif;
    font-size: 1rem;
    background: #fff;
    color: rgb(128,128,128);
    cursor: pointer;
    padding: 0.375rem;
    width: 100%;
    border-radius: 5px;
    border-color: transparent;
    outline: none;
    text-align: center;
    ::placeholder {
        color: rgb(128,128,128,0.5);
    }
`;
const Input = styled.input`
    ${InputCss}
`;

const TextArea = styled.textarea`
    ${InputCss};
    text-align: start;
    height: 12rem;
    resize: none;
`;

const InputStyle = styled.div`
    display: block;
    padding: 0 1em;
    margin-bottom: 1rem;
    width: 100%;
    ${mediaMin.tablet`
        flex: 0 0 50%;
        max-width: 50%;  
        &:nth-child(3),
        &:nth-child(4) {
            flex: 0 0 100%;
            max-width: 100%;
        }
    `}
`;


const Form = () => {
    return (
        <React.Fragment>
            <FormStyle>
                <FormRow>
                    <InputStyle>
                        <Label>Name: </Label>
                        <Input 
                            placeholder="Name" 
                            type='text'
                            required/>
                    </InputStyle>
                    <InputStyle>
                        <Label>Email: </Label>
                        <Input 
                            placeholder="Email"
                            type='email'
                            required />
                    </InputStyle>
                    <InputStyle>
                        <Label>Subject: </Label>
                        <Input 
                            placeholder="Subject"
                            type='text'
                            required />
                    </InputStyle>
                    <InputStyle>
                        <Label>Message: </Label>
                        <TextArea 
                            placeholder="Messages"
                            type='text'
                            required />
                    </InputStyle>
                    <InputStyle>
                        <Button>Submit</Button>
                    </InputStyle>
                </FormRow>
            </FormStyle>
        </React.Fragment>
    )
}

export default Form;