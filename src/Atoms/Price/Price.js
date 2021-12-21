import { ProductContext } from 'ProductPage';
import styled from 'styled-components';
import { useContext } from 'react';

const Reduction = styled.h2``;
const Container = styled.div`
  display: flex;
  flex-flow: nowrap row;
  justify-content: space-between;
  padding: 30px 0;

  div {
    display: flex;
    flex-flow: nowrap row;
    align-items: center;

    ${Reduction} {
      font-size: 13px;
      padding: 3px 7px;
      margin-left: 20px;
      border-radius: ${({ theme }) => theme.borderRadius.xs};
      background-color: ${({ theme }) => theme.color.paleOrange};
      color: ${({ theme }) => theme.color.orange};
    }
  }
  h3 {
    text-decoration: line-through;
    color: gray;
  }
`;

const Price = () => {
  const { price, prevPrice } = useContext(ProductContext);
  return (
    <Container>
      <div>
        <h2>${price}.00</h2>
        <Reduction>{(price / prevPrice) * 100}%</Reduction>
      </div>
      <h3>${prevPrice}.00</h3>
    </Container>
  );
};

export default Price;
