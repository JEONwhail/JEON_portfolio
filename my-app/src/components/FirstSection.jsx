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

// 랜덤 단어를 가져오는 함수
const getRandomWord = () => {
  const words = [
    "활발한 ", "발랄한 ", "새로운게 재미있는 ", "배우는 걸 좋아하는 ", 
    "재미있게 살고있는 ", "3년차인 ", "두렵지않은 ", 
    "친화력 넘치는 ", "행복이란 단어가 마냥 좋은 "
  ];
  return words[Math.floor(Math.random() * words.length)];
};

const FirstSection = ({ goToSecondSection }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [texts, setTexts] = useState([]);

  useEffect(() => {
    // texts를 랜덤 단어로 초기화
    setTexts([
      "안녕하세요\n",
      `${getRandomWord()}퍼블리셔 \n`,
      "김지연의 포트폴리오 입니다"
    ]);
  }, []); // 빈 배열로 한 번만 실행되도록 설정

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
        <ButtonComponent text="제가 더 궁금하신가요?!" onClick={goToSecondSection} />
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
