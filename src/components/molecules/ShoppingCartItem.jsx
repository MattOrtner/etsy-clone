import React, { useState } from "react";
import styled from "styled-components";
import { useOutletContext } from "react-router-dom";
import QuantitySelectDropdown from "./QuantitySelectDropdown";

const ShoppingCartItem = ({ product }) => {
  const [shoppingCart, setShoppingCart] = useOutletContext();

  const [quantity, setQuantity] = useState(product.quantity);
  const [totalItemPrice, setTotalItemPrice] = useState(
    product.price * product.quantity
  );
  const [textAreaValue, setTextAreaValue] = useState({
    value: "Add a note for the seller... (Optional)",
  });

  const handleTextAreaChange = (e) => {
    e.preventDefault();
    setTextAreaValue({ value: e.target.value });
  };

  const removeItem = (id) => {
    const newCart = shoppingCart.filter((item) => item.id !== id);
    setShoppingCart(newCart);
  };

  const handleQuantityChange = (e) => {
    e.preventDefault();
    setQuantity(e.target.value);
    setTotalItemPrice(product.price * e.target.value);
  };

  return (
    <Container key={product._id}>
      <SellerBar>
        <div>name of company</div>
        <div style={{ fontWeight: 300, fontSize: 14 }}>Contact Shop</div>
      </SellerBar>
      <ProductInfoContainer>
        <PITopContainer>
          <ImageContainer>
            <ImagePlaceholder></ImagePlaceholder>
          </ImageContainer>
          <ProductInfo>
            {product.productName && (
              <h3 style={{ fontWeight: 400 }}>{product.productName}</h3>
            )}
            {product.description && product.description}
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <b style={{ paddingRight: 25 }}>Save for later</b>
              <RemoveButton onClick={() => removeItem(product.id)}>
                Remove
              </RemoveButton>
            </div>
          </ProductInfo>
          <OtherInfoContainer>
            <AmountPriceContainer>
              <Quantity>
                <QuantitySelectDropdown
                  handleChange={handleQuantityChange}
                  total={product.isInStock}
                  quantity={quantity}
                />
              </Quantity>
              <Price>${totalItemPrice}.00</Price>
            </AmountPriceContainer>
            <RecentlySoldContainer>
              2 sold in the last 24 hours.
            </RecentlySoldContainer>
          </OtherInfoContainer>
        </PITopContainer>
        <div style={{ display: "flex", width: "100%" }}>
          <div style={{ flex: 1, display: "flex", padding: " 14px 14px" }}>
            <input
              type="checkbox"
              name="gift"
              id="gift"
              style={{ height: 24, width: 24, marginRight: 10 }}
            />
            <div>
              <div style={{ fontSize: 18 }}>This order is a gift</div>
              <div style={{ fontSize: 14 }}>
                Prices will be shown on packing slip
              </div>
            </div>
          </div>
          <div style={{ flex: 1, opacity: 0 }}>thisIsASpacer</div>
        </div>
        <textarea
          name="note-to-seller"
          id="note-to-seller"
          value={textAreaValue.value}
          onChange={handleTextAreaChange}
          cols="30"
          rows="10"
          style={{ fontSize: 18 }}
        />
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
    background-color: black;
    color: white;
  }
`;
const RecentlySoldContainer = styled.div`
  font-size: 20px;
  text-align: right;
`;
const Price = styled.div`
  text-align: right;
  font-size: 20px;
  width: 50%;
`;
const Quantity = styled.div`
  width: 50%;
`;
const AmountPriceContainer = styled.div`
  gap: 5px;
  padding: 2px;
  display: flex;
  height: 54px;
`;
const ImagePlaceholder = styled.div`
  height: 138px;
  width: 175px;
  background-color: orange;
  border-radius: 10px;
`;
const OtherInfoContainer = styled.div`
  ${"" /* border: 1px solid red; */}
  width: 85%;
  height: 100%;
  margin: 0px 0px 0px 18px;
`;
const ProductInfo = styled.div`
  width: 100%;
  height: 100%;
  ${"" /* border: 1px solid red; */}
  margin: 0px 0px 0px 18px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const ImageContainer = styled.div`
  height: 100%;
  ${"" /* border: 1px solid red; */}
`;
const PITopContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;
const ProductInfoContainer = styled.div`
  padding: 15px 0px;
  display: flex;
  flex-direction: column;
  height: 70%;
  width: 100%;
`;
const SellerBar = styled.div`
  display: flex;
  height: 32px;
  align-items: center;
  font-size: 24px;
  justify-content: space-between;
`;
const Container = styled.div`
  flex: 1;
  width: 100%;
  height: 500px;
  border-bottom: 1px solid #d7e6f5;
  margin-bottom: 15px;
`;
