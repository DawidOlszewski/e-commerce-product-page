import styled from 'styled-components';

const Company = styled.h2``;
const Title = styled.h1``;
const Details = styled.p``;

const Description = (props) => (
  <div>
    <Company>{props.Company}</Company>
    <Title>{props.Title}</Title>
    <Details>{props.Details}</Details>
  </div>
);

export default Description;
