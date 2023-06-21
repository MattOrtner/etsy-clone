import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import styled from "styled-components";

import PromiseBar from "../atoms/PromiseBar";
import PaymentMethodCluster from "../molecules/PaymentMethodCluster";
import ShoppingCartItem from "../molecules/ShoppingCartItem";
import NoProductShoppingCart from "../organisms/NoProductShoppingCart";
import PhotoPlaceholder from "../atoms/PhotoPlaceholder";

const ShoppingCartPage = () => {
  const [shoppingCart, setShoppingCart] = useOutletContext();
  const [paymentType, setPaymentType] = useState("");
  const [orderTotal, setCartTotal] = useState();
  console.log("shoppingCart", shoppingCart);
  useEffect(() => {
    const sum = shoppingCart.reduce(
      (acc, item) => acc + parseInt(item.price) * item.quantity,
      0
    );
    setCartTotal(sum.toString());
  }, [shoppingCart]);
  const removeItem = (id) => {
    setShoppingCart((currCart) => [
      ...currCart.filter((item) => item.id !== id),
    ]);
  };
  return (
    <Container>
      {shoppingCart.length ? (
        <ContentContainer>
          <QuantityMessage>
            <h1 style={{ fontWeight: 300 }}>
              {shoppingCart.length === 1
                ? `${shoppingCart.length} item in your cart`
                : `${shoppingCart.length} items in your cart`}
            </h1>
            <b>Keep Shopping</b>
          </QuantityMessage>
          <PromiseBar />
          <ProductCheckoutContainer>
            <Cart>
              {shoppingCart.length &&
                shoppingCart.map((product, index) => (
                  <ShoppingCartItem
                    product={product}
                    index={index}
                    shoppingCart={shoppingCart}
                    setShoppingCart={setShoppingCart}
                    removeItem={removeItem}
                  />
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
                <PhotoPlaceholder
                  height={"1rem"}
                  width={"1rem"}
                  backgroundColor={"blue"}
                  styles={{ marginRight: 5 }}
                />
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
  width: 80%;
  height: 3rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
`;
const ItemsTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1.5rem 0px;
  font-size: 18px;
`;

const Checkout = styled.div`
  display: flex;
  flex-direction: column;
  height: 70%;
  flex: 1;
  padding: 1rem;
  border-radius: 1.1rem;
  gap: 0.6rem;
  box-shadow: 0 5px 40px rgb(34 34 34 / 15%);
`;
const Cart = styled.div`
  flex: 2;
  margin: 0px 18px 0px 0px;
`;
const ProductCheckoutContainer = styled.div`
  display: flex;
`;
const QuantityMessage = styled.div`
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
  width: 100vw;
  max-width: 1500px;
  padding: 1.5rem 2.25rem;
`;
