import GlobalStyle from 'GlobalStyle';
import React, { useState } from 'react';
import theme from 'theme.js';
import styled, { ThemeProvider } from 'styled-components';
import DesktopGallery from 'Molecules/DesktopGallery/DesktopGallery';
import Price from 'Atoms/Price/Price';
import Quantity from 'Atoms/Quantity/Quantity';
import SubmitBtn from 'Atoms/SubmitBtn/SubmitBtn';
import DesktopNavBar from 'Molecules/DesktopNavBar/DesktopNavBar';
import MobileNavBar from 'Molecules/MobileNavBar/MobileNavBar';
import MobileMenu from 'Molecules/MobileMenu/MobileMenu';
import MobileGallery from 'Molecules/MobileGallery/MobileGallery';
import useWindowDimensions from 'WindowDimentions';
import Description from 'Atoms/Description/Description';

const Grid = styled.div`
  // background-color: ${(props) => props.theme.color.orange};
  display: grid;
`;

function App() {
  const { width, height } = useWindowDimensions();
  const [open, setOpen] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <>
        {/* <DesktopGallery />
         */}
        {/* <NavBar></NavBar> */}

        <GlobalStyle />
        <MobileNavBar open={open} setOpen={setOpen} />
        <MobileMenu open={open} />
        <MobileGallery />
        <Description Company="nike" Title="shoes" Details="Hello" />
        <Price cost="150" prevCost="300"></Price>
        <Quantity></Quantity>
        <SubmitBtn></SubmitBtn>
        {/* <Quantity /> */}
        {/* <h1>
          width : {width}, height : {height}
        </h1> */}
        {/* <MobileMenu /> */}
      </>
    </ThemeProvider>
  );
}

export default App;
