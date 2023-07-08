import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import WrapperComp from "./components/pages/WrapperComp";
import LandingPage from "./components/pages/LandingPage";
import ProductPage from "./components/pages/ProductPage";
import ProductListings from "./components/pages/ProductsListing";
import ShoppingCartPage from "./components/pages/ShoppingCartPage";
import UserProfile from "./components/pages/UserProfile";
import CreateListing from "./components/pages/CreateListing";
import FavoritesPage from "./components/pages/FavoritesPage";
import ScrollToTop from "./ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
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
          <Route path="/user-profile" element={<WrapperComp />}>
            <Route path="/user-profile" element={<UserProfile />} />
          </Route>
          <Route
            path="/purchases-reviews"
            element={<h2>Here are the purchases and reviews</h2>}
          />
          <Route path="/favorites" element={<WrapperComp />}>
            <Route path="/favorites" element={<FavoritesPage />} />
          </Route>
          <Route path="/messages" element={<h2>Here are some messages</h2>} />
          <Route
            path="/account-settings"
            element={<h2>Here are some account settings.</h2>}
          />
          <Route
            path="/gift-card"
            element={<h2>Here is your gift card information</h2>}
          />
          <Route path="/create-listing" element={<WrapperComp />}>
            <Route path="/create-listing" element={<CreateListing />} />
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
