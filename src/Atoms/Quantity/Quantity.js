import styled from 'styled-components';
import { useReducer } from 'react';

import { ReactComponent as PlusIcon } from 'assets/img/icon-plus.svg';
import { ReactComponent as MinusIcon } from 'assets/img/icon-minus.svg';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 57px;
  background-color: ${({ theme }) => theme.color.lightGray};
  color: ${({ theme }) => theme.color.black};
  border-radius: ${({ theme }) => theme.borderRadius.s};
  outline: none;
  border: none;
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 15px;
  overflow: hidden;

  button {
    width: 50px;
    height: 100%;
    border: none;
  }
`;

// const initialState = {
//   quantity: 0,
//   negError: false,
// };

// function reducer(state, action) {
//   let newState = { ...initialState };

//   switch (action.type) {
//     case 'increment':
//       newState.quantity = state.quantity + 1;
//       return newState;
//     case 'decrement':
//       newState.quantity = state.quantity - 1;
//       if (newState.quantity < 0) {
//         newState.negError = true;
//         newState.quantity = 0;
//       }
//       return newState;
//     default:
//       throw new Error();
//   }
// }

const Quantity = ({ dispatch, quantity, negError }) => {
  // const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Container>
      <button onClick={() => dispatch({ type: 'decrement' })}>
        <MinusIcon />
      </button>
      <h2>{quantity}</h2>
      <button onClick={() => dispatch({ type: 'increment' })}>
        <PlusIcon />
      </button>
      {negError ? <h3>Error</h3> : ''}
    </Container>
  );
};
export default Quantity;
