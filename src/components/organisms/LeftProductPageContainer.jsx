import styled from "styled-components";
import "react-image-gallery/styles/css/image-gallery.css";

import ProductReviewsContainer from "../molecules/ProductReviewsContainer";
import ImageGallery from "react-image-gallery";

const LeftProductPageContainer = ({ productName, images }) => {
  return (
    <LeftContainer>
      {images && (
        <ImageGallery
          items={images}
          thumbnailPosition="left"
          useBrowserFullscreen={false}
          showPlayButton={false}
        />
      )}
      <ProductReviewsContainer productName={productName} />
    </LeftContainer>
  );
};

export default LeftProductPageContainer;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 76%;
  padding: 0px 25px;
  z-index: 0;
`;
