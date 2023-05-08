import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const PopularItem = ({ price, id }) => {
  return (
    <Link to={`/product/:${id}`} style={{ textDecoration: "none" }}>
      <Photo></Photo>
      <Price>${price}.00</Price>
    </Link>
  );
};

export default PopularItem;

const Link = styled(NavLink)`
  position: relative;
  cursor: pointer;
  display: flex;
  width: 15rem;
  justify-content: center;
  border-radius: 9px;
  border: 1px solid #25252525;
  &:hover {
    transition: box-shadow 250ms ease-in-out;
    box-shadow: 0px 0px 15px #cccccc;
  }
`;
const Photo = styled.div`
  height: 160px;
  width: 240px;
  background-color: lightblue;
  border-radius: 8px;
`;
const Price = styled.div`
  position: absolute;
  bottom: 4px;
  left: 4px;
  text-align: left;
  font-size: 18px;
  border-radius: 9px;
  background-color: gray;
  padding: 4px 8px;
  color: white;
`;
