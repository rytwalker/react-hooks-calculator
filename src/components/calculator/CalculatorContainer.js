import React, { useState } from 'react';
import styled from 'styled-components';
import CalculatorControls from './CalculatorControls';
import CalculatorDisplay from './CalculatorDisplay';

const CalculatorContainer = () => {
  const [total, setTotal] = useState(0);
  const [calculation, setCalculation] = useState('0');

  const handleCalculationConcat = input => {
    const operations = new Set(['/', 'X', '-', '+']);
    // if first number
    if (calculation === '0') {
      if (operations.has(input)) {
        setCalculation(`${calculation} ${input} `);
      } else {
        setCalculation(input);
      }
    } else {
      if (operations.has(input)) {
        setCalculation(`${calculation} ${input} `);
      } else if (input === 'C') {
        setCalculation('0');
        setTotal(0);
      } else {
        setCalculation(`${calculation}${input}`);
      }
    }
  };

  const handleCalculation = () => {
    const operations = new Set(['/', 'X', '-', '+']);
    const calcArr = [...calculation.split(' ')];
    if (calcArr.length === 1) {
      setTotal(calcArr[0]);
    } else {
      let calculation = 0;
      let currOperation = null;
      calcArr.forEach((numOrOperation, idx) => {
        if (calculation === 0 && idx === 0) {
          calculation += parseInt(numOrOperation);
        } else {
          if (operations.has(numOrOperation)) {
            currOperation = numOrOperation;
          } else if (currOperation) {
            if (currOperation === '+') {
              calculation += parseInt(numOrOperation);
            } else if (currOperation === '-') {
              calculation -= parseInt(numOrOperation);
            } else if (currOperation === 'X') {
              calculation *= parseInt(numOrOperation);
            } else if (currOperation === '/') {
              calculation /= parseInt(numOrOperation);
            }
          }
        }
      });
      setTotal(calculation);
    }
  };

  return (
    <Container>
      <CalculatorDisplay total={total} calculation={calculation} />
      <CalculatorControls
        handleCalculationConcat={handleCalculationConcat}
        handleCalculation={handleCalculation}
      />
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
  border-radius: 6px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;
