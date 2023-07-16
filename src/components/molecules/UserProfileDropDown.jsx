import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import accountSVG from "../../assets/signed-in/account.svg";
import clipBoardSVG from "../../assets/signed-in/clipboard-text-outline.svg";
import giftSVG from "../../assets/signed-in/gift-outline.svg";
import msgSVG from "../../assets/signed-in/message-processing-outline.svg";
import settingsSVG from "../../assets/signed-in/cog-outline.svg";
import tagSVG from "../../assets/signed-in/tag-outline.svg";
import triangleSVG from "../../assets/signed-in/triangle-small-down.svg";
import { NavLink, useNavigate } from "react-router-dom";

const UserProfileDropDown = ({ name, dispatch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleSignOut = (e) => {
    e.preventDefault();
    // axios request to api/users/sign-out passing email

    navigate("/");
    dispatch({ type: "sign-out" });
  };

  return (
    <Container>
      <div
        style={{
          padding: "1rem",
        }}
        onClick={() => setIsOpen((isIt) => !isIt)}
      >
        <IconIMG src={accountSVG} style={{ margin: 0 }} />
        <IconIMG src={triangleSVG} style={{ margin: 0 }} />
      </div>
      {isOpen && (
        <DropDownContainer>
          <DropDownButton
            to="/user-profile"
            onClick={() => setIsOpen((isTrue) => !isTrue)}
            style={{ paddingTop: ".25rem" }}
          >
            <IconIMG src={accountSVG} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ fontSize: "1.3rem" }}>{name}</div>
              <div style={{ color: "#7c7c7c" }}>View your profile</div>
            </div>
          </DropDownButton>
          <DropDownButton
            to="/purchases-reviews"
            onClick={() => setIsOpen((isTrue) => !isTrue)}
          >
            <IconIMG src={clipBoardSVG} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div>Purchases and reviews</div>
            </div>
          </DropDownButton>
          <DropDownButton
            to="/gift-card"
            onClick={() => setIsOpen((isTrue) => !isTrue)}
          >
            <IconIMG src={giftSVG} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div>Gift card balances: $0.00</div>
            </div>
          </DropDownButton>
          <DropDownButton
            to="/messages"
            onClick={() => setIsOpen((isTrue) => !isTrue)}
          >
            <IconIMG src={msgSVG} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div>Messages</div>
            </div>
          </DropDownButton>
          <DropDownButton
            to="/user-profile"
            onClick={() => setIsOpen((isTrue) => !isTrue)}
          >
            <IconIMG src={tagSVG} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div>Your offers</div>
            </div>
          </DropDownButton>
          <DropDownButton
            to="/user-profile"
            onClick={() => setIsOpen((isTrue) => !isTrue)}
          >
            <IconIMG src={settingsSVG} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div>Account Settings</div>
            </div>
          </DropDownButton>
          <DropDownButton
            to="/"
            onClick={handleSignOut}
            style={{ marginTop: ".75rem" }}
          >
            <IconIMG src={accountSVG} />
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
    </Container>
  );
};
export default UserProfileDropDown;
const DropDownButton = styled(NavLink)`
  cursor: pointer;
  width: 100%;
  color: #252525;
  display: flex;
  align-items: center;
  padding: 0px 0.75rem;
  text-decoration: none;
  &:hover {
    background-color: #e0dddd;
  }
`;
const DropDownContainer = styled.div`
  box-shadow: 1px 1px 5px gray;
  display: flex;
  flex-direction: column;
  position: absolute;
  border-radius: 18px;
  top: 3rem;
  left: -14rem;
  z-index: 5;
  overflow: hidden;
  background-color: whitesmoke;
`;
const IconIMG = styled.img`
  height: 25px;
  width: 25px;
  margin: 10px 15px 10px 10px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  border-radius: 3rem;
  transition: background-color 0.3s;
  &:hover {
    background-color: #ededed;
  }
`;
