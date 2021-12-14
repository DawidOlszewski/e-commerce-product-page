import styled from 'styled-components';
import { ReactComponent as Cart } from 'assets/img/icon-cart.svg';

const StyledBtn = styled.button`
  width: 100%;
  height: 57px;
  background-color: ${({ theme }) => theme.color.orange};
  color: ${({ theme }) => theme.color.paleOrange};
  border-radius: ${({ theme }) => theme.borderRadius.s};
  outline: none;
  border: none;
  font-weight: 700;
  font-size: 16px;
  display: ;
`;

const SubmitBtn = ({ src, alt, icon, text, type }) => {
  switch (type) {
    case 'AddToCart':
      return (
        <StyledBtn>
          <Cart />
          Add to cart
        </StyledBtn>
      );
    case 'Checkout': {
      return <StyledBtn>Checkout</StyledBtn>;
    }
    default:
      throw new Error();
  }
};

export default SubmitBtn;
