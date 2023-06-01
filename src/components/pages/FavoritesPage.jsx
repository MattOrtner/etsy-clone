import styled from "styled-components";
import { useState } from "react";
import MULTIPLE_SINGLE_DUMMY_PRODUCTS from "../../data/multiple-dummie-products";
import PopularItem from "../atoms/PopularItem";

const FavoritesPage = () => {
  const [favoriteItems, setFavoriteItems] = useState(
    MULTIPLE_SINGLE_DUMMY_PRODUCTS
  );
  console.log("favoriteItems", favoriteItems);
  return (
    <PageContainer>
      <Title>Favorites</Title>
      <FavoritesContainer>
        {favoriteItems &&
          favoriteItems.map((item) => (
            <PopularItem price={item.price} id={item._id} />
          ))}
      </FavoritesContainer>
    </PageContainer>
  );
};
export default FavoritesPage;
const Title = styled.div`
  font-weight: 400;
  font-size: 42px;
  padding-bottom: 1rem;
`;
const PageContainer = styled.div`
  min-height: 500px;
  margin: 3rem;
`;
const FavoritesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  padding: 1rem;
  border-radius: 1rem;
  border: 1px solid lightgray;
`;
// descripiton: "This is a great product.";
// numOfReviews: 400;
// price: "18";
// product_name: "Cool beans for sale";
// quantity: 3;
// starRating: 3;
// _id: 0;
