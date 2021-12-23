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

export const BigPortalImg = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  margin-bottom: 30px;
  grid-area: big-img;
  background: url(${({ src }) => src});
  background-size: 100% 100%;
  border-radius: ${(props) => props.theme.borderRadius.m};

  button {
    position: absolute;
    height: 50px;
    width: 50px;
    top: 50%;
    transform: translateY(-50%);

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    outline: none;
    border: none;
    cursor: pointer;
    path {
      transition: stroke 0.2s;
    }

    &:hover {
      & path {
        stroke: ${({ theme }) => theme.color.orange};
      }
    }

    :nth-child(1) {
      padding-right: 4px;
      transform: translate(-50%);
      left: 0px;
    }
    :nth-child(2) {
      transform: translate(50%);

      padding-left: 4px;
      right: 0px;
    }
  }
`;
