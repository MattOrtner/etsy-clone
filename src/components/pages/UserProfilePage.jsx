import { Link, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import PhotoPlaceholder from "../atoms/PhotoPlaceholder";
import axios from "axios";
import InventoryItem from "../molecules/InventoryItem";

const UserProfilePage = () => {
  const [user, dispatch] = useOutletContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        if (user.inventory.length > 0) {
          setIsLoading(true);
          const {
            data: { products },
          } = await axios.get(
            `${process.env.REACT_APP_API_URL}/api/products/user/inventory/${user.id}`
          );

          dispatch({ type: "fetch-inventory-data", payload: products });
        }
        setIsLoading(false);
      } catch (err) {
        console.error(err, "err");
      }
    })();
  }, [user.id, user.inventory]);

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
            {user.id ? <div>{user.id}</div> : <div>nice</div>}
            <div>
              <u>{user.storeData ? user.storeData.starRating : ""}</u>
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
      <Body>
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              margin: "3rem 0rem",
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
        {isLoading ? (
          <h1
            style={{
              fontWeight: 350,
              fontFamily: "Georgia",
              padding: "2rem 4rem",
              border: "1px solid gray",
              borderRadius: "1.75rem",
            }}
          >
            Fetching inventory, one moment...
          </h1>
        ) : (
          <InventoryContainer>
            {user.inventory.length > 0
              ? user.fullItemInventory
                ? user.fullItemInventory.map((product) => (
                    <InventoryItem
                      id={product.id}
                      key={product.id}
                      images={
                        product.images
                          ? product.images
                          : "No Images for this product"
                      }
                      name={product.name}
                      price={product.price}
                      description={product.description}
                      quantity={product.quantity}
                      type={product.productType}
                      renewalOption={product.renewalOption}
                    />
                  ))
                : ""
              : ""}
          </InventoryContainer>
        )}
        {user.inventory.length < 0 && (
          <div>
            <PhotoPlaceholder
              height={"9rem"}
              width={"9rem"}
              backgroundColor={"lightblue"}
              borderRadius={"50%"}
            />
            <CenterPiece>
              <NothingMessage>Nothing to see here yet</NothingMessage>
              <p style={{ fontSize: "1.2rem", fontWeight: 300 }}>
                Add products to your store with the plus button located next to
                your store name. <br />
                or <br /> Favorite items to compare, shop, and keep track of
                things you love.
              </p>
            </CenterPiece>
          </div>
        )}
      </Body>
    </ScreenContainer>
  );
};
export default UserProfilePage;
const InventoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  padding-bottom: 2rem;
`;

const CenterPiece = styled.div`
  text-align: center;
  margin: 1rem 0px;
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
const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
