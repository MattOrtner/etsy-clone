import React from "react";
import styled from "styled-components";

const Thing = (props) => {
  return <div>{props.children}</div>;
};

const Container = styled(Thing)`
  transition: all 0.2s;
  padding: 12px;
  margin-left: ${(props) => (props.active ? "px" : "24px")};
  background: ${(props) => (props.active ? "#333" : "#f2f2f2")};
  color: ${(props) => (props.active ? "#f2f2f2" : "#333")};
`;

const InfoDropdown = () => {
  return <Container />;
};

export default InfoDropdown;
