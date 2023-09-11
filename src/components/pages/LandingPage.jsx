import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import MULTIPLE_SINGLE_DUMMY_PRODUCTS from "../../data/multiple-dummie-products";

import HighLightList from "../molecules/HighLightList";
import SectionTitle from "../atoms/SectionTitle";
import PopularItem from "../atoms/PopularItem";
import PersonalizedGifts from "../organisms/PersonalizedGifts";
import LoadingBlocks from "../molecules/LoadingBlocks";

const LandingPage = () => {
  const [products, setProducts] = useState(MULTIPLE_SINGLE_DUMMY_PRODUCTS);
  const [greeting, setGreeting] = useState(
    "Discover our top Fall finds from creative sellers!"
  );
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/products`
        );
        setProducts(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setProducts(MULTIPLE_SINGLE_DUMMY_PRODUCTS);
        setIsLoading(false);
      }
    })();
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
      <PopularContainer>
        <SectionTitleContainer>
          <SectionTitle title={"Todays Popular Buys"} />
        </SectionTitleContainer>
        <SquarePhotoList>
          {isLoading ? (
            <LoadingBlocks />
          ) : (
            products.length > 0 &&
            products.map((product) => (
              <PopularItem
                key={product.id}
                price={product.price}
                id={product.id}
                image={product.images ? product.images[0] : ""}
              />
            ))
          )}
        </SquarePhotoList>
      </PopularContainer>
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
  width: 95%;
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
  /* height: 335px; */
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
  margin-bottom: 2rem;
`;
