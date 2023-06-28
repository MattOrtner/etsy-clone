import { useState } from "react";
import HeartIconContainer from "./HeartIconContainer";
import styled from "styled-components";

const FavoriteHoverButton = ({ styles, handleAddFavorite, isFavorite }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Container
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={styles}
      onClick={handleAddFavorite}
    >
      {isHovering ? (
        <HeartIconContainer src={"red"} />
      ) : isFavorite ? (
        <HeartIconContainer src={"red"} />
      ) : (
        <HeartIconContainer src={"outline"} />
      )}
    </Container>
  );
};
export default FavoriteHoverButton;

const Container = styled.div``;
