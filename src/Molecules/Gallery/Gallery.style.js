import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  width: 100%;
  gap: 5%;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas: 'big-img big-img big-img big-img' 'img0 img1 img2 img3';

  > img {
    width: 100%;
  }
`;

export const BigImg = styled.img`
  grid-area: big-img;
  border-radius: ${(props) => props.theme.borderRadius.m};
`;
