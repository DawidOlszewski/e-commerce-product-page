import reactDom from 'react-dom';
import styled from 'styled-components';
import ImgButton from 'Atoms/ImgButton/ImgButton';
import { BigPortalImg } from 'Molecules/DesktopGallery/DesktopGallery.style';
import { ReactComponent as NextIcon } from 'assets/img/icon-next.svg';
import { ReactComponent as PreviousIcon } from 'assets/img/icon-previous.svg';

const Container = styled.div`
  background-color: hsla(0, 100%, 0%, 70%);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ThumbnailContainer = styled.div`
  display: grid;
  grid-template-columns: 30px 76px 30px 76px 30px 76px 30px 76px 30px;
  grid-template-areas: '. img0 . img1 . img2 . img3 .';
  grid-area: thumbnail;
`;

const Content = styled.div`
  display: grid;
  justify-items: center;
  grid-template-rows: 75vh 10vh;
  grid-template-areas: 'big-img' 'thumbnail';
`;

const GalleryModal = ({
  closePortal,
  images,
  imageThumbs,
  setfocused,
  focused,
}) => {
  const handleClosePortal = (e) => {
    if (e.target === e.currentTarget) {
      closePortal();
    }
  };

  const handlePreviousImg = () => {
    setfocused((foc) => {
      if (foc - 1 >= 0) return foc - 1;
      return 3;
    });
  };

  const handleNextImg = () => {
    setfocused((foc) => {
      if (foc + 1 < 4) return foc + 1;
      return 0;
    });
  };

  return reactDom.createPortal(
    <Container onClick={handleClosePortal}>
      <Content>
        <BigPortalImg src={images[focused]}>
          <button onClick={handlePreviousImg}>
            <PreviousIcon />
          </button>
          <button onClick={handleNextImg}>
            <NextIcon />
          </button>
        </BigPortalImg>
        <ThumbnailContainer>
          {imageThumbs.map((img, index) => (
            <ImgButton
              active={index === focused}
              onClick={() => {
                setfocused(index);
              }}
              src={img}
              gridArea={`img${index}`}
            />
          ))}
        </ThumbnailContainer>
      </Content>
    </Container>,
    document.getElementById('portal')
  );
};

export default GalleryModal;
