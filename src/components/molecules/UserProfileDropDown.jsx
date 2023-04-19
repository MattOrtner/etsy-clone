import { useState } from "react";
import styled from "styled-components";
import accountSVG from "../../assets/signed-in/account.svg";
import clipBoardSVG from "../../assets/signed-in/clipboard-text-outline.svg";
import giftSVG from "../../assets/signed-in/gift-outline.svg";
import msgSVG from "../../assets/signed-in/message-processing-outline.svg";
import settingsSVG from "../../assets/signed-in/cog-outline.svg";
import tagSVG from "../../assets/signed-in/tag-outline.svg";
import triangleSVG from "../../assets/signed-in/triangle-small-down.svg";


const UserProfileDropDown = ({ name }) => {
  const [isOpen, setIsOpen] = useState(true);
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
          padding: "1rem",
        }}
        onClick={() => setIsOpen((isIt) => !isIt)}
      >
        <IconIMG src={accountSVG} style={{ margin: 0 }} />
        <IconIMG src={triangleSVG} style={{ margin: 0 }} />
      </div>
      {isOpen && (
        <DropDownContainer>
          <DropDownButton>
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
          <DropDownButton>
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
          <DropDownButton>
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
          <DropDownButton>
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
          <DropDownButton>
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
          <DropDownButton>
            <IconIMG src={settingsSVG} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div>Account settings</div>
            </div>
          </DropDownButton>
          <DropDownButton style={{ marginTop: "1.2rem" }}>
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
    </div>
  );
};
export default UserProfileDropDown;
const DropDownContainer = styled.div`
  box-shadow: 1px 1px 5px gray;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  position: absolute;
  border-radius: 18px;
  top: 3rem;
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
const IconIMG = styled.img`
  height: 25px;
  width: 25px;
  margin: 10px 15px 10px 10px;
`;
