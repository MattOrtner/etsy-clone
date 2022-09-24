import React from "react";
import styled from "styled-components";

const ProductImagesPreview = () => {
  return (
    <ImagesPreview>
      <OtherImages>
        <MiniPeviewImage>p</MiniPeviewImage>
        <MiniPeviewImage>p</MiniPeviewImage>
        <MiniPeviewImage>p</MiniPeviewImage>
        <MiniPeviewImage>p</MiniPeviewImage>
      </OtherImages>
      <PrimaryImageContainer>
        <PrimaryImage>Image</PrimaryImage>
      </PrimaryImageContainer>
    </ImagesPreview>
  );
};

export default ProductImagesPreview;

const ImagesPreview = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 75%;
  width: 100%;
  background-color: antiquewhite;
`;
const OtherImages = styled.div`
  display: flex;
  flex-direction: column;
`;
const MiniPeviewImage = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  height: 60px;
  border-radius: 6px;
  width: 60px;
  margin: 0px 6px 6px 0px;
`;
const PrimaryImageContainer = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 6px;
  border: 2px solid black;
`;
const PrimaryImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;
