import styled from 'styled-components';
import { useReducer } from 'react';

import image0 from 'assets/img/image-product-1.jpg';
import image1 from 'assets/img/image-product-2.jpg';
import image2 from 'assets/img/image-product-3.jpg';
import image3 from 'assets/img/image-product-4.jpg';
import { ReactComponent as NextIcon } from 'assets/img/icon-next.svg';
import { ReactComponent as PreviousIcon } from 'assets/img/icon-previous.svg';

const images = [image0, image1, image2, image3];

const Container = styled.div`
  position: relative;
  background-color: green;

  width: 100%;

  button {
    position: absolute;
    height: 50px;
    width: 50px;
    top: 50%;
    transform: translateY(-50%);

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    outline: none;
    border: none;
    cursor: pointer;
    path {
      transition: stroke 0.2s;
    }

    &:hover {
      & path {
        stroke: ${({ theme }) => theme.color.orange};
      }
    }

    :nth-child(1) {
      padding-right: 4px;
      left: 20px;
    }
    :nth-child(2) {
      padding-left: 4px;
      right: 20px;
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
      <button onClick={() => dispatch({ type: 'decrement' })}>
        <PreviousIcon />
      </button>
      <button onClick={() => dispatch({ type: 'increment' })}>
        <NextIcon />
      </button>
      <img src={images[state.index]} alt="imaege" />
    </Container>
  );
};
export default Quantity;
