import React from "react";
import styled from "styled-components";
import FeatureItemPicture from "../atoms/FeatureItemPicture";

const PersonalizedGifts = () => {
  return (
    <Container>
      <TopFirst>
        <p style={{ fontSize: 16 }}>Editors' Picks</p>
        <h1 style={{ fontSize: 24 }}>Personalized Gifts</h1>
        <div>Shop these unique finds {"->"}</div>
      </TopFirst>
      <TopSecond>second</TopSecond>
      <TopThird>third</TopThird>
      <TopLast>last</TopLast>
      <BottomFirst>first</BottomFirst>
      <BottomSecond>second</BottomSecond>
      <BottomThird>third</BottomThird>
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
  grid-template-columns: 33% 30% 15% 22%;
  grid-template-rows: 45% 55%;
  width: 75%;
  height: 500px;
  margin-bottom: 0px 0px 90px;
  gap: 15px;
`;
const TopFirst = styled.div`
  grid-column: 1;
  align-self: center;
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
