import React from "react";
import styled from "styled-components";

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

const TopSecond = styled.div`
  grid-column: 2;
  background-color: lightblue;
  color: transparent;
  border-radius: 8px;
  cursor: pointer;
`;
const TopThird = styled.div`
  grid-column: 3;
  background-color: lightblue;
  color: transparent;
  cursor: pointer;
  border-radius: 8px;
`;
const TopLast = styled.div`
  grid-column: 4;
  background-color: lightblue;
  color: transparent;
  cursor: pointer;
  border-radius: 8px;
`;
const BottomFirst = styled.div`
  grid-column: 1;
  grid-row: 2;
  background-color: lightblue;
  color: transparent;
  cursor: pointer;
  border-radius: 8px;
`;
const BottomSecond = styled.div`
  grid-column: 2;
  grid-row: 2;
  background-color: lightblue;
  color: transparent;
  cursor: pointer;
  border-radius: 8px;
`;
const BottomThird = styled.div`
  grid-column: 3;
  grid-row: 2;
  background-color: lightblue;
  color: transparent;
  cursor: pointer;
  border-radius: 8px;
`;
const BottomLast = styled.div`
  grid-column: 4;
  grid-row: 2;
  cursor: pointer;
  align-self: center;
`;
