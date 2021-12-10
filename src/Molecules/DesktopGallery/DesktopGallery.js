import React, { useState } from 'react';
import ImgButton from 'Atoms/ImgButton/ImgButton';

import { Grid, BigImg } from './DesktopGallery.style';

import image1 from 'assets/img/image-product-1.jpg';
import image2 from 'assets/img/image-product-2.jpg';
import image3 from 'assets/img/image-product-3.jpg';
import image4 from 'assets/img/image-product-4.jpg';
import imageThum1 from 'assets/img/image-product-1-thumbnail.jpg';
import imageThum2 from 'assets/img/image-product-2-thumbnail.jpg';
import imageThum3 from 'assets/img/image-product-3-thumbnail.jpg';
import imageThum4 from 'assets/img/image-product-4-thumbnail.jpg';
const images = [image1, image2, image3, image4];
const imageThumbs = [imageThum1, imageThum2, imageThum3, imageThum4];

const DesktopGallery = (props) => {
  const [focused, setfocused] = useState(0);

  return (
    <Grid>
      <BigImg src={images[focused]} alt="big img" />

      {imageThumbs.map((img, index) => (
        <ImgButton
          active={index === focused}
          onClick={() => {
            setfocused(index);
          }}
          src={img}
          gridArea={`img${index}`}
        ></ImgButton>
      ))}
    </Grid>
  );
};

export default DesktopGallery;
