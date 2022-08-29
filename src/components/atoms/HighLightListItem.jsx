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
  display: inline-block;
  flex-direction: column;
  text-align: center;
  align-items: center;
  cursor: pointer;
  &:hover .picture {
    transition: transform 0.1s ease-in;
    transform: scale(1.07);
    box-shadow: 0px 4px 18px #22222226;
  }
  &:hover .title {
    opacity: 0.3;
  }

  &:hover::after {
    content: "";
    position: absolute;
    width: 100px;
    height: 3px;
    background: rgb(61, 61, 61);
    transition: all 0.4s ease-in-out;
    transform: translateX(-50px);
  }
`;
const PicHolder = styled.div`
  background-color: lightblue;
  height: 110px;
  width: 110px;
  border-radius: 50%;
`;
