import React from 'react';
import styled from 'styled-components';

const CalculatorButton = ({
  children,
  circle,
  handleCalculationConcat,
  input,
  red,
  redCircle
}) => {
  return (
    <StyledButton
      onClick={() => handleCalculationConcat(input)}
      circle={circle}
      red={red}
      redCircle={redCircle}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.div`
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  background: ${({ circle, redCircle }) =>
    circle ? '#444' : redCircle ? '#CF5C5C' : 'transparent'};
  font-weight: ${({ circle, redCircle }) => (circle || redCircle ? 700 : 400)};
  color: ${({ red }) => (red ? '#D11F1F' : '#fafafa')};
  /* border: 1px solid #fafafa; */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  cursor: pointer;
`;

export default CalculatorButton;
