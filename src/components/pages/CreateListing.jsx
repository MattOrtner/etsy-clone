import { useState } from "react";
import styled from "styled-components";
import CreateProductPhotoSection from "../organisms/CreateProductPhotoSection";
import CreateProductListingSection from "../molecules/CreateProductListingSection";
import CreateProductPriceInventory from "../molecules/CreateProductPriceInventory";
import {
  testPhoto,
  testProductType,
  testRenewal,
  testTitle,
  testAboutDetails,
  testDescription,
  testPrice,
  testQuantity,
  testLWH,
} from "../../new-product-tests/tests";

const CreateListing = () => {
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState("");
  const [renewalOption, setRenewalOption] = useState("");
  const [productType, setProductType] = useState("");
  const [aboutDetails, setAboutDetails] = useState({});
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [lengthWidthHeight, setLengthWidthHeight] = useState({});
  const [inspoGraphics, setInspoGraphics] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const handleSubmit = () => {
    if (
      testPhoto(images) &&
      testTitle(title) &&
      testRenewal(renewalOption) &&
      testProductType(productType) &&
      testAboutDetails(aboutDetails) &&
      testDescription(description) &&
      testPrice(price) &&
      testQuantity(quantity) &&
      testLWH(lengthWidthHeight)
    ) {
      // convert images to strings
      // send product data
    } else {
      // tests failed
      // send error with what tests failed
    }
  };

  const handleLWH = (e) => {
    const targetName = e.target.name;
    const value = e.target.value;
    setLengthWidthHeight((prev) => {
      return { ...prev, [targetName]: value };
    });
  };

  const handlePhoto = (imageList, addUpdateIndex) => {
    if (addUpdateIndex === undefined) {
      setInspoGraphics((current) => [...current, ""]);
    }
    inspoGraphics.shift();
    setInspoGraphics((current) => [...current]);
    setImages(imageList);
  };

  const handleTitle = (e) => {
    const letter = e.target.value;
    setTitle(letter);
  };

  const handleAboutListing = (e) => {
    const targetName = e.target.name;
    const value = e.target.value;
    setAboutDetails((current) => {
      return { ...current, [targetName]: value };
    });
  };

  const handlePriceAndQuantity = (e) => {
    const targetName = e.target.name;
    const value = e.target.value;
    switch (targetName) {
      case "price":
        setPrice(value);
        break;
      case "quantity":
        setQuantity(value);
        break;
      default:
        console.log("hit default");
        break;
    }
  };
  return (
    <div style={{ width: "75%" }}>
      <HeaderContainer>
        <Title>Create a Listing</Title>
        <h3 style={{ fontWeight: 350 }}>
          Add some photos and details about your ite. Fill out what you can for
          now--you'll be able to edit this later
        </h3>
      </HeaderContainer>
      <SectionsContainer>
        <Section>
          <CreateProductPhotoSection
            images={images}
            handlePhoto={handlePhoto}
            inspoGraphics={inspoGraphics}
          />
        </Section>
        <Section>
          <CreateProductListingSection
            title={title}
            handleTitle={handleTitle}
            setRenewalOption={setRenewalOption}
            setProductType={setProductType}
            handleAboutListing={handleAboutListing}
            description={description}
            setDescription={setDescription}
          />
        </Section>
        <Section>
          <CreateProductPriceInventory
            handleLWH={handleLWH}
            handlePriceAndQuantity={handlePriceAndQuantity}
          />
        </Section>
        <SubmitContainer>
          <SumbitButton onClick={handleSubmit}>Save and continue</SumbitButton>
        </SubmitContainer>
      </SectionsContainer>
    </div>
  );
};
export default CreateListing;

const SumbitButton = styled.div`
  background-color: aliceblue;
  font-weight: 300;
  border: 2px solid lightgray;
  border-radius: 0.5rem;
  padding: 0.25rem 2rem;
  font-size: 1.25rem;
  cursor: pointer;
  &:active {
    background-color: lightblue;
  }
`;
const SubmitContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const Title = styled.h1`
  font-weight: 300;
`;
const Section = styled.div`
  border: 2px solid lightgray;
  padding: 2rem;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
`;
const SectionsContainer = styled.div`
  padding-bottom: 1rem;
`;
const HeaderContainer = styled.div`
  padding: 1.5rem 0;
`;
