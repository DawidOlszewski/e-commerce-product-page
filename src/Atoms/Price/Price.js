import styled from 'styled-components';

const Container = styled.div`
  div {
    display: flex;
    flex-flow: nowrap row;
    align-items: center;

    h3 {
      border-radius: 10px;
      background-color: orange;
    }
  }
  h3 {
  }
`;

const Price = (props) => {
  return (
    <Container>
      <div>
        <h2>${props.Price}</h2>
        {console.log(typeof props.Price)}
        <h3>{(props.Price / props.prevPrice) * 100}%</h3>
      </div>
      <h3>${props.prevPrice}</h3>
    </Container>
  );
};

export default Price;
