import { ProductContext } from 'ProductPage';
import styled from 'styled-components';
import { useContext } from 'react';

const Company = styled.p`
  color: ${({ theme }) => theme.color.orange};
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
`;
const Title = styled.h1``;
const Description = styled.p`
  color: ${({ theme }) => theme.color.gray};
  font-size: 15px;
  line-height: 25px;
`;

const Container = styled.div``;

const ProductInfo = () => {
  const { company, title, description } = useContext(ProductContext);
  return (
    <Container>
      <Company>{company}</Company>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};

export default ProductInfo;
