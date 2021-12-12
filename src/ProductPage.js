import GlobalStyle from 'GlobalStyle';
import React, { useState, useReducer } from 'react';
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
import iconCartPath from 'assets/img/icon-cart.svg';

const Grid = styled.div`
  // background-color: ${(props) => props.theme.color.orange};
  display: grid;
`;

//quantity
const initialState = {
  quantity: 0,
  negError: false,
};

function reducer(state, action) {
  let newState = { ...initialState };

  switch (action.type) {
    case 'increment':
      newState.quantity = state.quantity + 1;
      return newState;
    case 'decrement':
      newState.quantity = state.quantity - 1;
      if (newState.quantity < 0) {
        newState.negError = true;
        newState.quantity = 0;
      }
      return newState;
    default:
      throw new Error();
  }
}

function ProductPage({
  product: {
    company,
    title,
    description,
    price: [prevPrice, price],
  },
}) {
  const { width, height } = useWindowDimensions();
  const [openMenu, setOpenMenu] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [cartArray, setCartArray] = useState([{ title: 'aaa', amount: '1' }]);

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <MobileNavBar
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          cartArray={cartArray}
        />
        <MobileMenu open={openMenu} />
        <MobileGallery />
        <Description Company={company} Title={title} Details={description} />
        <Price Price={price} prevPrice={prevPrice}></Price>
        <Quantity
          quantity={state.quantity}
          dispatch={dispatch}
          negError={state.negError}
        ></Quantity>
        <SubmitBtn
          icon={iconCartPath}
          alt="cart icon"
          text="Add to cart"
          onClick={() =>
            setCartArray((cartArray) => [
              ...cartArray,
              { title: title, amount: state.quantity },
            ])
          }
        ></SubmitBtn>
      </>
    </ThemeProvider>
  );
}

export default ProductPage;
