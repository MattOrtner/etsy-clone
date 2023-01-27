import React from "react";
import styled from "styled-components";

const SocialLoginButton = ({ name, border, color, logo }) => {
  return (
    <Container style={{ border: `3px solid ${border}` }}>
      <ImagePlaceholder logo={logo}></ImagePlaceholder>
      <ButtonTitle style={{ color: `${color}` }}>
        Continue with {name}
      </ButtonTitle>
    </Container>
  );
};

export default SocialLoginButton;
const ImagePlaceholder = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  font-size: 0;
  background-color: ${(prop) => (prop.logo ? prop.logo : "lightblue ")};
`;
const ButtonTitle = styled.div`
  font-weight: 600;
  font-size: 18px;
  margin-left: 10px;
`;
const Container = styled.div`
  border: 1px solid green;
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  margin: 6px 0px;
  cursor: pointer;
`;
