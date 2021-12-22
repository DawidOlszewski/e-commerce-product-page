import styled from 'styled-components';

const ThumbnailButton = styled.button`
  border: none;
  border-radius: ${(props) => props.theme.borderRadius.s};
  grid-area: ${(props) => props.gridArea};
  aspect-ratio: 1;
  overflow: hidden;
  padding: 5px;
  background: url(${(props) => props.src});
  background-size: cover;
  position: relative;
  cursor: pointer;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: inherit;
    ${(props) => {
      if (!props.active) return '';
      return 'border: 3px orange solid;background-color: hsl(1,20%,0%,30%);';
    }}// TODO: color
  }
  &:hover::before {
    background-color: hsl(1, 20%, 0%, 30%);
  }
`;

const ImgButton = (props) => {
  return (
    <ThumbnailButton
      active={props.active}
      gridArea={props.gridArea}
      onClick={props.onClick}
      src={props.src}
    >
      {/* <img src={props.src} alt="thumbnail img"></img>    */}
    </ThumbnailButton>
  );
};

export default ImgButton;
