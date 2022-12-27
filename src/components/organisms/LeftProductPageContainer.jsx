import React from "react";
import styled from "styled-components";
import "react-image-gallery/styles/css/image-gallery.css";

import ProductReviewsContainer from "../molecules/ProductReviewsContainer";
import ImageGallery from "react-image-gallery";
const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];
const LeftProductPageContainer = () => {
  return (
    <LeftContainer>
      <ImageGallery
        items={images}
        thumbnailPosition="left"
        useBrowserFullscreen={false}
        showPlayButton={false}
      />

      <ProductReviewsContainer />
    </LeftContainer>
  );
};

export default LeftProductPageContainer;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 76%;
  padding-left: 40px;
`;
