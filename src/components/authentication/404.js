import React from 'react';
import styled from 'styled-components';
import errorPic from '../../img/404.jpg';

const FourOFourPic = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 70%;
`;

export default function FourOFour () {
    return (
        <div>
            <FourOFourPic src={errorPic} />
        </div>
    )
}
