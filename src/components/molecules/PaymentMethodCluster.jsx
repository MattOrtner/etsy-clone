import React from "react";
import styled from "styled-components";

const PaymentMethodCluster = ({ paymentType, setPaymentType }) => {
  return (
    <PayGrouping>
      <Label htmlFor="cc">
        <input
          style={{ height: "30px", width: "30px" }}
          type="radio"
          name="payment"
          id="cc"
          checked={paymentType === "credit-card"}
          onChange={() => setPaymentType("credit-card")}
        />
        <div style={{ paddingLeft: 5 }}>Credit Card</div>
      </Label>
      <Label htmlFor="pay-pal">
        <input
          style={{ height: "30px", width: "30px" }}
          type="radio"
          name="payment"
          id="pay-pal"
          checked={paymentType === "pay-pal"}
          onChange={() => setPaymentType("pay-pal")}
        />
        <div style={{ paddingLeft: 5 }}>Pay Pal</div>
      </Label>
      <Label htmlFor="g-pal">
        <input
          style={{ height: "30px", width: "30px" }}
          type="radio"
          name="payment"
          id="g-pay"
          checked={paymentType === "g-pay"}
          onChange={() => setPaymentType("g-pay")}
        />
        <div style={{ paddingLeft: 5 }}>G Pay</div>
      </Label>
    </PayGrouping>
  );
};

export default PaymentMethodCluster;
const Label = styled.label`
  display: flex;
  align-items: center;
`;
const PayGrouping = styled.form`
  display: flex;
  gap: 7px;
  flex-direction: column;
`;
