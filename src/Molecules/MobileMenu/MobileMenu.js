import styled from 'styled-components';
import { OpenMenuContext } from 'ProductPage';
import { useContext } from 'react';

export const StyledMenu = styled.nav`
  display: flex;
  background-color: red;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.white};
  height: 100vh;
  width: 60vw;
  padding: 90px 10px 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zindex.menu};
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};

  @media (max-width: 360px) {
    width: 100%;
  }

  a {
    font-size: 16px;
    font-weight: bold;
    color: ${({ theme }) => theme.color.black};
    text-decoration: none;
    transition: color 0.3s linear;
    margin-bottom: 15px;

    @media (max-width: 360px) {
      font-size: 20px;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;

const MobileMenu = () => {
  const { openMenu } = useContext(OpenMenuContext);
  return (
    <StyledMenu open={openMenu}>
      <a href="/">About us</a>
      <a href="/">Pricing</a>
      <a href="/">Contact</a>
    </StyledMenu>
  );
};

export default MobileMenu;
