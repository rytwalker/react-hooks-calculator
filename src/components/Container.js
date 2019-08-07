import React from 'react';
import styled from 'styled-components';

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;
