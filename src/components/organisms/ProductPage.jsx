import React from "react";
import styled from "styled-components";
import heartIcon from "../../assets/heart-outline.svg";
import checkIcon from "../../assets/check.svg";
import starIcon from "../../assets/star.svg";
import starOutlineIcon from "../../assets/star-outline.svg";
import StoreData from "../../data/store-data";
import ProductData from "../../data/product-data";
import DropDownInfoContainer from "../molecules/DropDownInfoContainer";
import LeftProductPageContainer from "./LeftProductPageContainer";

const ProductPage = () => {
  return (
    <PageContainer>
      <LeftProductPageContainer />
      <RightContainer>
        <ProductOrderInfo>
          <ProductInfo>
            <CompanyInfoContainer>
              <CompanyInfoTop>
                <CompanyName>NameOfCompany</CompanyName>
                <FollowContainer>
                  <HeartOutlineIcon src={heartIcon} />
                  <h4>Follow</h4>
                </FollowContainer>
              </CompanyInfoTop>
              <SellerRatings>
                {StoreData.starRating && <StarSeller>Star Seller</StarSeller>}
                <Spacer>|</Spacer>
                <SellerRatings>{StoreData.totalStoreSales} sales</SellerRatings>
                <Spacer>|</Spacer>
                <StarIconsContainer>
                  {StoreData.starRating &&
                    StoreData.starRating.map(() => <StarIcon src={starIcon} />)}
                  {StoreData.starRating.length < 5 &&
                    Array(5 - StoreData.starRating.length)
                      .fill("")
                      .map(() => <StarOutline src={starOutlineIcon} />)}
                </StarIconsContainer>
              </SellerRatings>
            </CompanyInfoContainer>
            <ProductName>{ProductData.name}</ProductName>
            <PriceContainer>
              <ProductPrice>{ProductData.price}</ProductPrice>
              <InStockContainer>
                {ProductData.isInStock ? (
                  <>
                    <CheckIcon src={checkIcon} />
                    <IsInStock>In stock</IsInStock>
                  </>
                ) : (
                  <>
                    <CheckIcon src={checkIcon} />
                    <IsInStock>Currently, out of stock.</IsInStock>
                  </>
                )}
              </InStockContainer>
            </PriceContainer>
          </ProductInfo>
          {ProductData.isInStock ? (
            <AddButton>Add to cart</AddButton>
          ) : (
            <OutOfStockButton>
              Click here to save the item to favorites for later
            </OutOfStockButton>
          )}
          <MessagingContainer>
            {ProductData.isInOtherCarts && (
              <MessagingAfterAddButton>
                <ImageFiller>ASSET ONE DAY</ImageFiller>
                <p>
                  <strong style={{ paddingRight: 3 }}>
                    Other people want this.
                  </strong>
                  Over 20 people have this in their carts right now.
                </p>
              </MessagingAfterAddButton>
            )}
            {StoreData.isStarSeller && (
              <MessagingAfterAddButton>
                <ImageFiller>ASSET ONE DAY</ImageFiller>
                <p>
                  <strong>Star Seller.</strong> This seller consistently earned
                  5-star reviews, shipped on time, and replied quickly to any
                  messages they received.
                </p>
              </MessagingAfterAddButton>
            )}
            {StoreData.isGiftWrapping && (
              <MessagingAfterAddButton>
                <ImageFiller>ASSET ONE DAY</ImageFiller>
                <p>
                  <strong>Gift wrapping available</strong>
                </p>
              </MessagingAfterAddButton>
            )}
          </MessagingContainer>
        </ProductOrderInfo>
        <BottomRightExtras>
          {ProductData.highLights && (
            <DropDownInfoContainer title="Hightlights">
              {ProductData.highLights.map((highlight) => (
                <p>{highlight}</p>
              ))}
            </DropDownInfoContainer>
          )}
          {ProductData.description && (
            <DropDownInfoContainer title="Description">
              <p>{ProductData.description}</p>
            </DropDownInfoContainer>
          )}
          {StoreData.isAcceptsReturns.isTrue ? (
            <DropDownInfoContainer title="Shipping and return policies">
              <p>{StoreData.isAcceptsReturns.trueMessage}</p>
            </DropDownInfoContainer>
          ) : (
            <DropDownInfoContainer title="Shipping and return policies">
              <p>{StoreData.isAcceptsReturns.falseMessage}</p>
            </DropDownInfoContainer>
          )}
          <DropDownInfoContainer title="Meet your sellers">
            <div>hello</div>
            <div>hello</div>
            <div>hello</div>
          </DropDownInfoContainer>
        </BottomRightExtras>
      </RightContainer>
    </PageContainer>
  );
};

export default ProductPage;

const BottomRightExtras = styled.div`
  display: flex;
  width: 100%;
  height: 600px;
  flex-direction: column;
  background-color: lightgreen;
`;
const MessagingContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 20px;
`;
const StarOutline = styled.img`
  width: 16px;
  height: 16px;
`;
const ImageFiller = styled.div`
  width: 60px;
  height: 60px;
  background-color: darkblue;
  color: transparent;
  border-radius: 5px;
`;
const MessagingAfterAddButton = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const RightContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  background-color: lightblue;
  height: 100%;
  width: 34%;
  float: right;
  margin: 0px 0px 0px 20px;
`;
const ProductOrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;
const CompanyName = styled.h3`
  margin-right: 20px;
  font-family: "Graphik Webfont", -apple-system, "Helvetica Neue", "Droid Sans",
    Arial, sans-serif;
  font-weight: 375;
`;
const CompanyInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const StarSeller = styled.div`
  color: purple;
`;
const CompanyInfoTop = styled.div`
  display: flex;
  align-items: center;
`;
const StarIcon = styled.img`
  height: 18px;
  width: 18px;
`;
const FollowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 99px;
  height: 38px;
  &:hover {
    transition: background-color 300ms ease-in;
    background-color: #f8ebe6;
    border-radius: 20px;
  }
`;
const HeartOutlineIcon = styled.img`
  padding-right: 4px;
  width: 20px;
  height: 20px;
`;

const SellerRatings = styled.div`
  display: flex;
  align-items: center;
`;
const StarIconsContainer = styled.div``;
const ProductName = styled.h1`
  font-family: "Guardian-EgypTT", Charter, "Charter Bitstream", Cambria,
    "Noto Serif Light", "Droid Serif", Georgia, serif;
  font-weight: 100;
  letter-spacing: 0.35px;
`;
const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ProductPrice = styled.p`
  font-family: "Graphik Webfont", -apple-system, "Helvetica Neue", "Droid Sans",
    Arial, sans-serif;
  font-size: 45px;
  letter-spacing: 0.35px;
  font-weight: 700;
`;
const InStockContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const CheckIcon = styled.img`
  padding-right: 4px;
  width: 24px;
  height: 24px;
`;
const IsInStock = styled.div``;
const ProductInfo = styled.div``;
const AddButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  width: 100%;
  height: 3rem;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 600;
`;

const OutOfStockButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #595959;
  color: white;
  width: 100%;
  height: 3rem;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 600;
`;

const Spacer = styled.div`
  color: #e1e3df;
  padding: 0px 8px;
`;
const PageContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 30px 0px;
  height: 100vh;
`;
