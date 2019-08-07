import React from 'react';
import styled from 'styled-components';

const CalculatorDisplay = ({ calculation, total }) => {
  return (
    <StyledDisplay>
      <CalculationDisplay>{calculation}</CalculationDisplay>
      <TotalDisplay>{total}</TotalDisplay>
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

const CalculationDisplay = styled.div`
  color: #5c5454;
  margin-right: 1rem;
`;

const TotalDisplay = styled.div`
  font-size: 8rem;
  padding: 0 0 2rem;
`;

export default CalculatorDisplay;
