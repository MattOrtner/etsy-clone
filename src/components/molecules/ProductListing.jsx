import React from "react";
import styled from "styled-components";
import StarRatingComponent from "react-star-rating-component";

const ProductListing = ({ productName, price, starRating, numOfReviews }) => {
  return (
    <ProductCardContainer>
      <ImagePlaceHolder />
      <div style={{ lineHeight: "24px", padding: "0 0 30px 5px" }}>
        <div style={{ fontSize: 18, paddingBottom: 4 }}>{productName}</div>
        <ReviewContainer>
          <StarRatingComponent
            name="star-rating"
            value={starRating}
            editing={false}
            starColor="black"
            emptyStarColor="grey"
          />
          <div>({numOfReviews})</div>
        </ReviewContainer>
        <div>Star Seller</div>
        <div style={{ fontSize: 18 }}>${price}.00</div>
      </div>
      <div>More like this</div>
    </ProductCardContainer>
  );
};

export default ProductListing;
const ProductCardContainer = styled.div`
  height: 500px;
  width: 100%;
  align-self: stretch;
  padding: 9px;
`;
const ImagePlaceHolder = styled.div`
  height: 50%;
  width: 100%;
  background-color: lightblue;
`;
const ReviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
