import React from 'react';
import styled from 'styled-components';
import Icofont from 'react-icofont'
import * as Mixins from '../styles/Mixins';
import { mediaMin } from '../styles/MediaQueries';

const FooterWrapper = styled.div`
    ${Mixins.wrapper}
    color: white;
    padding: 4em 0;
    background-color: #000;
`;
const FooterContainer = styled.div`
    ${Mixins.container}
`;

const Footer1 =  styled.div`
    ${mediaMin.tablet`
    flex: 0 0 33.333333%;
        max-width: 33.333333%;
        margin-bottom: 0;
    `}
`;

const Footer2 =  styled.div`
    ${mediaMin.tablet`
        flex: 0 0 58.333333%;
        max-width: 58.333333%;
        margin-left: auto;
    `}
`;

const Footer2Style = styled.div`
    display: flex;
    flex-wrap: wrap; 
        > div {
            flex: 0 0 33.333333%;
            max-width: 33.333333%;
        }

`;

const Icon = styled.li`
    line-height: 1.5;
    margin-bottom: 10px;
    > a {
       margin: 0 0.25rem;
       display: inline-block;
       width: 3rem;
       height: 3rem;
       border-radius: 50%;
       background: #f8f9fa;
       position: relative;
       text-align: center;
       transition: 0.3s background ease;
       color: #0d1e2d;
       text-decoration: none;
       > i {
           display: inline-block;
           left: 50%;
           position: absolute;
           top: 50%;
           transform: translate(-50%, -50%);
           }
       }
   }
`;


const FooterRow = styled.div`
    ${Mixins.row}
`;

const FooterRow2 = styled.div`
    ${Mixins.row}
    text-align: center;
    justify-content: center;
        > div {
            font-size: 0.75rem;
            color: #9fa1a4;
            ${mediaMin.tablet`
                flex: 0 0 58.333333%;
                max-width: 58.333333%;
            `}
            p {
                margin-bottom: 0;   
            }
            a {
                color: #fff;
                font-size: 1rem;
            }
        }
`;

export default function Footer() {
    return (
        <FooterWrapper>
            <FooterContainer>
                <FooterRow>
                    <Footer1>
                        <h3>About Startyfy</h3>
                        <p>
                            Startify is a Startup Mentorship Platform and Agency founded in 2020 with the goal 
                            to help and guide individuals with their startups and become the next leading 
                            entrepreneur.
                            <br />
                            <br />
                            As an entreprenuership agency, we create opportunity for startups to be on equal 
                            foot with other already established business. We create both digital and technological 
                            solutions from our offices in Dubai.
                        </p>
                    </Footer1>
                    <Footer2>
                        <Footer2Style>
                            <div><h3>Navigation</h3>
                                <ul>
                                    <li>Pricing</li>
                                    <li>Features</li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                            <div><h3>Services</h3>
                                <ul>
                                    <li>Mentorship</li>
                                    <li>Digital Marketing</li>
                                    <li>Business Valuation</li>
                                    <li>Coworking Space</li>
                                </ul></div>
                            <div><h3>Connect With Us</h3>
                                <ul>
                                    <Icon><a href="#"><Icofont icon="twitter" /></a>
                                        <a href="#"><Icofont icon="facebook"/></a>
                                    </Icon>
                                    <Icon><a href="#"><Icofont icon="dribble"/></a>
                                        <a href="#"><Icofont icon="behance"/></a>
                                    </Icon>
                                </ul></div>
                        </Footer2Style>
                    </Footer2>
                </FooterRow>
                <FooterRow2>
                <div><p>@ Cyril 2020</p>
                    <div> by&nbsp;
                        <a>Cyril Marcus</a>
                    </div>
                </div>
                </FooterRow2>
            </FooterContainer>
        </FooterWrapper>
    )
}

