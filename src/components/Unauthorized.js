import React from 'react';
import styled from 'styled-components';
import unauthpic from '../img/unauthorized.jpg';

const UnauthorizedPic = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 45%;
`;

export default function Unauthorized () {
    return (
        <div>
            <UnauthorizedPic src={unauthpic} />
        </div>
    )
}
