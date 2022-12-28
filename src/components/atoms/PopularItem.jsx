import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const PopularItem = ({ imgURI, productName, rating, price, _id }) => {
  return (
    <Link
      to={`product/${_id}`}
      target="_blank"
      style={{ textDecoration: "none" }}
    >
      <PhotoContainer>
        <Photo></Photo>
      </PhotoContainer>
      <ListCardDetails>
        <DetailsTitle>{productName}</DetailsTitle>
        <Rating>{rating}</Rating>
        <Price>${price}.00</Price>
      </ListCardDetails>
    </Link>
  );
};

export default PopularItem;

const Link = styled(NavLink)`
  cursor: pointer;
  display: flex;
  width: 15rem;
  justify-content: center;
  flex-direction: column;
  margin: 5px 10px;
  border-radius: 9px;
  padding: 3px;
  border: 1px solid #25252525;
  &:hover {
    transition: box-shadow 250ms ease-in;
    box-shadow: 0px 2px 18px #22222233;
  }
`;

const PhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Photo = styled.div`
  height: 150px;
  width: 150px;
  flex: 1;
  background-color: lightblue;
  border-radius: 8px;
`;
const ListCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50%;
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
