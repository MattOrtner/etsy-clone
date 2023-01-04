import { useState } from "react";
import styled from "styled-components";

const DropDownInfoContainer = (props) => {
  const [active, setDisplay] = useState("none");
  const handleClick = () => {
    if (active === "none") {
      setDisplay("block");
    } else {
      setDisplay("none");
    }
  };
  return (
    <Container onClick={handleClick}>
      <Title>{props.title}</Title>
      <ChildContainer style={{ display: active }}>
        {props.children}
      </ChildContainer>
    </Container>
  );
};

export default DropDownInfoContainer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid black;
  color: #595959;
  padding: 12px 18px;
`;
const ChildContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  font-weight: 400;
  color: #595959;
`;
