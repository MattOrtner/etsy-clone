import React from "react";
import styled from "styled-components";

const PhotoPlaceholder = ({
  children,
  height,
  width,
  backgroundColor,
  borderRadius,
  border,
  styles,
  addClick,
}) => {
  return (
    <Container
      borderRadius={borderRadius}
      height={height}
      backgroundColor={backgroundColor}
      width={width}
      border={border}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "2rem",
        ...styles,
      }}
      onClick={addClick}
    >
      {children}
    </Container>
  );
};

export default PhotoPlaceholder;

const Container = styled.div(
  ({ height, width, backgroundColor, borderRadius, border }) => `
  height: ${height ? height : "50%"};
  width: ${width ? width : "100%"};
  background-color: ${backgroundColor ? backgroundColor : "lightgreen"};
  border-radius: ${borderRadius ? borderRadius : "inherit"};
  border: ${border ? "1px solid #adadad" : ""};
`
);
