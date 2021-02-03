import React from 'react';
import styled from 'styled-components';
import Section1 from './content/section1';
import * as Mixins from '../styles/Mixins';

const SectionWrapper = styled.div`
    ${Mixins.wrapper}
`;

function Content() {
    return (
        <SectionWrapper>
                <Section1 />
        </SectionWrapper>
    )
}
export default Content;