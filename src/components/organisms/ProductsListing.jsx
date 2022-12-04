import React, { useState } from "react";
import styled from "styled-components";
import heartIcon from "../../assets/heart-outline.svg";
import ProductListing from "../molecules/ProductListing";

const ProductsListing = () => {
  const [products, setProducts] = useState([
    {
      productName: "this is a name",
      price: "18",
      starRating: 3,
      numOfReviews: 400,
    },
    {
      productName: "this is a name",
      price: "18",
      starRating: 3,
      numOfReviews: 400,
    },
    {
      productName: "this is a name",
      price: "18",
      starRating: 3,
      numOfReviews: 400,
    },
    {
      productName: "this is a name",
      price: "18",
      starRating: 3,
      numOfReviews: 400,
    },
    {
      productName: "this is a name",
      price: "18",
      starRating: 3,
      numOfReviews: 400,
    },
    {
      productName: "this is a name",
      price: "18",
      starRating: 3,
      numOfReviews: 400,
    },
    {
      productName: "this is a name",
      price: "18",
      starRating: 3,
      numOfReviews: 400,
    },
    {
      productName: "this is a name",
      price: "18",
      starRating: 3,
      numOfReviews: 400,
    },
    {
      productName: "this is a name",
      price: "18",
      starRating: 3,
      numOfReviews: 400,
    },
    {
      productName: "this is a name",
      price: "18",
      starRating: 3,
      numOfReviews: 400,
    },
    {
      productName: "this is a name",
      price: "18",
      starRating: 3,
      numOfReviews: 400,
    },
  ]);

  return (
    <PageContainer>
      <SelectedItemContainer>
        <ImageFiller>image</ImageFiller>
        <ProductInfoContainer>
          <CompanyInfoTop>
            <div>SellerName</div>
            <div>*****</div>
            <div>(293)</div>
          </CompanyInfoTop>
          <ProductInfo>
            <h2>Product Name</h2>
            <h3>Price</h3>
            <div>FREE shipping</div>
          </ProductInfo>
          <QueryButtonContainer>
            <EngageButton>Shop this item</EngageButton>
          </QueryButtonContainer>
        </ProductInfoContainer>
      </SelectedItemContainer>
      <BottomContainer>
        <FilterResultsContainer>
          <div
            style={{
              width: 100,
              border: "3px solid black",
              borderRadius: 25,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>All Filters</div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ paddingRight: 10 }}>
              11,236,950 results, with Ads o
            </div>
            <HeartOutlineIcon src={heartIcon} />
          </div>
        </FilterResultsContainer>
        <ProductCardContainer>
          {products &&
            products.map((product) => <ProductListing {...product} />)}
        </ProductCardContainer>
      </BottomContainer>
    </PageContainer>
  );
};

export default ProductsListing;

const FilterResultsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 0 18px 0;
`;
const BottomContainer = styled.div`
  height: 100vh;
`;
const HeartOutlineIcon = styled.img`
  width: 20px;
  height: 20px;
`;
const ProductCardContainer = styled.div`
  width: 95%;
  height: 80%;
  display: grid;
  grid-gap: 1rem;
  justify-item: center;
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ImageFiller = styled.div`
  flex: 1;
  border-radius: 6px;
  background: lightblue;
`;
const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1.25;
`;
const EngageButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  width: 100%;
  height: 3rem;
  border: 3px solid black;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 600;
`;
const ProductInfo = styled.div``;
const QueryButtonContainer = styled.div`
  height: 100px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CompanyInfoTop = styled.div`
  gap: 7px;
  display: flex;
  align-items: center;
`;
const SelectedItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 400px;
  gap: 20px;
  margin: 18px 0;
  padding-bottom: 18px;
  border-bottom: 1px solid lightpink;
`;
const PageContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  margin: 20px 50px;
  background-color: "#2389";
  overflow: hidden;
`;
