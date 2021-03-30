import styled from "styled-components";
import { mediaMin } from '../../styles/MediaQueries';

const ModalWrapper = styled.div`
  display: flex;
  position: fixed;
  z-index: 2000;
  padding-top: 1em;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalBody = styled.div`
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
  display: flex;
  flex-wrap: wrap;
  justify-content:center;
  background: linear-gradient(-45deg, #1391a5, #274685);
  color: #000000;
  background: #fff;
  box-shadow: 0 10px 30px 0 rgb(0 0 0 / 20%);
  background-color: #fefefe;
  margin: auto;
  border: 1px solid #888;
  height: auto;
  width: min-content;
`;

const CloseButton = styled.span`
  height: 0;
  position: relative;
  bottom: 1em;
  left: 2.9em;
  color: white;
  font-size: 5rem;
  font-weight: bold;
  &:hover,
  &:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const StyledModal = {
  ModalWrapper,
  ModalBody,
  CloseButton
};