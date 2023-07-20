import { useState } from "react";
import axios from "axios";

import styled from "styled-components";
import SocialLoginButton from "../atoms/SocialLoginButton";
import RegistrationForm from "./RegistrationForm";

const SignInModal = ({ onClose, show, dispatch }) => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [emailAndPass, setEmailAndPass] = useState({
    email: "",
    password: "",
  });

  if (!show) {
    return null;
  }
  const handleInputs = (e) => {
    e.preventDefault();
    setEmailAndPass({ ...emailAndPass, [e.target.name]: e.target.value });
  };

  const handleSignIn = async () => {
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/users/sign-in`,
        emailAndPass
      );
      dispatch({ type: "sign-in", payload: result.data });
    } catch (error) {
      console.error(error, "client: login error");
    }
  };
  return (
    <ModalContainer onClick={onClose}>
      <ModalContentContainer onClick={(e) => e.stopPropagation()}>
        {isRegistering ? (
          <RegistrationForm
            dispatch={dispatch}
            setIsRegistering={setIsRegistering}
          />
        ) : (
          <>
            <RegisterContainer>
              <h2 style={{ color: "#222" }}>Sign in</h2>
              <div style={{ fontSize: 0, width: "46%" }}>spacer</div>
              <RegisterButton onClick={() => setIsRegistering((curr) => !curr)}>
                Register
              </RegisterButton>
            </RegisterContainer>
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
                value={emailAndPass.email}
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
                value={emailAndPass.password}
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
            <SignInButton onClick={() => handleSignIn(emailAndPass)}>
              Sign in
            </SignInButton>
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
              <div style={{ zIndex: 3, padding: "15px 0px", color: "#595959" }}>
                OR
              </div>
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
              voluptatibus, provident, omnis ipsum. Sed sequi hic nihil nemo
              quasi quisquam praesentium ratione.
            </p>
          </>
        )}
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
    transition: all 200ms ease-out;
    transform: scale(1.03);
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
  border-radius: 50%;
  z-index: 10;
  background-color: #8a88889f;
  &:hover {
    transition: background-color 0.2s ease-in;
    background-color: #8a88884f;
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
  padding: 30px 0px;
  gap: 5px;
  border: 1px solid black;
  z-index: 10;
  overflow: hidden;
`;
const ModalContentContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 30%;
  height: 90%;
  background-color: #ffff;
  z-index: 5;
  max-width: 384px;
  border-radius: 24px;
`;

const RegisterButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #222;
  padding: 8px 18px;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 600;
  margin: 12px 0px;
  cursor: pointer;
  border: 2.5px solid #222;
  &:hover {
    transition: all 0.3s;
    box-shadow: 0 0 11px #a4a4a4;
  }
`;
