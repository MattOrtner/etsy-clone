import React from "react";
import styled from "styled-components";

const HighLightListItem = () => {
  return (
    <Item>
      <PicHolder></PicHolder>
      <div>This is a category</div>
    </Item>
  );
};

export default HighLightListItem;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 50px;
`;
const PicHolder = styled.div`
  background-color: lightblue;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
`;
