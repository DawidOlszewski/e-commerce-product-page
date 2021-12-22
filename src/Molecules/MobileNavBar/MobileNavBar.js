import CartPopUp from 'Molecules/CartPopUp/CartPopUp';
import { useState, useContext } from 'react';
import {
  StyledHeader,
  StyledBurger,
  Cart,
  AvatarBtn,
  Logo,
} from 'Molecules/MobileNavBar/MobileNavBar.style';
import { CartContext, OpenMenuContext } from 'ProductPage';

const MobileNavBar = ({ isBig }) => {
  const { cartItems } = useContext(CartContext);
  const [openCart, setOpenCart] = useState(false);
  const { openMenu, setOpenMenu } = useContext(OpenMenuContext);
  return (
    <>
      <StyledHeader isBig={isBig}>
        {isBig ? null : (
          <StyledBurger
            open={openMenu}
            onClick={() => setOpenMenu((open) => !open)}
          >
            <div />
            <div />
            <div />
          </StyledBurger>
        )}

        <Logo isBig={isBig} />

        {/* {isBig ? (
          <nav>
            <p>Collection</p>
            <p>Collection</p>
            <p>Collection</p>
            <p>Collection</p>
          </nav>
        ) : null} */}

        <Cart
          isBig={isBig}
          openCart={openCart}
          amount={cartItems[0].amount}
          onClick={() => setOpenCart((open) => !open)}
        />
        <CartPopUp openCart={openCart} cartItems={cartItems} />

        {/* <AvatarBtn src={avatarPath} alt="avatar" /> */}
        <AvatarBtn isBig={isBig} />
      </StyledHeader>
    </>
  );
};

export default MobileNavBar;
