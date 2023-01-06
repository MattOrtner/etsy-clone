import React from "react";
import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import PromiseBar from "../atoms/PromiseBar";
import ShoppingCartItem from "../molecules/ShoppingCartItem";

const ShoppingCartPage = () => {
  const [shoppingCart, setShoppingCart] = useOutletContext();
  console.log("shoppingCart", shoppingCart);

  return (
    <Container>
      {shoppingCart.length ? (
        <ContentContainer>
          <ItemReminderBar>
            <h3 style={{ fontWeight: 300, fontSize: "x-large" }}>
              {shoppingCart.length === 1
                ? `${shoppingCart.length} item in your cart`
                : `${shoppingCart.length} items in your cart`}
            </h3>
            <b>Keep Shopping</b>
          </ItemReminderBar>
          <PromiseBar />
          <ProductCheckoutContainer>
            <Cart>
              {shoppingCart.length &&
                shoppingCart.map((product) => (
                  <ShoppingCartItem product={product} />
                ))}
            </Cart>
            <Checkout>right</Checkout>
          </ProductCheckoutContainer>
        </ContentContainer>
      ) : (
        <NoProductContainer>
          <NPTopContainer>
            <PromiseBar />
            <h1 style={{ fontWeight: 300 }}>Your cart is empty.</h1>
            <div>
              <u>Discover something unique to fill it up</u>
            </div>
          </NPTopContainer>
          <FooterContainer>
            <FooterContainerTop>
              <PrivacyAndSettingContainers
                style={{ flex: 1, justifyContent: "flex-start" }}
              >
                <Padding>United States</Padding>
                <Padding>|</Padding>
                <Padding>English (US)</Padding>
                <Padding>|</Padding>
                <Padding>$(USD)</Padding>
              </PrivacyAndSettingContainers>
              <PrivacyAndSettingContainers
                style={{ flex: 2, justifyContent: "flex-end" }}
              >
                <Padding>2023 Etsy, Unc</Padding>
                <Padding>
                  <u>Terms of Use</u>
                </Padding>
                <Padding>
                  <u>Privacy</u>
                </Padding>
                <Padding>
                  <u>Interest-based ads</u>
                </Padding>
                <Padding>
                  <u>Regions</u>
                </Padding>
                <Padding>
                  <u>Help Center</u>
                </Padding>
              </PrivacyAndSettingContainers>
            </FooterContainerTop>
            <BottomLegalContainer>
              <div>
                The definition of 'merchant' according to Oxfrod Languages; a
                person or company involved in wholesale trade,
              </div>
              <div>
                especially one dealing with foreign countries or supplying
                merchandise to a particular trade. "a tea merchant"
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "100%",
                  paddingTop: 36,
                }}
              >
                <span>We think that is really cool over here.</span>
                <span>We actually think, that tea is super cool.</span>
              </div>
            </BottomLegalContainer>
          </FooterContainer>
        </NoProductContainer>
      )}
    </Container>
  );
};

export default ShoppingCartPage;
const BottomLegalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 43px 24px;
  gap: 14px;
`;

const Padding = styled.div`
  padding: 10px;
`;
const PrivacyAndSettingContainers = styled.div`
  display: flex;
  justify-content: center;
  ${"" /* gap: 8px; */}
`;

const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 15px;
  flex-direction: column;
  border-top: 2px solid rgba(121 104 72 / 43%);
  z-index: -14;
`;

const FooterContainerTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NoProductContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const NPTopContainer = styled.div`
  width: 100%;
  height: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Cart = styled.div`
  background-color: lightgreen;
  flex: 2;
  height: 100%;
  margin: 0px 18px 0px 0px;
`;
const Checkout = styled.div`
  background-color: orange;
  height: 100%;
  flex: 1;
  margin: 0px 0px 0px 18px;
`;
const ProductCheckoutContainer = styled.div`
  display: flex;
  height: 80%;
  align-items: center;
`;

const ItemReminderBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  padding-bottom: 12px;
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  max-width: 1500px;
  padding: 24px 36px;
`;
