import React from 'react';
import styled from 'styled-components';
import Section1 from './content/section1';
import Section2 from './content/section2';
import Pricing from './content/pricing';

import * as Mixins from '../styles/Mixins';

const ContentWrapper = styled.div`
    ${Mixins.wrapper}
`;



function Content() {
    return (
        <ContentWrapper>
                <Section1 />
                <Section2 />
                <Pricing />
                </ContentWrapper>
    )
}
export default Content;