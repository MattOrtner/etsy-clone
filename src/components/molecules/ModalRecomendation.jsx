import React from "react";
import styled from "styled-components";
import PhotoPlaceholder from "../atoms/PhotoPlaceholder";

const ModalRecomendation = ({ color }) => {
  return (
    <RecItemContainer>
      <PhotoPlaceholder
        height={"162px"}
        width={"204px"}
        backgroundColor={color}
      />
      <div style={{ fontSize: 18, fontWeight: 600, paddingBottom: 6 }}>
        Name of the product
      </div>
      <div style={{ paddingBottom: 6 }}>nameOfTheShop</div>
      <div style={{ paddingBottom: 10, fontWeight: 500, fontSize: 18 }}>
        $9.99
      </div>
      <AddToCartButton>Add to cart</AddToCartButton>
    </RecItemContainer>
  );
};

export default ModalRecomendation;

const AddToCartButton = styled.div`
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  font-weight: 500;
  padding: 5px;
  width: 50%;
  border: 2.5px solid #222;
  &:hover {
    transition: all 0.3s;
    box-shadow: 0 0 11px #a4a4a4;
  }
`;
const RecItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6px;
  border-radius: 5px;
  cursor: pointer;
`;
