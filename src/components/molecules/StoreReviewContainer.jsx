import React from "react";
import styled from "styled-components";
import StarRatingComponent from "react-star-rating-component";
import StoreData from "../../data/store-data";

const StoreReviewContainer = () => {
  return (
    <TopProductReviews>
      <ProductReviewContainer>
        <StoreRating>{StoreData.totalStoreReviews} review</StoreRating>
        <StarContainer>
          <StarRatingComponent
            name="store rating"
            value={StoreData.storeReviewsStars}
            starColor={"#222222"}
            emptyStarColor={"#22222263"}
          />
        </StarContainer>
      </ProductReviewContainer>
      {StoreData.isStarSeller && (
        <RecentReviewShoutOut>
          Buyers are raving! Multiple people gave 5-star reviews to this shop in
          the past 7 days
        </RecentReviewShoutOut>
      )}
    </TopProductReviews>
  );
};

export default StoreReviewContainer;

const StoreRating = styled.div`
  font-size: 32px;
  font-weight: 300;
  margin-right: 10px;
`;
const TopProductReviews = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  height: 90px;
  margin-top: 30px;
`;
const ProductReviewContainer = styled.div`
  display: flex;
`;
const StarContainer = styled.div`
  display: flex;
  align-items: center;
`;

const RecentReviewShoutOut = styled.div``;
