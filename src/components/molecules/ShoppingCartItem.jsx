import { useState } from "react";
import styled from "styled-components";
import QuantitySelectDropdown from "./QuantitySelectDropdown";
import PhotoPlaceholder from "../atoms/PhotoPlaceholder";

const ShoppingCartItem = ({ product, index, shoppingCart, dispatch }) => {
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

  const handleQuantityChange = (e) => {
    e.preventDefault();
    setQuantity(e.target.value);
    setTotalItemPrice(product.price * e.target.value);
    shoppingCart[index] = { ...product, quantity: parseInt(e.target.value) };

    dispatch({
      type: "change-quantity",
      payload: { index, quantity: parseInt(e.target.value) },
    });
  };
  return (
    <Container key={product.id}>
      <SellerBar>
        <div>name of company</div>
        <div style={{ fontWeight: 300, fontSize: 14 }}>Contact Shop</div>
      </SellerBar>
      <ProductInfoContainer>
        <PITopContainer>
          <ImageContainer>
            <PhotoPlaceholder
              height={"138px"}
              width={"175px"}
              backgroundColor={"orange"}
              borderRadius={"10px"}
            />
          </ImageContainer>
          <ProductInfo>
            {product.product_name && (
              <h3 style={{ fontWeight: 400 }}>{product.product_name}</h3>
            )}
            {product.description && product.description}
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <b style={{ paddingRight: 25 }}>Save for later</b>
              <RemoveButton
                onClick={() =>
                  dispatch({ type: "remove-from-cart", payload: product.id })
                }
              >
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
          style={{ fontSize: 18, resize: "none" }}
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
const OtherInfoContainer = styled.div`
  width: 85%;
  height: 100%;
  margin: 0px 0px 0px 18px;
`;
const ProductInfo = styled.div`
  width: 100%;
  height: 100%;
  margin: 0px 0px 0px 18px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const ImageContainer = styled.div``;
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
