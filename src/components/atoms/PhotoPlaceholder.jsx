import React from "react";
import styled from "styled-components";

const PhotoPlaceholder = ({
  children,
  height,
  width,
  backgroundColor,
  borderRadius,
}) => {
  return (
    <Container
      borderRadius={borderRadius}
      height={height}
      backgroundColor={backgroundColor}
      width={width}
    >
      {children}
    </Container>
  );
};

export default PhotoPlaceholder;

const Container = styled.div(
  ({ height, width, backgroundColor, borderRadius }) => `
  height: ${height ? height : "50%"};
  width: ${width ? width : "100%"};
  background-color: ${backgroundColor ? backgroundColor : "lightgreen"};
  border-radius: ${borderRadius ? borderRadius : "inherit"};
`
);
// transform: scaleX(1) scaleY(1) perspective(1px);
// transition: transform 200ms cubic-bezier(0.345, 0.115, 0.135, 1.42),
// background 150ms ease-out,
// box-shadow 200ms ease-out;
