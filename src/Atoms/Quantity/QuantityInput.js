import styled from 'styled-components';
import { useReducer } from 'react';

import plusIcon from 'assets/img/icon-plus.svg';
import minusIcon from 'assets/img/icon-minus.svg';

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
    position: relative;
    cursor: pointer;
    width: 50px;
    height: 100%;
    border: none;
    &:nth-of-type(1) {
      mask: url(${minusIcon}) no-repeat 50% 50%;
    }

    &:nth-of-type(2) {
      mask: url(${plusIcon}) no-repeat 50% 50%;
    }
  }

  button::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.color.orange};
    transition: background-color 0.1s ease-in-out;
  }

  button:hover::before {
    background-color: ${({ theme }) => theme.color.lightOrange};
  }
`;

const QuantityInput = ({ dispatch, formState: { quantity, isError } }) => {
  return (
    <Container>
      <button onClick={() => dispatch({ type: 'decrement' })} />
      <h2>{quantity}</h2>
      <button onClick={() => dispatch({ type: 'increment' })} />
      {isError ? <h3>Error</h3> : ''}
    </Container>
  );
};
export default QuantityInput;
