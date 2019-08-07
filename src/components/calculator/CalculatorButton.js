import React from 'react';
import styled from 'styled-components';

const CalculatorButton = () => {
  return <StyledButton>9</StyledButton>;
};

const StyledButton = styled.div`
  height: 5rem;
  width: 5rem;
  border: 1px solid #fafafa;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;

export default CalculatorButton;
