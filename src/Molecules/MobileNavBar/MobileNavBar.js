import { ReactComponent as Logo } from 'assets/img/logo.svg';
import CartPopUp from 'Molecules/CartPopUp/CartPopUp';
import { useState, useContext } from 'react';
import {
  StyledHeader,
  StyledBurger,
  Cart,
  AvatarBtn,
} from 'Molecules/MobileNavBar/MobileNavBar.style';
import { CartContext, OpenMenuContext } from 'ProductPage';

const MobileNavBar = () => {
  const { cartItems } = useContext(CartContext);
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
          amount={cartItems[0].amount}
          onClick={() => setOpenCart((open) => !open)}
        />
        {/* <AvatarBtn src={avatarPath} alt="avatar" /> */}
        <AvatarBtn />
      </StyledHeader>
      <CartPopUp openCart={openCart} cartItems={cartItems} />
    </>
  );
};

export default MobileNavBar;
