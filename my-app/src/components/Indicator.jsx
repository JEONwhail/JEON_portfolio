import React from 'react';
import styled from 'styled-components';

const Indicator = ({ currentSection, totalSections }) => {
  return (
    <IndicatorWrapper>
      {Array.from({ length: totalSections }).map((_, index) => (
        <Dot key={index} active={index === currentSection} />
      ))}
    </IndicatorWrapper>
  );
};

export default Indicator;

const IndicatorWrapper = styled.div`
  position: fixed;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => (props.active ? '#000' : '#bbb')};
`;
