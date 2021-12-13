import styled from 'styled-components';

const Reduction = styled.h2``;
const Container = styled.div`
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

const Price = (props) => {
  return (
    <Container>
      <div>
        <h2>${props.Price}.00</h2>
        <Reduction>{(props.Price / props.prevPrice) * 100}%</Reduction>
      </div>
      <h3>${props.prevPrice}.00</h3>
    </Container>
  );
};

export default Price;
