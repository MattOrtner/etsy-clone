import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import MULTIPLE_SINGLE_DUMMY_PRODUCTS from "../../data/multiple-dummie-products";

import HighLightList from "../molecules/HighLightList";
import SectionTitle from "../atoms/SectionTitle";
import PopularItem from "../atoms/PopularItem";
import PersonalizedGifts from "../organisms/PersonalizedGifts";
import PhotoPlaceholder from "../atoms/PhotoPlaceholder";
const { REACT_APP_API_URL } = process.env;

const LandingPage = () => {
  const [products, setProducts] = useState(MULTIPLE_SINGLE_DUMMY_PRODUCTS);
  const [greeting, setGreeting] = useState(
    "Discover fresh summer finds from creative sellers!"
  );
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // (async () => {
    //   try {
    //     const { data: response } = await axios.get(
    //       `${process.env.REACT_APP_SERVER_URL}/api/products`
    //     );
    //     setProducts(response);
    //     setIsLoading(false);
    //   } catch (error) {
    //     console.error(error);
    //     setProducts(MULTIPLE_SINGLE_DUMMY_PRODUCTS);
    //     setIsLoading(false);
    //   }
    // })();
    (async () => {
      try {
        const { data: response } = await axios.get(`${REACT_APP_API_URL}`);
        console.log("response", response);
      } catch (error) {
        console.error("error", error);
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
            <>
              <PhotoPlaceholder
                height={"10rem"}
                width={"15rem"}
                borderRadius={"0.5rem"}
                backgroundColor={"#f5D9E5"}
              >
                Loading
              </PhotoPlaceholder>
              <PhotoPlaceholder
                height={"10rem"}
                width={"15rem"}
                borderRadius={"0.5rem"}
                backgroundColor={"#f5D9E5"}
              >
                Loading
              </PhotoPlaceholder>
              <PhotoPlaceholder
                height={"10rem"}
                width={"15rem"}
                borderRadius={"0.5rem"}
                backgroundColor={"#f5D9E5"}
              >
                Loading
              </PhotoPlaceholder>
              <PhotoPlaceholder
                height={"10rem"}
                width={"15rem"}
                borderRadius={"0.5rem"}
                backgroundColor={"#f5D9E5"}
              >
                Loading
              </PhotoPlaceholder>
            </>
          ) : (
            typeof products === "object" &&
            products.length > 0 &&
            products.map((product) => (
              <PopularItem
                key={product._id}
                price={product.price}
                id={product._id}
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
