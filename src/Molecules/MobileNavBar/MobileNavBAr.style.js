import styled from 'styled-components';
import cartPath from 'assets/img/icon-cart.svg';

export const StyledBurger = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 19.5px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-right: 15px;
  z-index: ${({ theme }) => theme.zindex.menuButton};

  &:focus {
    outline: none;
  }

  div {
    width: 19.5px;
    height: 2.5px;
    background: ${({ theme }) => theme.color.gray};
    border-radius: 0px;
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

export const Cart = styled.button`
  position: relative;
  width: 25px;
  border: none;
  height: 25px;
  margin-right: 10px;
  background-color: transparent;
  cursor: pointer;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    mask: url(${cartPath}) no-repeat 50% 50%;
    background-color: ${({ theme, openCart }) =>
      openCart ? theme.color.gray : theme.color.black};
    background-size: 100% 100%;
    transition: background-color 0.1s ease-in-out;
  }

  &::after {
    ${({ amount }) => (amount ? `content: '${amount}';` : '')}

    position: absolute;
    background-color: ${({ theme }) => theme.color.orange};
    width: 20px;
    border-radius: 5px;
    height: 12px;
    top: 0;
    right: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 8px;
    color: white;
    font-weight: bold;
    transform: translateX(50%) translateY(-10%);
  }
`;

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.color.white};
  padding: 23.5px;

  width: 100%;
  height: 67px;
  display: flex;
  align-items: center;

  svg,
  svg path {
    height: 100%;
  }

  img {
    height: 30px;
  }

  svg {
    margin-right: auto;
  }
`;
