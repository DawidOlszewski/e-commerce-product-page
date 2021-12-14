import styled from 'styled-components';
import cartPath from 'assets/img/icon-cart.svg';

export const StyledBurger = styled.button`
  position: relative;
  //   top: 5%;
  //   left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: ${({ theme }) => theme.zindex.menuButton};

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? '#0D0C1D' : '#EFFFFA')};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export const CounterCart = styled.button`
  position: relative;
  aspect-ratio: 1;
  border: none;
  height: 100%;
  background: url(${cartPath}) no-repeat;
  background-size: cover;

  &::after {
    content: '${({ amount }) => amount}';
    position: absolute;
    background-color: pink;
    width: 20px;
    border-radius: 5px;
    height: 10px;
    top: 5px;
    right: 0;
  }
`;

export const StyledHeader = styled.header`
  background-color: red;
  //   position: absolute;
  padding: 15px;
  //   top: 0;
  //   left: 0;
  width: 100%;
  height: 67px;
  display: flex;

  :first-child {
    background-color: blue;
  }
`;
