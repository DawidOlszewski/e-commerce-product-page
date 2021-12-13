import styled from 'styled-components';

const Company = styled.p`
  color: ${({ theme }) => theme.color.orange};
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
`;
const Title = styled.h1``;
const Details = styled.p`
  color: ${({ theme }) => theme.color.gray};
  font-size: 15px;
  line-height: 25px;
`;

const Container = styled.div``;

const Description = (props) => (
  <Container>
    <Company>{props.Company}</Company>
    <Title>{props.Title}</Title>
    <Details>{props.Details}</Details>
  </Container>
);

export default Description;
