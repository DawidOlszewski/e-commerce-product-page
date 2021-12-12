import styled from 'styled-components';
import SubmitBtn from 'Atoms/SubmitBtn/SubmitBtn';

const Container = styled.div`
  ${({ openCart }) => (openCart ? '' : 'display:none;')}
  top: 75px;
  left: 20px;
  right: 20px;
  position: absolute;
  min-height: 100px;
  background-color: violet;
  z-index: 1000; //TODO: change the z-indexes
  padding: 10px;

  h2 {
    position: relative;
    display: flex;
    width: 100%;
    height: 67px;
    padding-left: 10px;
    align-items: center;

    &:after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: gray;
      height: 1px;
    }
  }

  ul {
    list-style: none;
    padding: 10px;
  }

  li {
    padding-bottom: 10px;
    &:last-of-type {
      padding-bottom: 0;
    }
  }
`;

const CartPopUp = ({ cartArray, openCart }) => {
  return (
    <Container openCart={openCart}>
      <h2>Cart: </h2>
      <ul>
        {cartArray.map(({ title, amount, cost }, index) => {
          return (
            <li>
              {title} , {amount}
            </li>
          );
        })}
      </ul>
      <SubmitBtn text="Chcekout" />
    </Container>
  );
};

export default CartPopUp;
