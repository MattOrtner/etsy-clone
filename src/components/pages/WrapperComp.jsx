import React from "react";
import { Outlet, useOutletContext } from "react-router-dom";

const WrapperComp = () => {
  const [shoppingCart, setShoppingCart] = useOutletContext();
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Outlet context={[shoppingCart, setShoppingCart]} />
    </div>
  );
};

export default WrapperComp;
