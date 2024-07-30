import React from 'react';
import styled from 'styled-components';

const Button = ({ text, subText, onClick }) => {
  return (
    <ButtonContainer onClick={onClick}>
      <ButtonText>{text}</ButtonText>
      <ButtonSubTextContainer className="btnSubTextContainer">
        <ButtonSubText className="btnSubText">{subText}</ButtonSubText>
      </ButtonSubTextContainer>
    </ButtonContainer>
  );
};

export default Button;

const ButtonContainer = styled.div`
  background: #3D4C53;
  margin: 20px auto;
  width: 200px;
  height: 50px;
  overflow: hidden;
  text-align: center;
  transition: 0.2s;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: 0px 1px 2px rgba(0,0,0,0.2);
  position: relative;

  &:hover .btnSubTextContainer {
    left: -130px;
  }

  &:hover .btnText {
    margin-left: 65px;
  }

  &:active {
    box-shadow: 0px 5px 6px rgba(0,0,0,0.3);
  }
`;

const ButtonText = styled.p`
  color: white;
  transition: 0.3s;
  font-size: 1.5em;
`;

const ButtonSubTextContainer = styled.div`
  position: relative;
  width: 200px;
  height: 100px;
  margin-top: -100px;
  padding-top: 2px;
  background: #26A69A;
  left: -250px;
  transition: 0.3s;
`;

const ButtonSubText = styled.p`
  margin-top: 63px;
  margin-right: -130px;
  color: white;
  font-size: 1.2em;
`;
