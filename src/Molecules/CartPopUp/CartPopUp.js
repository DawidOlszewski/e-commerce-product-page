import styled from 'styled-components';
import SubmitBtn from 'Atoms/SubmitBtn/SubmitBtn';
import theme from 'theme';

const Container = styled.div`
  ${({ openCart }) => (openCart ? '' : 'display:none;')}
  top: 75px;
  left: 20px;
  right: 20px;
  position: absolute;
  min-height: 130px;
  border-radius: ${({ theme }) => theme.borderRadius.s};
  background-color: ${({ theme }) => theme.color.white};
  z-index: ${({ theme }) => theme.zindex.cartPopUp};

  div {
    padding: 20px;
  }

  h2 {
    position: relative;
    display: flex;
    width: 100%;
    height: 67px;
    padding-left: 20px;
    align-items: center;
    font-size: 15px;
    font-weight: bold;

    &:after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: ${({ theme }) => theme.color.lightGray};
      height: 1px;
    }
  }

  ul {
    list-style: none;
  }

  li {
    margin-top: 20px;
    &:first-of-type {
      margin-top: 0;
    }
    &:last-of-type {
      margin-bottom: 20px;
    }
  }
`;

const CartPopUp = ({ cartArray, openCart }) => {
  return (
    <Container openCart={openCart}>
      <h2>Cart</h2>
      <div>
        <ul>
          {cartArray.map(({ title, amount, cost }, index) => {
            return (
              <li>
                {title} , {amount}
              </li>
            );
            // return (
            //   <li>
            //     <img src="img" />
            //     <div>
            //       <p>{title}</p>
            //       <p>
            //         ${cost} x {amount} <span>${cost * amount}</span>
            //       </p>
            //     </div>
            //   </li>
            // );
          })}
        </ul>
        <SubmitBtn type="Checkout" />
      </div>
    </Container>
  );
};

export default CartPopUp;
