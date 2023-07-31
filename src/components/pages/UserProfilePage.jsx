import { Link, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import PhotoPlaceholder from "../atoms/PhotoPlaceholder";
import axios from "axios";

const UserProfilePage = () => {
  const [user, dispatch] = useOutletContext();
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    (async () => {
      try {
        if (user.inventory) {
          setIsLoading(true);
          const { data: response } = await axios.get(
            `${process.env.REACT_APP_SERVER_URL}/api/users/${user.id}/inventory`
          );
          dispatch({ type: "fetch-inventory-data", payload: response });
          setIsLoading(false);
        }
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
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              margin: "5rem 0rem",
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
          <h1 style={{ fontWeight: 350, fontFamily: "Georgia" }}>
            Fetching your inventory, one second please.
          </h1>
        ) : (
          <InventoryContainer>
            {user.fullItemInventory &&
              user.fullItemInventory.map((product) => (
                <ProductContainer key={product.id}>
                  <img
                    src={product.images[0]}
                    alt={product.product_name}
                    width={100}
                    height={"auto"}
                  />
                  <div>{product.product_name}</div>
                  <div>${product.price}</div>
                  <div>{product.description}</div>
                  <DetailContainer>
                    <div>quantity: {product.quantity}</div>
                    <div>renewal: {product.renewal_option}</div>
                    <div>type: {product.product_type}</div>
                  </DetailContainer>
                </ProductContainer>
              ))}
          </InventoryContainer>
        )}
        {user.inventory.length > 0 ? (
          <h2
            style={{
              fontWeight: 400,
              fontFamily: "Georgia",
              margin: "6rem auto",
            }}
          >
            Head over to your favorites page located next to the top of the
            screen search bar.
          </h2>
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
                Add products to your store with the plus button located next to
                your store name. <br />
                or <br /> Favorite items to compare, shop, and keep track of
                things you love.
              </p>
            </CenterPiece>
          </>
        )}
      </Content>
    </ScreenContainer>
  );
};
export default UserProfilePage;

const InventoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
`;
const DetailContainer = styled.div`
  margin-top: 1rem;
  border: 1px solid gray;
  padding: 0.5rem;
  border-radius: 0.5rem;
`;

const ProductContainer = styled.div`
  border: 2px solid gray;
  padding: 10px;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;
  max-width: 225px;
`;

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
