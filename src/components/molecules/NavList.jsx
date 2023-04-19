import React from "react";
import styled from "styled-components";
import NavItem from "../atoms/NavItem";
import navTitles from "../../data/nav-titles";

const NavList = () => {
  return (
    <List>
      {navTitles.map((navItem) => (
        <NavItem title={navItem.title} key={navItem.id} />
      ))}
    </List>
  );
};

export default NavList;
const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
