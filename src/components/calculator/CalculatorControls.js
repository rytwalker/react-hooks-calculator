import React from 'react';
import styled from 'styled-components';
import CalculatorButton from './CalculatorButton';

const CalculatorControls = () => {
  return (
    <StyledControls>
      <CalculatorButton />
      <CalculatorButton />
      <CalculatorButton />
      <CalculatorButton />

      <CalculatorButton />
      <CalculatorButton />
      <CalculatorButton />
      <CalculatorButton />

      <CalculatorButton />
      <CalculatorButton />
      <CalculatorButton />
      <CalculatorButton />

      <CalculatorButton />
      <CalculatorButton />
      <CalculatorButton />
      <CalculatorButton />

      <CalculatorButton />
      <CalculatorButton />
      <CalculatorButton />
      <CalculatorButton />
    </StyledControls>
  );
};

const StyledControls = styled.div`
  height: 60%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
`;

export default CalculatorControls;
