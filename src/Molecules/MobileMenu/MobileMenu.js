import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  background-color: red;
  flex-direction: column;
  justify-content: center;
  //   background: ${({ theme }) => theme.primaryLight};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};

  @media (max-width: 300px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 300px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;

const MobileMenu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">About us</a>
      <a href="/">Pricing</a>
      <a href="/">Contact</a>
    </StyledMenu>
  );
};

export default MobileMenu;
