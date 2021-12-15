import { ReactComponent as Logo } from 'assets/img/logo.svg';
import avatarPath from 'assets/img/image-avatar.png';
import CartPopUp from 'Molecules/CartPopUp/CartPopUp';
import { useState, useContext } from 'react';
import {
  StyledHeader,
  StyledBurger,
  Cart,
} from 'Molecules/MobileNavBar/MobileNavBar.style';
import { CartContext, OpenMenuContext } from 'ProductPage';

const MobileNavBar = () => {
  const { cartArray } = useContext(CartContext);
  const [openCart, setOpenCart] = useState({});
  const { openMenu, setOpenMenu } = useContext(OpenMenuContext);
  return (
    <>
      <StyledHeader>
        <StyledBurger
          open={openMenu}
          onClick={() => setOpenMenu((open) => !open)}
        >
          <div />
          <div />
          <div />
        </StyledBurger>
        <Logo></Logo>
        <Cart
          openCart={openCart}
          amount={cartArray.length}
          onClick={() => setOpenCart((open) => !open)}
        />
        <img src={avatarPath} alt="avatar" />
      </StyledHeader>
      <CartPopUp openCart={openCart} cartArray={cartArray} />
    </>
  );
};

export default MobileNavBar;
