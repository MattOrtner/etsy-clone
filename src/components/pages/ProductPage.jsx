import { useState, useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import MULTIPLE_SINGLE_DUMMY_PRODUCTS from "../../data/multiple-dummie-products.js";

import checkIcon from "../../assets/check.svg";
import CustomStarRating from "../atoms/CustomStarRating";
import StoreData from "../../data/store-data";
import DropDownInfoContainer from "../molecules/DropDownInfoContainer";
import LeftProductPageContainer from "../organisms/LeftProductPageContainer";
import JustAddedModal from "../organisms/JustAddedModal";
import QuantitySelectDropdown from "../molecules/QuantitySelectDropdown";
import HeartIconContainer from "../atoms/HeartIconContainer";
import FavoriteHoverButton from "../atoms/FavoriteHoverButton.jsx";
import PhotoPlaceholder from "../atoms/PhotoPlaceholder.jsx";

const ProductPage = () => {
  const [_, dispatch] = useOutletContext();
  const [productData, setProductData] = useState({});
  const [justAddedCartShow, setJustAddedCartShow] = useState(false);
  const [productQuantity, setProductQuantity] = useState(1);
  const { id } = useParams();

  const handleAddToCart = (productData) => {
    setJustAddedCartShow(true);
    dispatch({
      type: "add-to-cart",
      payload: productData,
    });
  };

  const handleQuantityChange = (e) => {
    e.preventDefault();
    setProductQuantity(parseInt(e.target.value));
  };

  useEffect(() => {
    (async () => {
      try {
        const newId = id.substring(1);
        const { data: response } = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/api/products/${newId}`
        );
        const configedImages = response.images.map((imgString) => {
          return { original: imgString, thumbnail: imgString };
        });
        setProductData({ ...response, images: configedImages });
      } catch (err) {
        console.error(err, "error");
      }
    })();
  }, [id]);

  return (
    <PageContainer>
      <JustAddedModal
        onClose={() => setJustAddedCartShow(false)}
        show={justAddedCartShow}
        productQuantity={productQuantity}
      />
      <LeftProductPageContainer
        productName={productData.product_name}
        images={productData.images}
      />
      <RightContainer>
        <TopRight>
          <ProductInfo>
            <CompanyInfoContainer>
              <CompanyInfoTop>
                <CompanyName>NameOfCompany</CompanyName>
                <FollowContainer>
                  <HeartIconContainer
                    src={"outline"}
                    styles={{ paddingRight: ".25rem" }}
                  />
                  <h4>Follow</h4>
                </FollowContainer>
              </CompanyInfoTop>
              <SellerRatings>
                {StoreData.isStarSeller && <StarSeller>Star Seller</StarSeller>}
                <Spacer>|</Spacer>
                <SellerRatings>{StoreData.totalStoreSales} sales</SellerRatings>
                <Spacer>|</Spacer>
                <StarIconsContainer>
                  <CustomStarRating name="store rating" value={4} />
                </StarIconsContainer>
              </SellerRatings>
            </CompanyInfoContainer>
            <ProductName>{productData.product_name}</ProductName>
            <PriceContainer>
              <ProductPrice>${productData.price}.00</ProductPrice>
              <InStockContainer>
                {productData.quantity > 0 ? (
                  <>
                    <CheckIcon src={checkIcon} />
                    <div>In stock</div>
                  </>
                ) : (
                  <>
                    <div>Currently, out of stock.</div>
                  </>
                )}
              </InStockContainer>
            </PriceContainer>
          </ProductInfo>
          {productData.quantity > 0 ? (
            <>
              <QuantitySelectDropdown
                handleChange={handleQuantityChange}
                total={productData.quantity}
              />
              <AddButton
                onClick={() =>
                  handleAddToCart({
                    id: productData._id,
                    product_name: productData.product_name,
                    description: productData.description,
                    quantity: productQuantity,
                    price: productData.price,
                    isInStock: productData.quantity,
                  })
                }
              >
                Add to cart
              </AddButton>
            </>
          ) : (
            <OutOfStockButton>
              Save Item to favorites?
              <FavoriteHoverButton
                styles={{
                  borderRadius: 18,
                  padding: "1px 3px",
                }}
              />
            </OutOfStockButton>
          )}
          <MessagingContainer>
            <Messages>
              <PhotoPlaceholder
                width={"60px"}
                height={"60px"}
                backgroundColor={"darkblue"}
                color={"transparent"}
                borderRadius={"5px"}
              />
              <div style={{ maxWidth: "75%" }}>
                <strong style={{ paddingRight: 3 }}>
                  Other people want this.
                </strong>
                Over 20 people have this in their carts right now.
              </div>
            </Messages>
            {StoreData.isStarSeller && (
              <Messages>
                <PhotoPlaceholder
                  width={"60px"}
                  height={"60px"}
                  backgroundColor={"darkblue"}
                  borderRadius={"5px"}
                />
                <div style={{ maxWidth: "75%" }}>
                  <strong>Star Seller.</strong> This seller consistently earned
                  5-star reviews, shipped on time, and replied quickly to any
                  messages they received.
                </div>
              </Messages>
            )}
            {StoreData.isGiftWrapping && (
              <Messages>
                <PhotoPlaceholder
                  width={"60px"}
                  height={"60px"}
                  backgroundColor={"darkblue"}
                  borderRadius={"5px"}
                />
                <div>
                  <strong>Gift wrapping available</strong>
                </div>
              </Messages>
            )}
          </MessagingContainer>
        </TopRight>
        <BottomRight>
          {productData && productData.description && (
            <DropDownInfoContainer title="Description">
              <p>{productData.description}</p>
            </DropDownInfoContainer>
          )}
          {StoreData.acceptsReturns ? (
            <DropDownInfoContainer title="Shipping and return policies">
              <p>{StoreData.trueMessage}</p>
            </DropDownInfoContainer>
          ) : (
            <DropDownInfoContainer title="Shipping and return policies">
              <p>{StoreData.falseMessage}</p>
            </DropDownInfoContainer>
          )}
          <DropDownInfoContainer title="Meet your sellers">
            <p>{StoreData.meetYourSellers}</p>
          </DropDownInfoContainer>
        </BottomRight>
      </RightContainer>
    </PageContainer>
  );
};

export default ProductPage;
const TopRight = styled.div``;
const BottomRight = styled.div`
  display: flex;
  width: 100%;
  height: 600px;
  flex-direction: column;
`;
const MessagingContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  margin: 1.5rem 0;
`;
const Messages = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const RightContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  height: 100%;
  width: 34%;
  margin: 0px 0px 0px 20px;
`;
const CompanyName = styled.h3`
  margin-right: 20px;
  font-family: "Graphik Webfont", -apple-system, "Helvetica Neue", "Droid Sans",
    Arial, sans-serif;
  font-weight: 375;
`;
const CompanyInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const StarSeller = styled.div`
  color: purple;
`;
const CompanyInfoTop = styled.div`
  display: flex;
  align-items: center;
`;
const FollowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 99px;
  height: 38px;
  &:hover {
    transition: background-color 300ms ease-in;
    background-color: #f8ebe6;
    border-radius: 20px;
  }
`;

const SellerRatings = styled.div`
  display: flex;
  align-items: center;
`;
const StarIconsContainer = styled.div``;
const ProductName = styled.h1`
  font-family: "Guardian-EgypTT", Charter, "Charter Bitstream", Cambria,
    "Noto Serif Light", "Droid Serif", Georgia, serif;
  font-weight: 100;
  letter-spacing: 0.35px;
`;
const PriceContainer = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
`;
const ProductPrice = styled.p`
  font-family: "Graphik Webfont", -apple-system, "Helvetica Neue", "Droid Sans",
    Arial, sans-serif;
  font-size: 45px;
  letter-spacing: 0.35px;
  font-weight: 700;
`;
const InStockContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const CheckIcon = styled.img`
  padding-right: 4px;
  width: 24px;
  height: 24px;
`;
const ProductInfo = styled.div``;
const AddButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  width: 80%;
  height: 3rem;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 10px;
`;

const OutOfStockButton = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 2px solid #9d9b9b;
  width: 100%;
  height: 3rem;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;

const Spacer = styled.div`
  color: #e1e3df;
  padding: 0px 8px;
`;
const PageContainer = styled.div`
  max-width: 1500px;
  display: flex;
  padding: 1.5rem 0px;
`;
