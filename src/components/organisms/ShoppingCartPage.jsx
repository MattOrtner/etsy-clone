import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import PromiseBar from "../atoms/PromiseBar";
import PaymentMethodCluster from "../molecules/PaymentMethodCluster";
import ShoppingCartItem from "../molecules/ShoppingCartItem";
import NoProductShoppingCart from "./NoProductShoppingCart";

const ShoppingCartPage = () => {
  const [shoppingCart, setShoppingCart] = useOutletContext();
  const [paymentType, setPaymentType] = useState("");
  const [orderTotal, setCartTotal] = useState();

  useEffect(() => {
    const sum = shoppingCart.reduce(
      (acc, item) => acc + parseInt(item.price) * item.quantity,
      0
    );
    setCartTotal(sum);
  }, [shoppingCart]);

  return (
    <Container>
      {shoppingCart.length ? (
        <ContentContainer>
          <ItemReminderBar>
            <h1 style={{ fontWeight: 300 }}>
              {shoppingCart.length === 1
                ? `${shoppingCart.length} item in your cart`
                : `${shoppingCart.length} items in your cart`}
            </h1>
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
            <Checkout>
              <div style={{ fontSize: 20 }}>How will you pay?</div>
              <PaymentMethodCluster
                paymentType={paymentType}
                setPaymentType={setPaymentType}
              />
              <ItemsTotal>
                <div>Item(s) total</div>
                <div>${orderTotal}.00</div>
              </ItemsTotal>
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    height: "1rem",
                    width: "1rem",
                    backgroundColor: "blue",
                    marginRight: 5,
                  }}
                ></div>
                <u>Get Shipping Costs</u>
              </div>
              <CheckoutButton>Proceed to checkout</CheckoutButton>
            </Checkout>
          </ProductCheckoutContainer>
        </ContentContainer>
      ) : (
        <NoProductShoppingCart />
      )}
    </Container>
  );
};

export default ShoppingCartPage;

const CheckoutButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  width: 100%;
  height: 3rem;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;
const ItemsTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 24px 0px;
  font-size: 18px;
`;

const Checkout = styled.div`
  display: flex;
  flex-direction: column;
  height: 70%;
  flex: 1;
  padding: 15px;
  border-radius: 18px;
  gap: 10px;
  box-shadow: 0 5px 40px rgb(34 34 34 / 15%);
`;
const Cart = styled.div`
  flex: 2;
  margin: 0px 18px 0px 0px;
`;
const ProductCheckoutContainer = styled.div`
  display: flex;
  height: 70%;
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
