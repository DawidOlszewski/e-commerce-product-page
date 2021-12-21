import styled from 'styled-components';
import SubmitBtn from 'Atoms/SubmitBtn/SubmitBtn';
import theme from 'theme';
import image0 from 'assets/img/image-product-1.jpg';
import deleteIcon from 'assets/img/icon-delete.svg';
import { useContext } from 'react/cjs/react.development';
import { CartContext } from 'ProductPage';

const Container = styled.div`
  ${({ openCart }) => (openCart ? '' : 'display:none;')}
  top: 75px;
  left: 20px;
  right: 20px;
  position: absolute;
  min-height: 130px;
  border-radius: ${({ theme }) => theme.borderRadius.s};
  background-color: ${({ theme }) => theme.color.white};
  z-index: ${({ theme }) => theme.zindex.cartPopUp};

  div {
    padding: 20px;
  }

  h2 {
    position: relative;
    display: flex;
    width: 100%;
    height: 67px;
    padding-left: 20px;
    align-items: center;
    font-size: 15px;
    font-weight: bold;

    &:after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: ${({ theme }) => theme.color.lightGray};
      height: 1px;
    }
  }

  ul {
    list-style: none;
  }

  li {
    margin-top: 20px;
    padding: 3px;
    color: gray;
    &:first-of-type {
      margin-top: 0;
    }
    &:last-of-type {
      margin-bottom: 20px;
    }
    height: 50px;

    & div {
      padding: 0 0 0 20px;
      display: flex;
      justify-content: space-between;
      flex-flow: column nowrap;

      & p:first-of-type {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        width: calc(100vw - 200px);
      }
    }

    display: flex;
    & img {
      border-radius: 4px;
    }

    & b {
      padding-left: 10px;
      color: black;
    }
  }
`;

const DeleteIcon = styled.button`
  margin: auto;
  position: relative;
  width: 25px;
  border: none;
  height: 25px;
  background-color: transparent;
  cursor: pointer;
  :hover::before {
    background-color: black;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    mask: url(${deleteIcon}) no-repeat 50% 50%;
    background-color: gray;
    background-size: 100% 100%;
    transition: background-color 0.1s ease-in-out;
  }
`;

const CartPopUp = ({ cartItems, openCart }) => {
  const { deleteCartItem } = useContext(CartContext);
  return (
    <Container openCart={openCart}>
      <h2>Cart</h2>
      <div>
        <ul>
          {cartItems.map((cartItem, index) => {
            return (
              <li>
                <img src={image0} alt="carts img" />
                <div>
                  <p>{cartItem.title}</p>
                  <p>
                    ${cartItem.cost} x {cartItem.amount}
                    <b>${cartItem.cost * cartItem.amount}</b>
                  </p>
                </div>
                <DeleteIcon onClick={() => deleteCartItem()} />
              </li>
            );
          })}
        </ul>
        <SubmitBtn type="Checkout" />
      </div>
    </Container>
  );
};

export default CartPopUp;
