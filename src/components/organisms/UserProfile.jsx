import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";
import PhotoPlaceholder from "../atoms/PhotoPlaceholder";

const UserProfile = () => {
  const [favoriteItems, setFavoriteItems] = useState([]);
  return (
    <ScreenContainer>
      <TopContainer>
        <ProfileHeader>
          <PhotoPlaceholder
            height={"3rem"}
            width={"3rem"}
            backgroundColor={"lightblue"}
            borderRadius={"50%"}
          />
          <div style={{ padding: 10 }}>
            <div style={{ fontSize: "1.5rem", fontWeight: 500 }}>
              <u>Matt</u>
            </div>
            <div style={{ display: "flex", gap: 5 }}>
              <u style={{ fontSize: "1.1rem", fontWeight: 300 }}>
                Edit public profile
              </u>
              <u style={{ fontSize: "1.1rem", fontWeight: 300 }}>About</u>
            </div>
          </div>
          <Link to="/future-add-form">
            <PhotoPlaceholder
              height={"3rem"}
              width={"3rem"}
              backgroundColor={"lightblue"}
              borderRadius={".5rem"}
              border={true}
            >
              +
            </PhotoPlaceholder>
          </Link>
        </ProfileHeader>
        <div style={{ display: "flex", gap: 5 }}>
          <div>
            <div>stnah3th3r5z513t234d</div>
            <div>
              <u>0 Sales</u>
            </div>
          </div>
          <PhotoPlaceholder
            height={"3rem"}
            width={"3rem"}
            borderRadius={".5rem"}
            backgroundColor={"lightblue"}
          />
        </div>
      </TopContainer>
      <Content>
        {favoriteItems.length > 0 ? (
          "Favorite stuff" // loop over items saved in favorites array
        ) : (
          <>
            <PhotoPlaceholder
              height={"9rem"}
              width={"9rem"}
              backgroundColor={"lightblue"}
              borderRadius={"50%"}
            />
            <CenterPiece>
              <NothingMessage>Nothing to see here yet</NothingMessage>
              <p style={{ fontSize: "1.2rem", fontWeight: 300 }}>
                Start favoriting items to compare, shop, and keep track of
                things you love.
              </p>
            </CenterPiece>
          </>
        )}
      </Content>
    </ScreenContainer>
  );
};
export default UserProfile;

const CenterPiece = styled.div`
  text-align: center;
  border-bottom: 1 solid black;
`;
const NothingMessage = styled.div`
  font-family: "Guardian-EgypTT", "Charter", "Charter Bitstream", "Cambria",
    "Noto Serif Light", "Droid Serif", Georgia, serif;
  font-weight: 300;
  font-size: 2rem;
  letter-spacing: 0.5px;
`;
const ProfileHeader = styled.div`
  display: flex;
  width: 60%;
  align-items: center;
`;

const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
  width: 70%;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 20px;
`;
const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 20rem;
`;
