import React from 'react';
import styled from 'styled-components';
import CalculatorButton from './CalculatorButton';

const CalculatorControls = () => {
  return (
    <StyledControls>
      <CalculatorButton circle>C</CalculatorButton>
      <CalculatorButton circle>+/-</CalculatorButton>
      <CalculatorButton circle>%</CalculatorButton>
      <CalculatorButton circle red>
        /
      </CalculatorButton>

      <CalculatorButton>7</CalculatorButton>
      <CalculatorButton>8</CalculatorButton>
      <CalculatorButton>9</CalculatorButton>
      <CalculatorButton circle red>
        X
      </CalculatorButton>

      <CalculatorButton>4</CalculatorButton>
      <CalculatorButton>5</CalculatorButton>
      <CalculatorButton>6</CalculatorButton>
      <CalculatorButton circle red>
        -
      </CalculatorButton>

      <CalculatorButton>1</CalculatorButton>
      <CalculatorButton>2</CalculatorButton>
      <CalculatorButton>3</CalculatorButton>
      <CalculatorButton circle red>
        +
      </CalculatorButton>

      <CalculatorButton>0</CalculatorButton>
      <CalculatorButton>00</CalculatorButton>
      <CalculatorButton>.</CalculatorButton>
      <CalculatorButton redCircle>=</CalculatorButton>
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
