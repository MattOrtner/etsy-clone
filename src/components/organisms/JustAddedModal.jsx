import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import ModalRecomendation from "../molecules/ModalRecomendation";

const JustAddedModal = ({ onClose, show }) => {
  if (!show) {
    return null;
  }

  const sixColors = ["blue", "orange", "orange", "blue", "blue", "orange"];

  return (
    <ModalContainer onClick={onClose}>
      <CloseButtonContainer onClick={onClose}>X</CloseButtonContainer>
      <ModalContentContainer onClick={(e) => e.stopPropagation()}>
        <TopContainer>
          <ItemAddedContainer>
            <ImageFiller
              width={"65px"}
              height={"65px"}
              backgroundColor={"lightblue"}
              borderRadius={"7px"}
            />
            <ItemAdded>1 item added to the cart</ItemAdded>
            <Spacer>SPACER</Spacer>
          </ItemAddedContainer>
          <ViewKeepShoppingContainer>
            <NavLink
              to={`/cart`}
              style={{ textDecoration: "none", color: "white" }}
            >
              <ViewCartButton>View cart & check out</ViewCartButton>
            </NavLink>
            <KeepShoppingButton onClick={onClose}>
              Keep shopping
            </KeepShoppingButton>
          </ViewKeepShoppingContainer>
        </TopContainer>
        <BottomContainer>
          <RelatedItemsContainer>
            <div style={{ height: 50, fontWeight: 500, fontSize: 24 }}>
              Related items you may like
            </div>
            <div style={{ fontSize: 0, width: "30%" }}>spacer</div>
          </RelatedItemsContainer>
          <RecItemsContainer>
            {sixColors.map((color) => (
              <ModalRecomendation color={color} />
            ))}
          </RecItemsContainer>
        </BottomContainer>
      </ModalContentContainer>
    </ModalContainer>
  );
};

export default JustAddedModal;

const RelatedItemsContainer = styled.div`
  display: flex;
  width: 100%;
`;
const RecItemsContainer = styled.div`
  height: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const BottomContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const CloseButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 50px;
  height: 50px;
  margin: 0px 6px 6px 0px;
  padding: 12px;
  border: 2px solid white;
  border-radius: 50%;
  font-size: 24px;
  color: white;
  &:hover {
    transition: background-color 150ms ease-in;
    background-color: #8a8888;
  }
`;
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
  font-weight: 600;
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
  padding: 25px;
  z-index: 5;
`;
const TopContainer = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ImageFiller = styled.div(
  ({ height, width, backgroundColor, borderRadius }) => `
  height: ${height ? height : "50%"};
  width: ${width ? width : "100%"};
  border-radius: ${borderRadius ? borderRadius : "inherit"};
  background-color: ${backgroundColor ? backgroundColor : "lightgreen"};
  color: transparent;
`
);

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
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid rgba(121 104 72 / 43%);
`;
const Spacer = styled.div`
  color: white;
  background: green;
  flex: 1;
  font-size: 0;
`;
