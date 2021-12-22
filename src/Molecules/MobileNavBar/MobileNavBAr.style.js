import styled from 'styled-components';
import cartPath from 'assets/img/icon-cart.svg';
import avatarPath from 'assets/img/image-avatar.png';
import logoPath from 'assets/img/logo.svg';

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
  width: 30px;
  border: none;
  height: 30px;
  margin-right: ${({ isBig }) => (isBig ? '17px' : '12px')};

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
    transform: ${({ isBig }) => (isBig ? 'scale(1.3)' : null)};
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
    transform: translateX(50%) translateY(-10%)
      ${({ isBig }) => (isBig ? 'scale(1.3)' : null)};
  }
`;

export const StyledHeader = styled.header`
  background-color: ${({ theme, isBig }) =>
    isBig ? 'red' : theme.color.white};

  padding: 0 ${({ isBig }) => (isBig ? '40px' : '23.5px')};

  width: 100%;
  height: 67px;
  display: flex;
  align-items: center;

  svg {
    margin-right: auto;
  }
`;

export const AvatarBtn = styled.div`
  height: ${({ isBig }) => (isBig ? '40px' : '30px')};
  width: ${({ isBig }) => {
    return isBig ? '40px' : '30px';
  }};
  cursor: pointer;
  position: relative;
  background: url(${avatarPath});
  background-size: cover;

  &:before {
    content: '';
    position: absolute;
    border-radius: 50%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: border 0.1s;
  }
  &:hover::before {
    border: 2.3px ${({ theme }) => theme.color.orange} solid;
    transform: scale(1.1);
  }
`;

export const Logo = styled.div`
  position: relative;
  border: none;
  height: 30px;
  width: 140px;
  margin-right: auto;
  background-color: transparent;
  cursor: pointer;
  ${({ isBig }) => (isBig ? 'width:180px;' : null)}

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    mask: url(${logoPath}) no-repeat 50% 50%;
    background-color: ${({ theme }) => theme.color.black};
    background-size: 100% 100%;
    ${({ isBig }) => (isBig ? 'transform: scale(1.3);' : null)}
  }
`;
