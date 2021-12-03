import GlobalStyle from 'GlobalStyle';
import React from 'react';
import theme from 'theme.js';
import styled, { ThemeProvider } from 'styled-components';

const StyledDiv = styled.div`
  background-color: ${(props) => props.theme.veryDarkBlue};
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <StyledDiv>123</StyledDiv>
      </>
    </ThemeProvider>
  );
}

export default App;
