import styled, { css } from 'styled-components';
import { mediaMax, mediaMin } from '../styles/MediaQueries';

export const wrapper = css`
  margin: 7rem 0;

`;

export const container = css`
    z-index: 2;
    position: relative;
    width: 100%;
    padding-right: 1em;
    padding-left: 1em;
    margin-right: auto;
    margin-left: auto;
    ${mediaMin.phone`
        max-width: 540px;
    `};
    ${mediaMin.tablet`
        max-width: 720px;
    `};
    ${mediaMin.desktop`
        max-width: 960px;
    `}; 
    ${mediaMin.menuMax`
        max-width: 1140px;
    `};
`;

export const row = css`
    display: flex;
    flex-wrap: wrap;
`;