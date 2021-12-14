import QuantityInput from 'Atoms/Quantity/QuantityInput';
import SubmitBtn from 'Atoms/SubmitBtn/SubmitBtn';
import { useReducer, useContext } from 'react';
import { ReactComponent as Cart } from 'assets/img/icon-cart.svg';
import styled from 'styled-components';
import { CartContext } from 'ProductPage';

const StyledBtn = styled.button`
  width: 100%;
  height: 57px;
  background-color: ${({ theme }) => theme.color.orange};
  color: ${({ theme }) => theme.color.paleOrange};
  border-radius: ${({ theme }) => theme.borderRadius.s};
  outline: none;
  border: none;
  font-weight: 700;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin-right: 10px;

    path {
      fill: white;
    }
  }
`;

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
  const { setCartArray } = useContext(CartContext);
  return (
    <>
      <QuantityInput dispatch={dispatch} formState={formState} />
      {/* <SubmitBtn type="AddToCart" /> */}
      <StyledBtn
        onClick={() =>
          setCartArray([{ title: 'aa', amount: formState.quantity }])
        }
      >
        <Cart />
        1234
      </StyledBtn>
    </>
  );
};
export default AddToCartForm;