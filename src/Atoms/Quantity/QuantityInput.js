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

const QuantityInput = ({ dispatch, formState: { quantity, isError } }) => {
  return (
    <Container>
      <button onClick={() => dispatch({ type: 'decrement' })}>
        <MinusIcon />
      </button>
      <h2>{quantity}</h2>
      <button onClick={() => dispatch({ type: 'increment' })}>
        <PlusIcon />
      </button>
      {isError ? <h3>Error</h3> : ''}
    </Container>
  );
};
export default QuantityInput;
