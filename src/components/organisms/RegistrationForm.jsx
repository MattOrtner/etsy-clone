import { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const RegistrationForm = ({ dispatch, setIsRegistering }) => {
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleRegister = async () => {
    try {
      const { data: response } = await axios.post(
        `${process.env.REACT_APP_API_URL}api/users`,
        { ...signUpData }
      );

      dispatch({ type: "sign-in", payload: response });
    } catch (error) {
      console.error("error", error);
    }
  };

  const handleInputs = (e) => {
    e.preventDefault();
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "10rem",
          marginBottom: "2.5rem",
          marginLeft: "1rem",
        }}
      >
        <h1 style={{ width: "75%" }}>WELCOME</h1>
        <CloseRegisterModal onClick={() => setIsRegistering((curr) => !curr)}>
          Sign-In?
        </CloseRegisterModal>
      </div>
      <InputContainer>
        <label
          style={{
            fontWeight: 500,
            color: "#222222",
            paddingBottom: "5px",
          }}
          htmlFor="name"
        >
          Name
        </label>
        <Input
          type="text"
          name="name"
          id="name"
          onChange={handleInputs}
          required
        />
      </InputContainer>
      <InputContainer>
        <label
          style={{
            fontWeight: 500,
            color: "#222222",
            paddingBottom: "5px",
          }}
          htmlFor="email"
        >
          Email address
        </label>
        <Input
          type="email"
          name="email"
          id="email"
          onChange={handleInputs}
          required
        />
      </InputContainer>
      <InputContainer>
        <label
          style={{
            fontWeight: 500,
            color: "#222222",
            paddingBottom: "5px",
          }}
          htmlFor="password"
        >
          Password
        </label>
        <Input
          type="password"
          name="password"
          id="password"
          onChange={handleInputs}
          required
        />
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
        <u style={{ cursor: "pointer" }}>Forgot your password?</u>
      </EngageContainer>
      <SignInButton onClick={() => handleRegister(signUpData)}>
        Sign-up
      </SignInButton>
    </div>
  );
};
export default RegistrationForm;

const CloseRegisterModal = styled.h4`
  font-weight: 400px;
  border: 1px solid #252525;
  padding: 0.25rem;
  border-radius: 0.5rem;
  text-align: right;
`;
const EngageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;
  height: 40px;
`;
const CheckContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
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
    transition: all 200ms ease-out;
    transform: scale(1.03);
  }
`;
