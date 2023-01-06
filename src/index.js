import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import LandingPage from "./components/organisms/LandingPage";
import ProductPage from "./components/organisms/ProductPage";
import ProductListings from "./components/organisms/ProductsListing";
import WrapperComp from "./components/organisms/WrapperComp";
import ShoppingCartPage from "./components/organisms/ShoppingCartPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<LandingPage />} />
          <Route path="/product/:id" element={<WrapperComp />}>
            <Route path="/product/:id" element={<ProductPage />} />
          </Route>
          <Route path="/product/listings" element={<WrapperComp />}>
            <Route path="/product/listings" element={<ProductListings />} />
          </Route>
          <Route path="/cart" element={<WrapperComp />}>
            <Route path="/cart" element={<ShoppingCartPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
