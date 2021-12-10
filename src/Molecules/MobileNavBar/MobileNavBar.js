import styled from 'styled-components';
import { ReactComponent as Logo } from 'assets/img/logo.svg';
import cartPath from 'assets/img/icon-cart.svg';
import avatarPath from 'assets/img/image-avatar.png';

const StyledBurger = styled.button`
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
  z-index: 10;

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

const CounterCart = styled.button`
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

const StyledHeader = styled.header`
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

const MobileNavBar = ({ open, setOpen }) => {
  return (
    <StyledHeader>
      <StyledBurger open={open} onClick={() => setOpen((open) => !open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <Logo></Logo>
      <CounterCart amount="2" />
      <img src={avatarPath} alt="avatar" />
    </StyledHeader>
  );
};

export default MobileNavBar;
