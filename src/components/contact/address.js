import React from 'react';
import styled from 'styled-components';

const AddressWrapper = styled.div`
    > ul{
        margin-top: 0;
        margin-bottom: 1rem;
        > li {
            margin-bottom: 1rem;
             > strong {
                margin-bottom: .25rem;
                display: block;
             }
        }
    }
`;

export default function Address() {
    return (
        <AddressWrapper>
            <ul>
                <li><strong>Address</strong>
                    <span>Jumeirah Lakes Towers, Dubai, United Arab Emirates</span>
                </li>
                <li><strong>Phone</strong>
                    <span>+971 04 422 014a</span></li>
                <li><strong>Email</strong>
                    <span>startify.mena@startify.com</span></li>
                </ul>
        </AddressWrapper>
    )
}