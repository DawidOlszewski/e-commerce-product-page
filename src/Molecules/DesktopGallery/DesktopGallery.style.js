import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  column-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas: 'big-img big-img big-img big-img' 'img0 img1 img2 img3';

  > img {
    width: 100%;
  }
`;

export const BigImg = styled.img`
  margin-bottom: 20px;
  grid-area: big-img;
  border-radius: ${(props) => props.theme.borderRadius.m};
`;
