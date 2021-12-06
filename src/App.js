import GlobalStyle from 'GlobalStyle';
import React from 'react';
import theme from 'theme.js';
import styled, { ThemeProvider } from 'styled-components';
import Gallery from 'Molecules/Gallery/Gallery';
import Price from 'Atoms/Price/Price';

const StyledDiv = styled.div`
  background-color: ${(props) => props.theme.color.orange};
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        {/* <Gallery /> */}
        <Price cost="150" prevCost="300"></Price>
      </>
    </ThemeProvider>
  );
}

export default App;
