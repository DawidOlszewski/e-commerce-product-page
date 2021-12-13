import styled from 'styled-components';

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
`;

const SubmitBtn = ({ src, alt, icon, text, ...props }) => {
  return (
    <StyledBtn {...props}>
      <img src={icon} alt={props.alt} />
      {text}
    </StyledBtn>
  );
};

export default SubmitBtn;
