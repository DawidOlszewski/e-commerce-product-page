import styled from 'styled-components';
import { useReducer } from 'react';

import image0 from 'assets/img/image-product-1.jpg';
import image1 from 'assets/img/image-product-2.jpg';
import image2 from 'assets/img/image-product-3.jpg';
import image3 from 'assets/img/image-product-4.jpg';

const images = [image0, image1, image2, image3];

const Container = styled.div`
  position: relative;
  background-color: green;

  width: 100%;

  button {
    position: absolute;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    outline: none;
    border: none;
    :nth-child(1) {
      left: 0;
    }
    :nth-child(2) {
      right: 0;
    }
  }

  img {
    display: block;
    width: 100%;
  }
`;

const initialState = {
  index: 0,
  imagesAmount: 4,
};

function reducer(state, action) {
  let newState = { ...initialState };
  switch (action.type) {
    case 'increment':
      newState.index = state.index + 1;
      if (newState.index === state.imagesAmount) newState.index = 0;

      return newState;
    case 'decrement':
      newState.index = state.index - 1;
      console.log(newState);

      if (newState.index === -1) newState.index = newState.imagesAmount - 1;

      return newState;
    default:
      throw new Error();
  }
}

const Quantity = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Container>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <img src={images[state.index]} alt="imaege" />
    </Container>
  );
};
export default Quantity;
