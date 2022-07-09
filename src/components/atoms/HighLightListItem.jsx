import React from "react";
import styled from "styled-components";

const HighLightListItem = ({ title }) => {
  return (
    <Item>
      <PicContainer>
        <PicHolder className="picture"></PicHolder>
      </PicContainer>
      <Title className="title">{title}</Title>
    </Item>
  );
};
export default HighLightListItem;
const Title = styled.div`
  width: 110px;
  padding-top: 10px;
  font-weight: 600;
`;

const PicContainer = styled.div`
  max-height: 110px;
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  &:hover .picture {
    transition: transform 0.1s ease-in;
    transform: scale(1.07);
    box-shadow: 0px 1px 10px lightgrey;
  }

  &:hover .title {
    border-bottom: 2px solid black;
    opacity: 0.4;
  }
`;
const PicHolder = styled.div`
  background-color: lightblue;
  height: 110px;
  width: 110px;
  border-radius: 50%;
`;
