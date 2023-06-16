import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import FavoriteHoverButton from "./FavoriteHoverButton";

const PopularItem = ({ price, id }) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <Link
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      to={`/product/:${id}`}
      style={{ textDecoration: "none" }}
    >
      <Photo></Photo>
      <Price>${price}.00</Price>
      {isHovering && (
        <div style={{ position: "absolute", top: "1rem", right: "1rem" }}>
          <FavoriteHoverButton />
        </div>
      )}
    </Link>
  );
};

export default PopularItem;

const Link = styled(NavLink)`
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  width: 15rem;
  border-radius: 9px;
  border: 1px solid #25252525;
  &:hover {
    transition: box-shadow 100ms ease-out;
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
