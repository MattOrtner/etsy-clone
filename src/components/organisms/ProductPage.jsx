import React from "react";
import styled from "styled-components";
import heartIcon from "../../assets/heart-outline.svg";
import checkIcon from "../../assets/check.svg";
import starIcon from "../../assets/star.svg";

const ProductPage = () => {
  return (
    <Container>
      <LeftContainer>
        <ImagesPreview>
          <OtherImages></OtherImages>
          <Image>this is an image! WOW</Image>
        </ImagesPreview>
      </LeftContainer>

      <RightContainer>
        <ProductInfo>
          <CompanyInfoContainer>
            <CompanyInfoTop>
              <CompanyName>NameOfCompany</CompanyName>
              <FollowContainer>
                <HeartIcon src={heartIcon} />
                <h4>Follow</h4>
              </FollowContainer>
            </CompanyInfoTop>
            <CompanyInfoBottom>
              <SellerRatings>Star Seller</SellerRatings>
              <Spacer>|</Spacer>
              <SellerRatings>30,001 sales</SellerRatings>
              <Spacer>|</Spacer>
              <SellerRatings>
                <StarIcon src={starIcon} />
                <StarIcon src={starIcon} />
                <StarIcon src={starIcon} />
                <StarIcon src={starIcon} />
                <StarIcon src={starIcon} />
              </SellerRatings>
            </CompanyInfoBottom>
          </CompanyInfoContainer>
          <ProductName>
            Handmade Cutting Board Personalized Classic Monogram Design
            #003-Wedding & Anniversary Gift for Couples-Housewarming and Closing
            Present
          </ProductName>
          {/* insert boolean for Etsy pick */}
          <PriceContainer>
            <ProductPrice>$34.00</ProductPrice>
            {/* insert boolean for Etsy pick */}
            <InStockContainer>
              <CheckIcon src={checkIcon} />
              <InStock>In stock</InStock>
            </InStockContainer>
          </PriceContainer>
        </ProductInfo>
        <AddButton>Add to cart</AddButton>
      </RightContainer>
    </Container>
  );
};

export default ProductPage;

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 30px 0px;
  height: 100vh;
`;
const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: lightgreen;
  height: 100%;
  width: 60%;
`;
const ImagesPreview = styled.div`
  display: flex;
`;
const OtherImages = styled.div``;
const Image = styled.div`
  width: 100%;
  border: 2px solid black;
`;
const RightContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  background-color: lightblue;
  height: 100%;
  width: 35%;
  margin: 0px 0px 0px 20px;
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
const SellerRatings = styled.h5``;
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
const HeartIcon = styled.img`
  padding-right: 4px;
  width: 20px;
  height: 20px;
`;

const CompanyInfoBottom = styled.div`
  display: flex;
  align-items: center;
`;
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
  font-size: 18px;
  font-weight: 600;
`;
// e1e2df
const Spacer = styled.div`
  color: #e1e3df;
  padding: 0px 8px;
`;
