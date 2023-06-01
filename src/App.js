import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import CUSTOMER from "./data/customer-data";

import logoIcon from "./assets/etsy_logo.svg";
import magnifyingGlassIcon from "./assets/magnifying_glass.svg";
import shoppingCartIcon from "./assets/shopping_cart.svg";

import HeartOutlineIcon from "./components/atoms/HeartOutlineIcon";
import UserProfileDropDown from "./components/molecules/UserProfileDropDown";
import Footer from "./components/molecules/Footer";
import SignInModal from "./components/organisms/SignInModal";
import NavigationContainer from "./components/organisms/NavigationContainer";

function App() {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [user, setUser] = useState(CUSTOMER);

  const toggleSignInModal = () => {
    setShowSignInModal((show) => !show);
  };

  return (
    <div>
      <HeaderContainer>
        <NavLink to="/">
          <Logo src={logoIcon} />
        </NavLink>
        <SearchBar>
          <SearchInput type="text" placeholder="Search for anything" />
          <SearchButton>
            <SearchButtonIcon src={magnifyingGlassIcon} />
          </SearchButton>
        </SearchBar>
        <UserDashboard>
          {user.isSignedIn ? (
            <>
              <Link to="/favorites">
                <HeartOutlineIcon styles={{ margin: ".25rem" }} />
              </Link>
              <UserProfileDropDown name={user.name} />
            </>
          ) : (
            <SignInButton onClick={toggleSignInModal}>Sign In</SignInButton>
          )}
          <NavLink to="/cart">
            <CheckoutLink src={shoppingCartIcon}></CheckoutLink>
          </NavLink>
        </UserDashboard>
      </HeaderContainer>
      <NavigationContainer />
      <SignInModal onClose={toggleSignInModal} show={showSignInModal} />
      <Outlet
        context={[shoppingCart, setShoppingCart]}
        userContext={[user, setUser]}
      />
      <Footer />
    </div>
  );
}

export default App;

const Link = styled(NavLink)`
  cursor: pointer;
  display: flex;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid #25252525;
  transition: all 250ms ease-in-out;
  &:hover {
    box-shadow: 0px 0px 15px #cccccc;
  }
`;
const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 72px;
  padding: 12px 36px;
`;
const Logo = styled.img`
  height: 40px;
  width: 80px;
  padding-right: 8px;
`;
const SearchBar = styled.div`
  height: 48px;
  flex: 1;
  padding-right: 18px;
  display: flex;
`;
const SearchInput = styled.input`
  width: 100%;
  padding: 9px 42px 9px 18px;
  background-color: rgba(34, 34, 34, 0.05);
  border: 2px solid black;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  border-right: none;
  font-size: 15px;
  &:focus {
    outline: none;
  }
`;

const SearchButton = styled.button`
  width: 60px;
  border: 2px solid black;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  border-left: none;
  background-color: rgba(34, 34, 34, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SearchButtonIcon = styled.img`
  height: 20px;
  width: 20px;
`;
const UserDashboard = styled.div`
  display: flex;
  align-items: center;
  padding-right: 15px;
`;
const CheckoutLink = styled.img`
  height: 20px;
  width: 20px;
  padding: 12px;
`;
const SignInButton = styled.button`
  border: none;
  border-radius: 8px;
  font-weight: bold;
  font-size: 13px;
  background-color: transparent;
  padding: 9px 15px;
  cursor: pointer;
  transition: all 0.3s ease-out;
  &:hover {
    background-color: #f5d9e5;
  }
`;
