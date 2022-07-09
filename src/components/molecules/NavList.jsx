import React, { useState } from "react";
import styled from "styled-components";
import NavItem from "../atoms/NavItem";
import navTitles from "../../data/navTitles";

const NavList = () => {
  const [navList, _] = useState(navTitles);
  return (
    <List>
      {navList.map((navItem) => (
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
