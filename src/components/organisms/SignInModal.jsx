import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import SocialLoginButton from "../atoms/SocialLoginButton";

const SignInModal = ({ onClose, show }) => {
  if (!show) {
    return null;
  }

  return (
    <ModalContainer onClick={onClose}>
      <ModalContentContainer onClick={(e) => e.stopPropagation()}>
        <RegisterContainer>
          <h2 style={{ color: "#222" }}>Sign in</h2>
          <div style={{ fontSize: 0, width: "22%" }}>spacer</div>
          <div style={{ fontSize: 0, width: "22%" }}>spacer</div>
          <RegisterButton>Register</RegisterButton>
        </RegisterContainer>
        <InputContainer>
          <label
            style={{ fontWeight: 500, color: "#222222", paddingBottom: "5px" }}
            htmlFor="email"
          >
            Email address
          </label>
          <Input type="email" name="email" id="email" required />
        </InputContainer>
        <InputContainer>
          <label
            style={{ fontWeight: 500, color: "#222222", paddingBottom: "5px" }}
            htmlFor="password"
          >
            Password
          </label>
          <Input type="password" name="password" id="password" required />
        </InputContainer>
        <EngageContainer>
          <CheckContainer>
            <input
              style={{
                accentColor: "black",
                height: 30,
                width: 23,
                border: "1px solid black",
                cursor: "pointer",
              }}
              type="checkbox"
              name="staysigned"
              id=""
            />
            <label style={{ fontSize: 18 }} htmlFor="staysigned">
              Stay signed in
            </label>
          </CheckContainer>
          <u style={{ cursor: "pointer" }}>Forgot your password</u>
        </EngageContainer>
        <SignInButton>Sign in</SignInButton>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <u style={{ padding: "15px 0px", color: "#595959" }}>
            Trouble signing in?
          </u>
          <div style={{ padding: "15px 0px", color: "#595959" }}>OR</div>
        </div>
        <SocialLoginButton
          name="Google"
          border={"black"}
          color={"black"}
          logo="orange"
        />
        <SocialLoginButton
          name="Facebook"
          border={"black"}
          color={"black"}
          logo="blue"
        />
        <SocialLoginButton
          name="Apple"
          border={"black"}
          color={"black"}
          logo="gray"
        />
        <p
          style={{
            color: "#595959",
            fontSize: 18,
            margin: 18,
            fontFamily: "Graphik Webfont",
          }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
          blanditiis temporibus error rem quis architecto ullam voluptatum
          voluptatibus, provident, omnis ipsum. Sed sequi hic nihil nemo quasi
          quisquam praesentium ratione.
        </p>
      </ModalContentContainer>
      <CloseButtonContainer>
        <CloseButton>X</CloseButton>
      </CloseButtonContainer>
    </ModalContainer>
  );
};

export default SignInModal;

const EngageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  height: 40px;
`;
const CheckContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
const SignInButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  height: 3rem;
  border-radius: 2rem;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    transition: all 300ms ease-in;
    transform: scale(1.06);
  }
`;
const Input = styled.input`
  border-radius: 6px;
  height: 48px;
  padding: 0px 12px;
  font-size: 18px;
  color: #222;
  border: 1px solid rgba(34, 34, 34, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  appearance: none;
  background: #fff;
  box-shadow: 0 1px 4px 0 rgb(34 34 34 / 10%) inset;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 10px;
`;

const RegisterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const CloseButtonContainer = styled.div`
  height: 55%;
  display: flex;
`;
const CloseButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 50px;
  height: 50px;
  padding: 10px;
  font-size: 24px;
  color: white;
  &:hover {
    transition: background-color 150ms ease-in;
    background-color: #8a8888;
  }
`;

const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: #4444447a;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border: 1px solid black;
  z-index: 3;
`;
const ModalContentContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 15px;
  height: 55%;
  width: 25%;
  background-color: #ffff;
  z-index: 5;
  max-width: 384px;
  border-radius: 24px;
`;

const RegisterButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid #222;
  color: #222;
  padding: 8px 25px;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 600;
  margin: 12px 0px;
  cursor: pointer;
  &:hover {
    transition: background-color 150ms ease-in;
    background-color: #d9d9d9;
  }
`;
// const TopContainer = styled.div`
//   height: 20%;
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;
// const Spacer = styled.div`
//   color: white;
//   background: green;
//   flex: 1;
//   font-size: 0;
// `;
// const RelatedItemsContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   display: grid;
//   width: 100%;
// `;
// const RecItemsContainer = styled.div`
//   height: 80%;
//   display: grid;
//   grid-template-columns: 1fr 1fr;
// `;
