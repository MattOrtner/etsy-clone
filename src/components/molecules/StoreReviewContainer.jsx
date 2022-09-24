import React from "react";
import styled from "styled-components";
import starIcon from "../../assets/star.svg";
import starOutlineIcon from "../../assets/star-outline.svg";

import StoreData from "../../data/store-data";

const StoreReviewContainer = () => {
  return (
    <TopProductReviews>
      <ProductReviewContainer>
        <StoreRating>{StoreData.totalStoreReviews} review</StoreRating>
        <StarContainer>
          {StoreData.starRating &&
            StoreData.starRating.map(() => <StarIconLarge src={starIcon} />)}
          {StoreData.starRating.length < 5 &&
            Array(5 - StoreData.starRating.length)
              .fill("")
              .map(() => <StarOutlineLarge src={starOutlineIcon} />)}
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
const StarOutlineLarge = styled.img`
  padding-right: 4px;
  width: 27px;
  height: 27px;
`;
const StarIconLarge = styled.img`
  padding-right: 4px;
  width: 30px;
  height: 30px;
`;

const RecentReviewShoutOut = styled.div`
  ${"" /* just some spacing */}
  ${"" /* just some spacing */}
  ${"" /* just some spacing */}
`;
