import React from 'react';
import styled from 'styled-components';

const CalculatorDisplay = () => {
  return (
    <StyledDisplay>
      <p>Display</p>
    </StyledDisplay>
  );
};

const StyledDisplay = styled.div`
  /* border: 1px solid #fafafa; */
  height: 40%;
  border-bottom: 1px solid #5c5454;
`;

export default CalculatorDisplay;
