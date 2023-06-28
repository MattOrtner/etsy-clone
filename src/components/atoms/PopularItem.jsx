import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import FavoriteHoverButton from "./FavoriteHoverButton";
import PhotoPlaceholder from "./PhotoPlaceholder";

const PopularItem = ({ price, id, image }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddFavorite = (e) => {
    e.preventDefault();
    setIsFavorite((curr) => !curr);
  };

  return (
    <Link
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      to={`/product/:${id}`}
      style={{ textDecoration: "none" }}
    >
      {image ? (
        <PhotoContainer>
          <img
            src={image}
            alt="something cool"
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              borderRadius: "0.5rem",
            }}
          />
        </PhotoContainer>
      ) : (
        <PhotoPlaceholder
          height={"10rem"}
          width={"15rem"}
          backgroundColor={"lightblue"}
          borderRadius={"0.5rem"}
        />
      )}
      <Price>${price}.00</Price>
      {isHovering ? (
        <div style={{ position: "absolute", top: "1rem", right: "1rem" }}>
          <FavoriteHoverButton
            isFavorite={isFavorite}
            handleAddFavorite={handleAddFavorite}
            itemId={id}
          />
        </div>
      ) : isFavorite ? (
        <div style={{ position: "absolute", top: "1rem", right: "1rem" }}>
          <FavoriteHoverButton
            isFavorite={isFavorite}
            handleAddFavorite={handleAddFavorite}
            itemId={id}
          />
        </div>
      ) : (
        <></>
      )}
    </Link>
  );
};

export default PopularItem;

const PhotoContainer = styled.div`
  width: 15rem;
  height: 10rem;
  border-radius: 0.5rem;
`;
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
