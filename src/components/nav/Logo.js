import React from 'react';
import styled from 'styled-components';
import { mediaMax } from '../../styles/MediaQueries';

const Logos = styled.nav`
    font-size: 1.5em;
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    padding: 0.3em 1.3em;
    ${mediaMax.menuMax`
        flex-flow: row nowrap;
        position: relative;
    `}
`;

function Logo (){
    return (
        <Logos>
            Startyfy
        </Logos>
    )
};

export default Logo;