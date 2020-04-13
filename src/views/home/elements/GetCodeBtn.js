import React from 'react';
import StyledGetCodeBtn from './../../styles/StyledGetCodeBtn';

const GetCodeBtn = ({ text, callback }) => (
  <StyledGetCodeBtn type="button" onClick={callback}>
    <i className="fa fa-qrcode"></i>
    {text}
  </StyledGetCodeBtn>
);

export default GetCodeBtn;
