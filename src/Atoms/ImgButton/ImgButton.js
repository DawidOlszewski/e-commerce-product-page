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
  ${(props) => {
    if (!props.active) return '';
    return 'border: 5px green solid';
  }}
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
