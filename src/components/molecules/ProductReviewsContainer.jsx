import React from "react";
import styled from "styled-components";
import CustomerReviewsData from "../../data/customer-review-dummy-data";
import StoreReviewContainer from "../molecules/StoreReviewContainer";
import CustomerReview from "./CustomerReview";

const ProductReviewsContainer = () => {
  return (
    <Container>
      <StoreReviewContainer />
      <BottomProductReviews>
        <ReviewsNavContainer>
          <ReviewNavTabs>Reviews for this item</ReviewNavTabs>
          <ReviewNavTabs>Reviews for this shop</ReviewNavTabs>
        </ReviewsNavContainer>
        <ReviewSortContainer>
          <ReviewSortButton>Sort by: Recommended</ReviewSortButton>
        </ReviewSortContainer>
        <CustomerReviewsContainer>
          {CustomerReviewsData &&
            CustomerReviewsData.length > 4 &&
            CustomerReviewsData.slice(0, 4).map((customer) => (
              <CustomerReview customer={customer} key={customer.userId} />
            ))}
          {CustomerReviewsData.length > 4 && (
            <PaginationNavigationContainer>
              <PaginationNavigation>
                <PaginationButton>{"<-"}</PaginationButton>
                <PaginationButton>1</PaginationButton>
                <PaginationButton
                  style={{
                    height: 30,
                    width: 30,
                    backgroundColor: "white",
                    border: "none",
                    textAlign: "end",
                  }}
                >
                  ...
                </PaginationButton>
                <PaginationButton>2</PaginationButton>
                <PaginationButton>{"->"}</PaginationButton>
              </PaginationNavigation>
            </PaginationNavigationContainer>
          )}
        </CustomerReviewsContainer>
      </BottomProductReviews>
    </Container>
  );
};

export default ProductReviewsContainer;

const Container = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
`;

const PaginationNavigationContainer = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  padding: 50px 0px;
`;
const PaginationNavigation = styled.div`
  grid-column: 1 / span 1;
  display: flex;
  align-items: center;
`;
const PaginationButton = styled.div`
  margin-right: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  background-color: rgba(34, 34, 34, 0.075);
`;

const ReviewSortContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 64px;
`;
const ReviewSortButton = styled.div`
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 35%;
  height: 100%;
  border-radius: 24px;
  &:hover {
    transition: all 300ms ease-in-out;
    background-color: lightgrey;
  }
`;

const CustomerReviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const BottomProductReviews = styled.div`
  margin-top: 20px;
`;
const ReviewNavTabs = styled.h2`
  margin-right: 15px;
  font-weight: 300;
`;
const ReviewsNavContainer = styled.div`
  display: flex;
`;
