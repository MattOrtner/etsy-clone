import styled from "styled-components";
import logoIcon from "./assets/etsy_logo.svg";
import magnifyingGlassIcon from "./assets/magnifying_glass.svg";
import shoppingCartIcon from "./assets/shopping_cart.svg";
import NavigationContainer from "./components/organisms/NavigationContainer";
import { useState } from "react";
import { Outlet } from "react-router-dom";
const { REACT_APP_SERVER_URL } = process.env;

function App() {
  const [products, setProducts] = useState();
  // console.log(products);

  return (
    <div className="App">
      <HeaderContainer>
        <Logo src={logoIcon} />
        <SearchBar>
          <SearchInput type="text" placeholder="Search for anything" />
          <SearchButton>
            <SearchButtonIcon src={magnifyingGlassIcon} />
          </SearchButton>
        </SearchBar>
        <UserDashboard>
          <SignInButton>Sign In</SignInButton>
          <CheckoutLink src={shoppingCartIcon} />
        </UserDashboard>
      </HeaderContainer>
      <NavigationContainer />
      <Outlet context={[products, setProducts]} />
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
  font-weight: bold;
  font-size: 13px;
  background-color: transparent;
  padding: 9px 15px;
`;
