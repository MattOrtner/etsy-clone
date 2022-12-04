import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const PopularItem = ({ imgURI, productName, rating, price, _id }) => {
  return (
    <Container>
      <NavLink to={`product/${_id}`}>
        <Photo />
        <ListCardDetails>
          <DetailsTitle>{productName}</DetailsTitle>
          <Rating>{rating}</Rating>
          <Price>${price}.00</Price>
        </ListCardDetails>
      </NavLink>
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
  margin: 5px 10px;
  border-radius: 9px;
  padding: 3px;
  &:hover {
    transition: box-shadow 250ms ease-in;
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
