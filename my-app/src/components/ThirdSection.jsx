import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #FF5722;
  color: white;
  font-size: 3em;
`;

const ThirdSection = () => {
  return (
    <Section>
      <h1>Third Section</h1>
      <h1>Third Section제발</h1>
    </Section>
  );
};

export default ThirdSection;
