import { useState } from "react";
import HeartIconContainer from "./HeartIconContainer";
import styled from "styled-components";

const FavoriteHoverButton = ({ styles }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Container
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={styles}
    >
      {isHovering ? (
        <HeartIconContainer src={"red"} />
      ) : (
        <HeartIconContainer src={"outline"} />
      )}
    </Container>
  );
};
export default FavoriteHoverButton;

const Container = styled.div``;
