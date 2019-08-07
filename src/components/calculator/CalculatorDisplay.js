import React from 'react';
import styled from 'styled-components';

const CalculatorDisplay = () => {
  return (
    <StyledDisplay>
      <Calculation>114 x 5</Calculation>
      <Answer>570</Answer>
    </StyledDisplay>
  );
};

const StyledDisplay = styled.div`
  /* border: 1px solid #fafafa; */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  height: 40%;
  border-bottom: 1px solid #5c5454;
`;

const Calculation = styled.div`
  color: #5c5454;
  margin-right: 1rem;
`;

const Answer = styled.div`
  font-size: 8rem;
  padding: 0 0 2rem;
`;

export default CalculatorDisplay;
