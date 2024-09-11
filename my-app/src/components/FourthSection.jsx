import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #096dca;
  color: white;
  font-size: 3em;
`;

function FourthSection() {
  return (
    <Section>
      <h1>Fourth Section</h1>
    </Section>
  );
};

export default FourthSection;