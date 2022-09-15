import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import heartIcon from "../../assets/heart-outline.svg";
import checkIcon from "../../assets/check.svg";
import starIcon from "../../assets/star.svg";
import CustomerReviews from "../../data/customer-review-dummy-data";
import thumbUpIcon from "../../assets/thumb-up.svg";
import starOutlineIcon from "../../assets/star-outline.svg";

const ProductPage = () => {
  return (
    <PageContainer>
      <LeftContainer>
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
        <ProductReviewsContainer>
          <TopProductReviews>
            <ProductReviewContainer>
              <StoreRating>2,380 reviews</StoreRating>
              <StarContainer>
                <StarIconLarge src={starIcon} />
                <StarIconLarge src={starIcon} />
                <StarIconLarge src={starIcon} />
                <StarIconLarge src={starIcon} />
                <StarIconLarge src={starIcon} />
              </StarContainer>
            </ProductReviewContainer>
            <RecentReviewShoutOut>
              Buyers are raving! Multiple people gave 5-star reviews to this
              shop in the past 7 days
            </RecentReviewShoutOut>
          </TopProductReviews>
          <BottomProductReviews>
            <ReviewsNavContainer>
              <ReviewNavTabs>Reviews for this item</ReviewNavTabs>
              <ReviewNavTabs>Reviews for this shop</ReviewNavTabs>
            </ReviewsNavContainer>
            <ReviewSortContainer>
              <ReviewSortButton>Sort by: Recommended</ReviewSortButton>
            </ReviewSortContainer>
            <CustomerReviewsContainer>
              {CustomerReviews &&
                CustomerReviews.map((customer) => (
                  <CustomerReviewContainer key={customer.userId}>
                    <div>
                      {customer.starRating &&
                        customer.starRating.map(() => (
                          <StarIconLarge src={starIcon} />
                        ))}
                      {customer.starRating.length === 5
                        ? ""
                        : Array(5 - customer.starRating.length)
                            .fill("")
                            .map(() => <StarOutline src={starOutlineIcon} />)}
                    </div>
                    <div style={{ fontSize: 28, fontWeight: 300 }}>
                      {customer.review}
                    </div>

                    <div
                      style={{
                        height: 24,
                        paddingBottom: 20,
                        color: "#595959",
                        textOverflow: "ellipsis",
                      }}
                    >
                      <p>
                        <strong>Purchased item:</strong> Handmade Cutting Board
                      </p>
                    </div>
                    <CustomerReviewTag>

                      <ProfileImg
                        src={customer.profileImage}
                        alt="users profile"
                      />

                      <div style={{ textDecoration: "underline" }}>
                        {customer.name}
                      </div>
                      <div>{customer.date}</div>
                    </CustomerReviewTag>
                    <HelpfulOuterContainer>
                      <ThumbIcon src={thumbUpIcon} />
                      <div style={{ fontWeight: 600, fontSize: 16 }}>
                        Helpful?
                      </div>

                    </HelpfulOuterContainer>
                  </CustomerReviewContainer>
                ))}
            </CustomerReviewsContainer>
          </BottomProductReviews>
        </ProductReviewsContainer>
      </LeftContainer>

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
                <StarSeller>Star Seller</StarSeller>
                <Spacer>|</Spacer>
                <SellerRatings>30,001 sales</SellerRatings>
                <Spacer>|</Spacer>
                <StarIconsContainer>
                  <StarIcon src={starIcon} />
                  <StarIcon src={starIcon} />
                  <StarIcon src={starIcon} />
                  <StarIcon src={starIcon} />
                  <StarIcon src={starIcon} />
                </StarIconsContainer>
              </SellerRatings>
            </CompanyInfoContainer>
            <ProductName>
              Handmade Cutting Board Personalized Classic Monogram Design
              #003-Wedding & Anniversary Gift for Couples-Housewarming and
              Closing Present
            </ProductName>
            <PriceContainer>
              <ProductPrice>$34.00</ProductPrice>
              <InStockContainer>
                <CheckIcon src={checkIcon} />
                <InStock>In stock</InStock>
              </InStockContainer>
            </PriceContainer>
          </ProductInfo>
          <AddButton>Add to cart</AddButton>

          <MessagingAfterAddButton>
            <ImageFiller>ASSET ONE DAY</ImageFiller>
            <p>
              <strong>Other people want this.</strong>
              Over 20 people have this in their carts right now.
            </p>
          </MessagingAfterAddButton>
          <MessagingAfterAddButton>
            <ImageFiller>ASSET ONE DAY</ImageFiller>
            <p>
              <strong>Star Seller.</strong> This seller consistently earned
              5-star reviews, shipped on time, and replied quickly to any
              messages they received.
            </p>
          </MessagingAfterAddButton>
          <MessagingAfterAddButton>
            <ImageFiller>ASSET ONE DAY</ImageFiller>
            <p>
              <strong>Gift wrapping available</strong>
            </p>
          </MessagingAfterAddButton>

        </ProductOrderInfo>
      </RightContainer>
    </PageContainer>
  );
};

export default ProductPage;

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
const StarOutline = styled.img`
  padding-right: 4px;
  width: 27px;
  height: 27px;
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


const CustomerReviewTag = styled.div`

  display: flex;
  font-size: 18px;
  gap: 15px;
  align-items: center;
  height: 42px;

  width: 50%;
  padding-bottom: 15px;
  color: #595959;
`;
const CustomerReviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const CustomerReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0px;
`;
const ThumbIcon = styled.img`
  height: 18px;
  width: 18px;
`;

const HelpfulOuterContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 55%;
`;
const ProductReviewsContainer = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
`;
const TopProductReviews = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  height: 90px;
  margin-top: 30px;
`;
const BottomProductReviews = styled.div`
  margin-top: 20px;
  ${"" /* background-color: red; */}
`;
const ReviewNavTabs = styled.h2`
  margin-right: 15px;
  font-weight: 300;
`;
const ReviewsNavContainer = styled.div`
  display: flex;
`;
const ProfileImg = styled.img`
  height: 45px;
  width: 45px;
  border-radius: 50%;
`;
const StoreRating = styled.div`
  font-size: 32px;
  font-weight: 300;
  margin-right: 10px;
`;
const ProductReviewContainer = styled.div`
  display: flex;
`;
const StarContainer = styled.div`
  display: flex;
  align-items: center;
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

const RightContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  background-color: lightblue;
  height: 100%;
  width: 40%;
  margin: 0px 0px 0px 20px;
`;
const ProductOrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
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
const HeartOutlineIconOverImage = styled.img`
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
const InStock = styled.div``;
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
