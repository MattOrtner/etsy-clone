import { useEffect, useState } from "react";
import styled from "styled-components";
import HighLightList from "../molecules/HighLightList";
import SectionTitle from "../atoms/SectionTitle";
import PopularItem from "../atoms/PopularItem";
import PersonalizedGifts from "../organisms/PersonalizedGifts";
import axios from "axios";
import MULTIPLE_SINGLE_DUMMY_PRODUCTS from "../../data/multiple-dummie-products";

const LandingPage = () => {
  const [products, setProducts] = useState(MULTIPLE_SINGLE_DUMMY_PRODUCTS);
  const [greeting, setGreeting] = useState(
    "Discover fresh summer finds from creative sellers!"
  );

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/api/products`)
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.error(err);
        console.log("this was an error catch block");
      });
  }, []);
  return (
    <OutletContainer>
      <GreetingContainer>
        <BackSplash />
        <TitleContainer>
          <Title>{greeting}</Title>
        </TitleContainer>
        <HighLightList />
      </GreetingContainer>
      {products.length > 0 && (
        <PopularContainer>
          <SectionTitleContainer>
            <SectionTitle title={"Recently viewed & more"} />
          </SectionTitleContainer>
          <SquarePhotoList>
            {products &&
              products.map((product) => (
                <PopularItem price={product.price} id={product._id} />
              ))}
          </SquarePhotoList>
        </PopularContainer>
      )}
      <PersonalRecContainer>
        <PersonalizedGifts />
      </PersonalRecContainer>
    </OutletContainer>
  );
};

export default LandingPage;

const OutletContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const PersonalRecContainer = styled.div`
  width: 100%;
  margin-right: 0 auto;
  max-width: 1500px;
`;
const SquarePhotoList = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1.2rem;
  max-width: inherit;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const PopularContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 335px;
  width: 100%;
  max-width: 1500px;
  overflow: hidden;
`;
const SectionTitleContainer = styled.div``;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #f8ebe6;
`;
const Title = styled.h1`
  letter-spacing: 0.5px;
  font-weight: 100;
  font-family: "Guardian-EgypTT", Charter, "Charter Bitstream", Cambria,
    "Noto Serif Light", "Droid Serif", Georgia, serif;
`;
const BackSplash = styled.div`
  position: absolute;
  top: 0;
  height: 8rem;
  width: 100%;
  z-index: -10;
  background-color: #f8ebe6;
`;
const GreetingContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
