import React from "react";
import styled from "styled-components";

const PopularItem = ({ title, rating, price }) => {
  return (
    <Container>
      <Photo />
      <ListCardDetails>
        <DetailsTitle>{title}</DetailsTitle>
        <Rating>{rating}</Rating>
        <Price>{price}</Price>
      </ListCardDetails>
    </Container>
  );
};

export default PopularItem;

const Container = styled.div`
  cursor: pointer;
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${"" /* border: 3px solid yellow; */}
  margin: 5px 10px;
  border-radius: 9px;
  ${"" /* border: 1; */}
  padding: 3px;
  &:hover {
    transition: transform 0.1s ease-in;
    transform: scale(1.07);
    box-shadow: 0px 2px 18px #22222233;
  }
`;

const Photo = styled.div`
  height: 70%;
  width: 100%;
  background-color: lightblue;
  border-radius: 8px;
`;
const ListCardDetails = styled.div`
  display: flex;
  height: 50%;
  flex-direction: column;
  font-size: 13px;
`;
const DetailsTitle = styled.h5`
  flex-grow: 1;
`;
const Rating = styled.div`
  flex-grow: 1;
`;
const Price = styled.div`
  flex-grow: 1;
`;
