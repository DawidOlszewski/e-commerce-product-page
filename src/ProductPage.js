import GlobalStyle from 'GlobalStyle';
import React, { useState, useReducer } from 'react';
import theme from 'theme.js';
import styled, { ThemeProvider } from 'styled-components';
import DesktopGallery from 'Molecules/DesktopGallery/DesktopGallery';
import Price from 'Atoms/Price/Price';
import DesktopNavBar from 'Molecules/DesktopNavBar/DesktopNavBar';
import MobileNavBar from 'Molecules/MobileNavBar/MobileNavBar';
import MobileMenu from 'Molecules/MobileMenu/MobileMenu';
import MobileGallery from 'Molecules/MobileGallery/MobileGallery';
import useWindowDimensions from 'Helpers/WindowDimentionsHelper';
import ProductInfo from 'Atoms/ProductInfo/ProductInfo';
import iconCartPath from 'assets/img/icon-cart.svg';
import AddToCartForm from 'Molecules/AddToCartForm/AddToCartForm';
import useCart from 'Helpers/CartHelper';

export const CartContext = React.createContext({
  cartItems: [],
  deleteCartItem: () => {},
  addCartItem: () => {},
});

export const OpenMenuContext = React.createContext({
  openMenu: false,
  setOpenMenu: () => {},
});

export const ProductContext = React.createContext({
  company: '',
  title: '',
  description: '',
  prevPrice: '',
  price: '',
});

const MobileContainer = styled.div`
  padding: 20px;
`;

const DesktopContainer = styled.div`
  margin-left: 60px;
`;
const Content = styled.div`
  height: calc(100vh - 120px);
  padding: 0 60px;
  display: grid;
  align-items: center;
  grid-template-columns: min(40vw, 400px) 1fr;
  grid-template-areas: '. .';
`;

function ProductPage({
  product: { company, title, description, prevPrice, price },
}) {
  const { width, height } = useWindowDimensions();
  const [openMenu, setOpenMenu] = useState(false);
  const [addCartItem, deleteCartItem, cartItems] = useCart();

  return (
    <ThemeProvider theme={theme}>
      <>
        <ProductContext.Provider
          value={{ company, title, description, prevPrice, price }}
        >
          <OpenMenuContext.Provider value={{ openMenu, setOpenMenu }}>
            <CartContext.Provider
              value={{ addCartItem, deleteCartItem, cartItems }}
            >
              <GlobalStyle />
              {width > 800 ? (
                <>
                  <MobileNavBar isBig />
                  <Content>
                    <DesktopGallery />
                    <DesktopContainer>
                      <ProductInfo />
                      <Price />
                      <AddToCartForm />
                    </DesktopContainer>
                  </Content>
                </>
              ) : (
                <>
                  <MobileNavBar />
                  <MobileMenu />
                  <MobileGallery />
                  <MobileContainer>
                    <ProductInfo />
                    <Price />
                    <AddToCartForm />
                  </MobileContainer>
                </>
              )}
            </CartContext.Provider>
          </OpenMenuContext.Provider>
        </ProductContext.Provider>
      </>
    </ThemeProvider>
  );
}

export default ProductPage;
