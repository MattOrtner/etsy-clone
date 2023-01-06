import React from "react";
import styled from "styled-components";
import { useOutletContext } from "react-router-dom";

const ShoppingCartItem = ({ product }) => {
  console.log("product", product);
  const [shoppingCart, setShoppingCart] = useOutletContext();

  const removeItem = () => {
    const newCart = shoppingCart.filter((item) => item._id !== product._id);
    setShoppingCart(newCart);
  };

  return (
    <Container>
      <SellerBar>
        <div>name of company</div>
        <div style={{ fontWeight: 300, fontSize: 14 }}>Contact Shop</div>
      </SellerBar>
      <ProductInfoContainer>
        <ImageContainer>
          <ImagePlaceholder></ImagePlaceholder>
        </ImageContainer>
        <ProductInfo>
          {product.productName ? (
            <div>{product.productName}</div>
          ) : (
            <div>
              Custom Floating Shelves | Small to Medium | Pick your size | Oak |
              Plants, Books, Keys, Candles, Wall Décor | Boho Minimalist
            </div>
          )}
          <div>Wood: oak</div>
          <div>Size: 6"L x 3"W </div>
          <div>Edit</div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <b style={{ paddingRight: 25 }}>Save for later</b>
            <RemoveButton onClick={removeItem}>Remove</RemoveButton>
          </div>
        </ProductInfo>
        <OtherInfoContainer>
          <AmountPriceContainer>
            <Quantity></Quantity>
            <Price>${product.price}.00</Price>
          </AmountPriceContainer>
          <RecentlySoldContainer>
            2 sold in the last 24 hours.
          </RecentlySoldContainer>
        </OtherInfoContainer>
      </ProductInfoContainer>
    </Container>
  );
};

export default ShoppingCartItem;
const RemoveButton = styled.b`
  cursor: pointer;
  overflow: hidden;
  padding: 15px;
  border-radius: 15px;
  transition: all 1s ease-out;
  &:hover {
    ${"" /* border: 1px solid black; */}
    background-color: black;
    color: white;
  }
`;
const RecentlySoldContainer = styled.div`
  font-size: 20px;
`;
const Price = styled.div`
  text-align: right;
  font-size: 20px;
  width: 50%;
  background-color: lightblue;
`;
const Quantity = styled.div`
  width: 50%;
  background-color: lightblue;
`;
const AmountPriceContainer = styled.div`
  gap: 5px;
  padding: 2px;
  display: flex;
  height: 54px;
  border: 1px solid blue;
`;
const ImagePlaceholder = styled.div`
  height: 138px;
  width: 175px;
  background-color: orange;
  border-radius: 10px;
`;
const OtherInfoContainer = styled.div`
  border: 1px solid red;
  width: 85%;
  height: 100%;
  margin: 0px 0px 0px 18px;
`;
const ProductInfo = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid red;
  margin: 0px 0px 0px 18px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const ImageContainer = styled.div`
  height: 100%;
  border: 1px solid red;
`;
const ProductInfoContainer = styled.div`
  padding: 15px 0px;
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
`;
const SellerBar = styled.div`
  display: flex;
  height: 32px;
  align-items: center;
  font-size: 24px;
  justify-content: space-between;
  background-color: lightblue;
`;
const Container = styled.div`
  flex: 1;
  width: 100%;
  height: 400px;
  border: 1px solid blue;
`;
