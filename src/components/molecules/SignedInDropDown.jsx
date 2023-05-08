import { useState } from "react";
import styled from "styled-components";

const SignedInDropDown = ({ name }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid blue",
          padding: 5,
          backgroundColor: "blue",
        }}
        onClick={() => setIsOpen((isIt) => !isIt)}
      >
        <div>P √ </div>
      </div>
      {isOpen && (
        <DropDownContainer>
          <DropDownButton>
            <Icon>0</Icon>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div>{name}</div>
              <div>View your profile</div>
            </div>
          </DropDownButton>
          <DropDownButton>
            <Icon>0</Icon>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div>Purchases and reviews</div>
            </div>
          </DropDownButton>
          <DropDownButton>
            <Icon>0</Icon>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div>Gift card balances: $0.00</div>
            </div>
          </DropDownButton>
          <DropDownButton>
            <Icon>0</Icon>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div>Messages</div>
            </div>
          </DropDownButton>
          <DropDownButton>
            <Icon>0</Icon>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div>Your offers</div>
            </div>
          </DropDownButton>
          <DropDownButton>
            <Icon>0</Icon>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div>Account settings</div>
            </div>
          </DropDownButton>
          <DropDownButton>
            <Icon>0</Icon>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div>Sell on Etsy</div>
            </div>
          </DropDownButton>
          <DropDownButton style={{ margin: ".75rem 0 0 0" }}>
            <Icon>0</Icon>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div>Sign out</div>
            </div>
          </DropDownButton>
        </DropDownContainer>
      )}
    </div>
  );
};
export default SignedInDropDown;
const DropDownContainer = styled.div`
  box-shadow: 1px 1px 5px gray;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  position: absolute;
  border-radius: 18px;
  top: 40px;
  left: -16rem;
  z-index: 5;
  overflow: hidden;
  background-color: whitesmoke;
`;
const DropDownButton = styled.div`
  display: flex;
  align-items: center;
  width: 16rem;
`;
const Icon = styled.div`
  margin: 10px;
  font-weight: 700;
  font-size: 1.25rem;
`;
