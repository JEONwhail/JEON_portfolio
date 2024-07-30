import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Button 컴포넌트
const ButtonComponent = ({ text, onClick }) => {
  return (
    <ButtonWrapper onClick={onClick}>
      <ButtonText>{text}</ButtonText>
    </ButtonWrapper>
  );
};

// FirstSection 컴포넌트
const FirstSection = ({ goToSecondSection }) => {
  const words = [
    "활발한 ", "키큰 ", "박성진부인 ", "배우는 걸 좋아하는 ", 
    "발랄한 ", "재밌는 ", "3년차인 ", "데이식스 ", 
    "몬스타엑스 ", "아무거또 없는... "
  ];

  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [texts, setTexts] = useState([
    "안녕하세요\n",
    `${words[Math.floor(Math.random() * words.length)]}퍼블리셔 \n`,
    "김지연의 포트폴리오 입니다"
  ]);

  useEffect(() => {
    const typeText = () => {
      if (textIndex < texts.length) {
        if (charIndex < texts[textIndex].length) {
          setDisplayedText((prev) => prev + texts[textIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        } else {
          setTextIndex((prev) => prev + 1);
          setCharIndex(0);
        }
      } else {
        setIsTyping(false);
      }
    };

    if (isTyping) {
      const timeoutId = setTimeout(typeText, 100);
      return () => clearTimeout(timeoutId);
    }
  }, [charIndex, textIndex, isTyping, texts]);

  return (
    <Section>
      <Content>
        <TypingText>{displayedText}</TypingText>
      </Content>
      <ButtonGroup>
        <ButtonComponent text="다음 영역으로 이동" onClick={goToSecondSection} />
      </ButtonGroup>
    </Section>
  );
};

export default FirstSection;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #282c34;
  color: white;
`;

const Content = styled.div`
  text-align: center;
  width: 100%;
  max-width: 800px; 
  margin: 0 20px; 
  cursor: pointer;
  flex: 1; 
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TypingText = styled.p`
  margin: 20px 0;
  font-size: 3em; 
  white-space: pre-wrap; 
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const ButtonWrapper = styled.div`
  background: #3D4C53;
  margin: 20px;
  width: 200px;
  height: 50px;
  overflow: hidden;
  text-align: center;
  transition: .2s;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: 0px 1px 2px rgba(0,0,0,.2);
  position: relative;

  &:hover {
    background: #26A69A;
  }
`;

const ButtonText = styled.p`
  color: white;
  transition: .3s;
  position: absolute;
  left: 0;
  width: 100%;
`;
