import styled from "styled-components";
import { useState, useEffect } from "react";
import PopularItem from "../atoms/PopularItem";
import MULTIPLE_SINGLE_DUMMY_PRODUCTS from "../../data/multiple-dummie-products";
import { useOutletContext } from "react-router-dom";

const FavoritesPage = () => {
  const [user, _] = useOutletContext();
  const [favoriteProducts, setFavoriteProducts] = useState(
    user.favoriteProducts
  );

  useEffect(() => {
    if (user.favoriteProducts.length === 0) {
      return;
    }

    // axios.get(
    //  to the Mongo with multiple ids then cached client side
    // )
    const requestFavorites = () => {
      const favs = [];
      for (const id of user.favoriteProducts) {
        for (const dummyProd of MULTIPLE_SINGLE_DUMMY_PRODUCTS) {
          if (id === dummyProd._id) {
            favs.push(dummyProd);
          }
        }
      }
      setFavoriteProducts(favs);
    };
    requestFavorites();
  }, [user.favoriteProducts]);

  return (
    <PageContainer>
      <Title>Favorites</Title>
      <FavoritesContainer>
        {favoriteProducts &&
          favoriteProducts.map((product) => (
            <PopularItem
              price={product.price}
              key={product._id}
              id={product._id}
            />
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
  max-width: 1050px;
`;
