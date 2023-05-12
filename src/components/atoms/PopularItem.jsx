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
  height: 10rem;
  width: 15rem;
  background-color: lightblue;
  border-radius: 0.5rem;
`;
const Price = styled.div`
  position: absolute;
  bottom: 0.3rem;
  left: 0.3rem;
  text-align: left;
  font-size: 1.2rem;
  border-radius: 0.5rem;
  background-color: gray;
  padding: 4px 8px;
  color: white;
`;
