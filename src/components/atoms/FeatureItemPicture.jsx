import React from "react";
import styled from "styled-components";

const FeatureItemPicture = ({ children }) => {
  // add image element inside container

  return <Container>{children}</Container>;
};

export default FeatureItemPicture;

const Container = styled.div`
  background-color: lightblue;
  color: transparent;
  border-radius: 8px;
  cursor: pointer;
`;
