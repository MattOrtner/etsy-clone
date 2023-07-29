import { Link, useOutletContext } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import PhotoPlaceholder from "../atoms/PhotoPlaceholder";

const UserProfilePage = () => {
  const [user, _] = useOutletContext();
  const [inventory, setInventory] = useState((user.fullInventory = []));
  console.log("user", user);

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
              <u>{user.name}</u>
            </div>
            <div style={{ display: "flex", gap: 5 }}>
              <u style={{ fontSize: "1.1rem", fontWeight: 300 }}>
                Edit public profile
              </u>
              <u style={{ fontSize: "1.1rem", fontWeight: 300 }}>About</u>
            </div>
          </div>
        </ProfileHeader>
        <div style={{ display: "flex", gap: 5 }}>
          <div>
            {user.hasOwnProperty("id") ? (
              <div>nice</div>
            ) : (
              <div>{user._id}</div>
            )}
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
        <div style={{ width: "100%" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              margin: "10rem 0rem",
              gap: 10,
            }}
          >
            <h1 style={{ fontWeight: 400, fontFamily: "Georgia" }}>
              {user.storeName}
            </h1>
            <Link
              to="/create-listing"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <PhotoPlaceholder
                height={"4rem"}
                width={"4rem"}
                backgroundColor={"lightblue"}
                borderRadius={"1rem"}
                border={true}
              >
                +
              </PhotoPlaceholder>
            </Link>
          </div>
        </div>
        {user.favoriteProducts.length > 0 ? (
          <>
            <h2 style={{ fontWeight: 400, fontFamily: "Georgia" }}>
              Head over to your favorites page located next to the top of the
              screen search bar.
            </h2>
          </>
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
                things you love. <br />
                or <br /> Click that + button to start sharing your items.
              </p>
            </CenterPiece>
          </>
        )}
      </Content>
    </ScreenContainer>
  );
};
export default UserProfilePage;

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
`;
