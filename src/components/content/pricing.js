import React from 'react';
import styled from 'styled-components';
import 'aos/dist/aos.css'
import { Switch, Route } from 'react-router-dom';
import Profile from '../authentication/Profile';
import * as Mixins from '../../styles/Mixins';
import { mediaMin } from '../../styles/MediaQueries';
import useToggle from '../modal/useToggle';
import Modal from '../modal/Modal';
import RegForm from '../authentication/RegForm';

const PricingContainer = styled.div`
    margin-top: 16em;
    ${Mixins.container}
`;

const PricingRow = styled.div`
    justify-content: center;
    text-align: center;
    ${Mixins.row}
`;

const PriceTitle = styled.div`
    margin-bottom: 3rem;
    h2 {
        font-size: 3rem;
        font-weight: 700;
        background: linear-gradient( -45deg, #3db3c5, #274685);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    ${mediaMin.tablet`
        flex: 0 0 58%;
        max-width: 58%;
    `}
`;

const PriceSignup = styled.div`
    position: relative;
    width: 100%;
    padding-right: 0.8em;
    padding-left: 0.8em;
    &:nth-child(2) 
        > div {
            background: linear-gradient(-45deg, #1391a5, #274685);
            color: #fff;
            box-shadow: none;
            span {
                color: #fff;
            }
            h3 {
                color: #fff;
            }
            strong {
                color: #fff;
            }
        }
    div {
        height: 100%;
        text-align: center;
        padding: 3em;
        padding-bottom: 12em;
        position: relative;
        border-radius: 0.2rem;
        color: #000000;
        background: #fff;
        box-shadow: 0 0.5em 1.2em 0 rgb(0 0 0 / 20%);
            div {
                padding: 0;
                box-shadow: 0 0 0 0 rgb(0 0 0 / 0%);
                height: 0;
                border-radius: 0;
                position: absolute;
                bottom: 10em;
                width: 100%;
                text-align: center;
                left: 0;
                p {
                    margin-top: 0;
                    margin-bottom: 1rem;
                     button {
                        text-decoration: none;
                        background: #fff;
                        border: 0.2rem solid #f1f1f1;
                        border-radius: 0.25rem;
                        box-shadow: 0 0.25em 0.5em 0 rgb(0 0 0 / 20%);
                        padding: 1em 2em;
                        font-size: 1rem;
                        line-height: 1.5;
                        display: inline-block;
                        font-weight: 400;
                        color: #212529;                 
                        }
                    }
                }
            }
        strong {
                display: block;
                margin-bottom: 0.3em;
                font-size: 2rem;
                font-weight: 300;
            }
        span {
            color: #b3b3b3;
            text-transform: uppercase;
            font-size: 0.7rem;
            letter-spacing: 0.2rem;
            display: block;
            margin-bottom: 1.5em;
        }
        h3 {
            color: #2d71a1;
            font-size: 1.75rem;
            margin-top: 0;
            margin-bottom: 0.5rem;
            font-weight: 500;
            line-height: 1.2
        }
        ul {
            margin-bottom: 3em;
            margin-top: 0;
            padding-left: 0;
            list-style: none;
            li {
                margin-bottom: 0.85em;
            }
        }
    }

    ${mediaMin.desktop`
        flex: 0 0 33.333333%;
        max-width: 33.333333%;
    `};
`;


function Pricing() {
    const [open, setOpen] = useToggle(false);
    return (
        <PricingContainer id='pricing'>
            <PricingRow data-aos="fade-up" data-aos-duration="1500" data-aos-once="true" data-aos-delay="500">
                <PriceTitle>
                    <h2>Choose a Plan</h2>
                    <p>You can sign-up for our 3-months trial program or our full course of 6 months.</p>
                </PriceTitle>
            </PricingRow>
            <PricingRow>
                <PriceSignup data-aos="fade-up" data-aos-duration="1500" data-aos-once="true" data-aos-delay="1000">
                    <div>
                        <span>Normal</span>
                        <h3>3-months-program</h3>
                        <ul>
                            <li>5 basic startup program</li>
                            <li>Access to our materials and tools online with mentoring for 4 months</li>
                        </ul>
                        <div>
                            <strong>$399</strong>
                            <p><button type="button" onClick={() => setOpen()}>Choose Plan</button></p>
                        </div>
                    </div>
                </PriceSignup>
                <PriceSignup data-aos="fade-up" data-aos-duration="1500" data-aos-once="true" data-aos-delay="1500">
                    <div>
                        <span>Most Popular</span>
                        <h3>6-months-program</h3>
                        <ul>
                            <li>Full course program</li>
                            <li>Access to our materials and tools online with mentoring for a year</li>
                            <li>Free entry to paid events for a limited time</li>
                        </ul>
                        <div><strong>$699</strong>
                            <p><button type="button" onClick={() => setOpen()}>Choose Plan</button></p>
                        </div>
                    </div>
                </PriceSignup>
                <PriceSignup data-aos="fade-up" data-aos-duration="1500" data-aos-once="true" data-aos-delay="2000">
                    <div>
                        <span>Best Value</span>
                        <h3>6-months program++</h3>
                        <ul>
                            <li>Full course program</li>
                            <li>Access to our materials and tools online with mentoring for 2 years</li>
                            <li>Free entry to paid events for a year</li>
                        </ul>
                        <div><strong>$1299</strong>
                            <p><button type="button" onClick={() => setOpen()}>Choose Plan</button></p>
                        </div>
                    </div>
                </PriceSignup>
                    {open && (
                        <Modal open={open} toggle={setOpen}>
                            <Switch>  
                                <RegForm />
                                <Route path="/profile" component={Profile} />
                            </Switch>
                        </Modal>
                        )}
            </PricingRow>
        </PricingContainer>
    )   
};

export default Pricing;