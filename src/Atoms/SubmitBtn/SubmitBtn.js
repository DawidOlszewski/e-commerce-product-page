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
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    background-color: ${({ theme }) => theme.color.lightOrange};
  }
  svg {
    margin-right: 10px;

    path {
      fill: white;
    }
  }
`;

export default StyledBtn;
