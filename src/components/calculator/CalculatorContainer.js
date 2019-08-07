import React from 'react';
import styled from 'styled-components';
import CalculatorControls from './CalculatorControls';
import CalculatorDisplay from './CalculatorDisplay';

const CalculatorContainer = () => {
  return (
    <Container>
      <CalculatorDisplay />
      <CalculatorControls />
    </Container>
  );
};

export default CalculatorContainer;

const Container = styled.div`
  max-width: 375px;
  width: 100%;
  height: 650px;
  background: #0b0b0b;
  color: #fafafa;
  border-radius: 4px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;
