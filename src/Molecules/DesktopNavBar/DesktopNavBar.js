import styled from 'styled-components';
import { ReactComponent as Logo } from 'assets/img/logo.svg';
import { ReactComponent as Cart } from 'assets/img/icon-cart.svg';
import avatarPath from 'assets/img/image-avatar.png';

const Wrapper = styled.header`
  width: 100%;
  height: 100px;
  position: relative;

  &::after {
    content: '';

    position: absolute;
    bottom: 0;
    background-color: lightgray;
    width: 100%;
    height: 1px;
  }

  & nav {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 800px) {
    }
  }
`;

const Link = styled.button`
  display: block;
  width: 115px;
  height: 25px;
  text-align: center;
  color: gray;
  font-weight: bold;
  line-height: 25px;
  border: none;
  background-color: transparent;
`;

const Avatar = styled.img`
  height: 50%;
  aspect-ratio: 1;
`;

const DesktopNavBar = () => {
  return (
    <Wrapper>
      <nav>
        {/* <Hamburger /> */}
        <Logo />
        <Link>Collection</Link>
        <Link>Collection</Link>
        <Link>Collection</Link>
        <Link>Collection</Link>
        <button>
          <Cart />
        </button>
        <Avatar src={avatarPath} alt="avatar" />
      </nav>
    </Wrapper>
  );
};

export default DesktopNavBar;
