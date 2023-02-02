import styled from "styled-components";
import logoIcon from "./assets/etsy_logo.svg";
import magnifyingGlassIcon from "./assets/magnifying_glass.svg";
import shoppingCartIcon from "./assets/shopping_cart.svg";
import NavigationContainer from "./components/organisms/NavigationContainer";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import SignInModal from "./components/organisms/SignInModal";

function App() {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [showSignInModal, setShowSignInModal] = useState(false);

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
          <SignInButton onClick={toggleSignInModal}>Sign In</SignInButton>
          <NavLink to={"/cart"}>
            <CheckoutLink src={shoppingCartIcon}></CheckoutLink>
          </NavLink>
        </UserDashboard>
      </HeaderContainer>
      <NavigationContainer />
      <SignInModal onClose={toggleSignInModal} show={showSignInModal} />
      <Outlet context={[shoppingCart, setShoppingCart]} />
    </div>
  );
}

export default App;

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
