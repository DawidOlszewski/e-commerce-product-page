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
      font-size: 10px;
      padding: 5px 10px;
      margin-left: 20px;
      border-radius: 10px;
      background-color: orange;
    }
  }
  h3 {
    text-decoration: line-through;
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
