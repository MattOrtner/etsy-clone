import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const JustAddedModal = ({ onClose, show }) => {
  if (!show) {
    return null;
  }
  return (
    <ModalContainer onClick={onClose}>
      <div
        onClick={onClose}
        style={{
          cursor: "pointer",
          fontSize: 35,
          width: 50,
          height: 50,
          paddingTop: 24,
          textAlign: "center",
        }}
      >
        X
      </div>
      <ModalContentContainer onClick={(e) => e.stopPropagation()}>
        <TopContainer>
          <ItemAddedContainer>
            <ImageFiller>assetOneDay</ImageFiller>
            <ItemAdded>1 item added to the cart</ItemAdded>
            <div
              style={{
                color: "white",
                background: "green",
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: 0,
              }}
            >
              something
            </div>
          </ItemAddedContainer>
          <ViewKeepShoppingContainer>
            <ViewCartButton>
              <NavLink
                to={`/cart`}
                style={{ textDecoration: "none", color: "white" }}
              >
                View cart & check out
              </NavLink>
            </ViewCartButton>
            <KeepShoppingButton onClick={onClose}>
              Keep shopping
            </KeepShoppingButton>
          </ViewKeepShoppingContainer>
        </TopContainer>
        <BottomContainer>
          <div style={{ height: 50, background: "gray" }}>
            Related items you may like
          </div>
          <RecContainer style={{ background: "lightblue" }}>
            <Product>Product</Product>
            <Product>Product</Product>
            <Product>Product</Product>
            <Product>Product</Product>
            <Product>Product</Product>
            <Product>Product</Product>
          </RecContainer>
        </BottomContainer>
      </ModalContentContainer>
    </ModalContainer>
  );
};

export default JustAddedModal;

const ItemAdded = styled.div`
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  font-weight: 600;
`;
const ViewCartButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1 solid black;
  color: white;
  width: 100%;
  height: 3.75rem;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 600;
  margin: 12px 0px;
  cursor: pointer;
  background-color: black;
  color: white;
`;
const KeepShoppingButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3rem;
  border-radius: 50px;
  cursor: pointer;
  &:hover {
    transition: background-color 150ms ease-in;
    background-color: #d9d9d9;
  }
`;
const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: #4444447a;
  display: flex;
  justify-content: flex-end;
  border: 1px solid black;
  z-index: 3;
`;
const ModalContentContainer = styled.div`
  height: 100%;
  width: 25%;
  background-color: #ffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  z-index: 5;
`;
const TopContainer = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ImageFiller = styled.div`
  width: 60px;
  height: 60px;
  background-color: darkblue;
  color: transparent;
  border-radius: 5px;
  ${"" /* margin-right: 10px; */}
`;
const ItemAddedContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;
const ViewKeepShoppingContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const BottomContainer = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const RecContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  background-color: blue;
  gap: 10px;
`;
const Product = styled.div`
  flex-grow: 1;
  width: 100%;
  align-self: stretch;
  background-color: lightgreen;
  border: 1px solid red;
`;
