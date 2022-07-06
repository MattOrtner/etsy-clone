import React from "react";
import styled from "styled-components";
import NavList from "../molecules/NavList";

const NavigationContainer = () => {
  return (
    <NavContainer>
      <NavList />
    </NavContainer>
  );
};

export default NavigationContainer;
const NavContainer = styled.nav`
  height: 34px;
  border-bottom: 2px solid rgba(121 104 72 / 43%);
`;
