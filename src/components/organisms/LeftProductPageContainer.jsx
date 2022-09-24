import React from "react";
import styled from "styled-components";

import ProductReviewsContainer from "../molecules/ProductReviewsContainer";
import ProductImagesPreview from "../molecules/ProductImagesPreview";

const LeftProductPageContainer = () => {
  return (
    <LeftContainer>
      <ProductImagesPreview />
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
