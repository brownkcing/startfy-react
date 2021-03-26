import React, {useState} from 'react';
import Styled from 'styled-components';

const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    background-color: black;
    background-color: rgba(0, 0, 0, 0.3);
`;

const ModalBox =styled.div`
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-height: 30%;
    width: 60%;
    background-color: white;
    overflow-y: auto;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    z-index: 101;
    padding: 40px;
`;

const Modal = (props) => {
  // we shall have some state to store open and closed states of the modal in the parent component
  const {show, setShow} = props;
  return show ? (
    <ModalWrapper>
      <ModalBackdrop onClick={() => setShow(false)} />
      <ModalBox>{props.children}</ModalBox>
    </ModalWrapper>
  ): null;
}
export default Modal;
