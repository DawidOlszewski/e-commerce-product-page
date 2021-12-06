import styled from 'styled-components';
import iconCart from 'assets/img/icon-cart.svg';

const StyledBtn = styled.button`
  background-color: blue;
  width: 100px;
  height: 40px;
`;

const SubmitBtn = ({ src, alt, ...props }) => {
  return (
    <StyledBtn {...props}>
      <img src={iconCart} />
      123
    </StyledBtn>
  );
};

export default SubmitBtn;
