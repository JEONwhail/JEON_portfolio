import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FirstSection from './components/FirstSection';
import SecondSection from './components/SecondSection';
import ThirdSection from './components/ThirdSection';
import Indicator from './components/Indicator';
import GlobalStyle from './GlobalStyle';
import FourthSection from './components/FourthSection';

const App = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const sections = [<FirstSection goToSecondSection={() => setCurrentSection(1)} />, <SecondSection />, <ThirdSection />, <FourthSection/>];

  const handleScroll = (event) => {
    const { deltaY } = event;
    if (deltaY > 0 && currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    } else if (deltaY < 0 && currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [currentSection]);

  return (
    <Wrapper>
      <GlobalStyle />
      {sections[currentSection]}
      <Indicator currentSection={currentSection} totalSections={sections.length} />
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;
