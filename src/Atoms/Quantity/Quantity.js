import styled from 'styled-components';
import { useReducer } from 'react';

const Container = styled.div`
  background-color: red;
  display: flex;
  width: 100px;
  height: 40px;
  justify-content: space-between;
  align-items: center;
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
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <h2>{quantity}</h2>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      {negError ? <h3>Error</h3> : ''}
    </Container>
  );
};
export default Quantity;
