import QuantityInput from 'Atoms/Quantity/QuantityInput';
import SubmitBtn from 'Atoms/SubmitBtn/SubmitBtn';
import { useReducer, useContext } from 'react';
import { ReactComponent as Cart } from 'assets/img/icon-cart.svg';
import styled from 'styled-components';
import { CartContext } from 'ProductPage';

const initialState = {
  quantity: 0,
  isError: false,
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
        newState.isError = true;
        newState.quantity = 0;
      }
      return newState;
    default:
      throw new Error();
  }
}

const AddToCartForm = () => {
  const [formState, dispatch] = useReducer(reducer, { ...initialState });
  const { addCartItem } = useContext(CartContext);
  return (
    <>
      <QuantityInput dispatch={dispatch} formState={formState} />
      <SubmitBtn
        onClick={() => {
          console.log(formState.quantity);
          addCartItem('Fall Limited Edition Sneakers', formState.quantity);
        }}
      >
        <Cart />
        Add To Cart
      </SubmitBtn>
    </>
  );
};
export default AddToCartForm;
