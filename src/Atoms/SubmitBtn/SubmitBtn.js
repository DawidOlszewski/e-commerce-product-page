import styled from 'styled-components';

const StyledBtn = styled.button`
  background-color: blue;
  width: 90%;
  height: 57px;
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
