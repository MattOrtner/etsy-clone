import React, { useState } from "react";
import styled from "styled-components";
import HighLightListItem from "../atoms/HighLightListItem";
import HighLights from "../../data/highLights";

const HighLightList = () => {
  const [list, setList] = useState(HighLights);
  return (
    <List>
      {list
        ? list.map((item) => (
            <HighLightListItem title={item.title} key={item.id} />
          ))
        : ""}
    </List>
  );
};

export default HighLightList;

const List = styled.div`
  display: flex;
  width: 90%;
  max-width: 1400px;
  justify-content: space-evenly;
`;
