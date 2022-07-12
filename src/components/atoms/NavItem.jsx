import React from "react";
import styled from "styled-components";

const NavItem = ({ title }) => {
  return (
    <div>
      <Title>{title}</Title>
    </div>
  );
};

export default NavItem;
const Title = styled.h6`
  font-weight: 400;
  font-size: 14px;
  margin: 4px 12px 0 0;
  cursor: pointer;
`;
