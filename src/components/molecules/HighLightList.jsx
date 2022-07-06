import React, { useState } from "react";
import styled from "styled-components";
import HighLightListItem from "../atoms/HighLightListItem";
import highLights from "../../data/highLights";

const HighLightList = () => {
  const [list, setList] = useState(highLights);
  return (
    <List>
      {list ? list.map((item) => <HighLightListItem title={item.title} />) : ""}
    </List>
  );
};

export default HighLightList;

const List = styled.div`
  display: flex;
  width: 816;
  justify-content: space-around;
  padding: 0 36;
`;
