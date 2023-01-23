import React from "react";
import styled from "styled-components";

const QuantitySelectDropdown = ({ handleChange, total, quantity = 1 }) => {
  return (
    <Container
      defaultValue={quantity}
      name="quantity"
      id="quantity"
      onChange={handleChange}
    >
      {Array.from({ length: total }, (_, i) => i + 1).map((num) => (
        <option key={num} value={num}>
          {num}
        </option>
      ))}
    </Container>
  );
};

export default QuantitySelectDropdown;

const Container = styled.select`
  width: 50px;
  height: 50px;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  border-radius: 10px;
`;
