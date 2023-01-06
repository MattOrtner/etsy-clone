import React from "react";
import styled from "styled-components";

const PromiseBar = () => {
  return (
    <Container>
      <div
        style={{
          height: 50,
          width: 50,
          backgroundColor: "blue",
          margin: "0px 10px 0px 10px",
          borderRadius: 10,
        }}
      ></div>
      <p>
        <b style={{ paddingRight: 5 }}>Etsy Purchase Protection:</b>
        Shop confidently on Etsy knowing if something goes wrong with an order,
        we've got your back. <u>See program terms</u>
      </p>
    </Container>
  );
};

export default PromiseBar;

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 65px;
  background-color: #dfe6f5;
  border-radius: 15px;
  margin-bottom: 15px;
`;
