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
        <h2>${props.cost}</h2>
        <h3>{(props.cost / props.prevCost) * 100}%</h3>
      </div>
      <h3>${props.prevCost}</h3>
    </Container>
  );
};

export default Price;
