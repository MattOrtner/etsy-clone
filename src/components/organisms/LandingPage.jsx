import { useEffect, useState } from "react";
import styled from "styled-components";
import HighLightList from "../molecules/HighLightList";
import SectionTitle from "../atoms/SectionTitle";
import PopularItem from "../atoms/PopularItem";
import PersonalizedGifts from "../organisms/PersonalizedGifts";
import { useOutletContext } from "react-router-dom";
import axios from "axios";

const LandingPage = () => {
  const [products, setProducts] = useState([]);
  const [shoppingCart, setShoppingCart] = useOutletContext([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products?q=clothing")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <Container>
      <GreetingContainer>
        <BackSplash />
        <TitleContainer>
          <Title>Discover fresh summer finds from creative sellers!</Title>
        </TitleContainer>
        <HighLightList />
      </GreetingContainer>
      <PopularContainer>
        <SectionTitleContainer>
          <SectionTitle title={"Popular gifts right now"} />
        </SectionTitleContainer>
        <SquarePhotoList>
          {products &&
            products.map((product) => (
              <PopularItem key={product._id} {...product} rating={"****"} />
            ))}
        </SquarePhotoList>
      </PopularContainer>
      <PersonalContainer>
        <PersonalizedGifts />
      </PersonalContainer>
    </Container>
  );
};

export default LandingPage;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 70px;
`;

const PersonalContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1500px;
`;
const SquarePhotoList = styled.div`
  height: 90%;
  display: flex;
  justify-content: center;
`;

const PopularContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 335px;
  width: 100%;
  max-width: 1500px;
`;
const SectionTitleContainer = styled.div`
  ${"" /* text-align: left; */}
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8ebe6;
  width: 100%;
`;
const Title = styled.h1`
  letter-spacing: 0.5px;
  font-weight: 100;
  font-family: "Guardian-EgypTT", Charter, "Charter Bitstream", Cambria,
    "Noto Serif Light", "Droid Serif", Georgia, serif;
`;
const BackSplash = styled.div`
  background-color: #f8ebe6;
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
  width: 100%;
`;
