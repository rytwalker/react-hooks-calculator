import React from 'react';
import styled from 'styled-components';
import CalculatorButton from './CalculatorButton';
import { buttonData } from './buttonData';

const CalculatorControls = () => {
  return (
    <StyledControls>
      {buttonData.map(button => (
        <CalculatorButton
          key={button.id}
          red={button.red}
          circle={button.circle}
          redCircle={button.reCircle}
        >
          {button.button}
        </CalculatorButton>
      ))}
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
