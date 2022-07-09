import styled from "styled-components";
import logoIcon from "./assets/etsy_logo.svg";
import magnifyingGlassIcon from "./assets/magnifying_glass.svg";
import shoppingCartIcon from "./assets/shopping_cart.svg";
import NavigationContainer from "./components/organisms/NavigationContainer";
import HighLightList from "./components/molecules/HighLightList";
import SectionTitle from "./components/atoms/SectionTitle";
function App() {
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
      <GreetingContainer>
        <BackSplash />
        <TitleContainer>
          <Title>Discover fresh summer finds from creative sellers!</Title>
        </TitleContainer>
        <HighLightList />
      </GreetingContainer>
      <PopularContainer>
        <SectionTitle title={"Popular gifts right now"} />
      </PopularContainer>
    </div>
  );
}

export default App;
const PopularContainer = styled.div`
  padding: 10px 20px;
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fdebd2;
  width: 100%;
`;
const Title = styled.h1`
  letter-spacing: 0.5px;
  font-weight: 100;
  font-family: "Guardian-EgypTT", Charter, "Charter Bitstream", Cambria,
    "Noto Serif Light", "Droid Serif", Georgia, serif;
`;
const BackSplash = styled.div`
  background-color: #fdebd2;
  position: absolute;
  height: 100px;
  width: 100%;
  z-index: -1;
`;
const GreetingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
