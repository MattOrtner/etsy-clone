import { useState } from "react";
import styled from "styled-components";
import HeartOutlineIcon from "../atoms/HeartOutlineIcon";
import ProductListing from "../molecules/ProductListing";
import MULTIPLE_SINGLE_DUMMY_PRODUCTS from "../../data/multiple-dummie-products";

const ProductsListing = () => {
  const [products, setProducts] = useState(MULTIPLE_SINGLE_DUMMY_PRODUCTS);
  return (
    <PageContainer>
      <ContentContainer>
        <SelectedItemContainer>
          <SelectedImageFiller></SelectedImageFiller>
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
        <FilterBarContainer>
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
            <div style={{ paddingRight: 10 }}>11,236,950 results</div>
            <HeartOutlineIcon />
          </div>
        </FilterBarContainer>
        <ProductCardContainer>
          {products &&
            products.map((product) => (
              <ProductListing
                productName={product.product_name}
                price={product.price}
                starRating={product.starRating}
                numOfReviews={product.numOfReviews}
                key={product.id}
                id={product.id}
              />
            ))}
        </ProductCardContainer>
      </ContentContainer>
    </PageContainer>
  );
};

export default ProductsListing;

const FilterBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 3rem;
  margin: 0 0 1.2rem 0;
`;

const ProductCardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
  gap: 18px;
  @media (max-width: 500px) {
    grid-template-columns: 1fr 1fr;
  }
`;
const SelectedImageFiller = styled.div`
  width: 45%;
  border-radius: 6px;
  background: lightblue;
`;
const ProductInfoContainer = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 55%;
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
  gap: 20px;
  margin: 18px 0;
  padding-bottom: 18px;
  height: 371px;
  border-bottom: 1px solid lightpink;
`;
const ContentContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  width: 1400px;
  max-width: 1400px;
`;

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
