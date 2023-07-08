import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import FeatureItemPicture from "../atoms/FeatureItemPicture";

const PersonalizedGifts = () => {
  return (
    <Container>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TopFirst>
          <p style={{ fontSize: 16 }}>Editors' Picks</p>
          <h1 style={{ fontSize: 24 }}>Personalized Gifts</h1>
          <div>Shop these unique finds {"->"}</div>
        </TopFirst>
      </div>
      <NavLink to="product/listings" style={{ display: "contents" }}>
        <TopSecond>second</TopSecond>
      </NavLink>
      <NavLink to="product/listings" style={{ display: "contents" }}>
        <TopThird>third</TopThird>
      </NavLink>
      <NavLink to="product/listings" style={{ display: "contents" }}>
        <TopLast>last</TopLast>
      </NavLink>
      <NavLink to="product/listings" style={{ display: "contents" }}>
        <BottomFirst>first</BottomFirst>
      </NavLink>
      <NavLink to="product/listings" style={{ display: "contents" }}>
        <BottomSecond>second</BottomSecond>
      </NavLink>
      <NavLink to="product/listings" style={{ display: "contents" }}>
        <BottomThird>third</BottomThird>
      </NavLink>
      <BottomLast>
        Names, initials, dates, faces: the possibilities from these positively
        amazing sellers are endless!
      </BottomLast>
    </Container>
  );
};

export default PersonalizedGifts;
const Container = styled.div`
  display: grid;
  grid-template-columns: 30% 30% 15% 20%;
  grid-template-rows: 45% 50%;
  width: 100%;
  height: 35em;
  margin-bottom: 5.5rem;
  gap: 18px;
`;
const TopFirst = styled.div`
  grid-column: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
`;
const TopSecond = styled(FeatureItemPicture)`
  grid-column: 2;
`;
const TopThird = styled(FeatureItemPicture)`
  grid-column: 3;
`;
const TopLast = styled(FeatureItemPicture)`
  grid-column: 4;
`;
const BottomFirst = styled(FeatureItemPicture)`
  grid-column: 1;
`;
const BottomSecond = styled(FeatureItemPicture)`
  grid-column: 2;
  grid-row: 2;
`;
const BottomThird = styled(FeatureItemPicture)`
  grid-column: 3;
  grid-row: 2;
`;
const BottomLast = styled.div`
  grid-column: 4;
  grid-row: 2;
  cursor: pointer;
  align-self: center;
`;
