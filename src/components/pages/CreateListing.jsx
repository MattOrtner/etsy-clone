import { useState } from "react";
import styled from "styled-components";
import CreateProductPhotoSection from "../organisms/CreateProductPhotoSection";
import CreateProductListingSection from "../molecules/CreateProductListingSection";
import CreateProductPriceInventory from "../molecules/CreateProductPriceInventory";

const CreateListing = () => {
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState("");
  const [radioInputs, setRadioInputs] = useState({});
  const [selectInputs, setSelectInputs] = useState({});
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
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
  const handleSelectGroup = (e) => {
    const targetName = e.target.name;
    const value = e.target.value;
    setSelectInputs((current) => {
      return { ...current, [targetName]: value };
    });
  };
  const handleRadios = (e) => {
    const targetName = e.target.name;
    const value = e.target.value;
    setRadioInputs((current) => {
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
            handleRadios={handleRadios}
            handleSelectGroup={handleSelectGroup}
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
      </SectionsContainer>
    </div>
  );
};
export default CreateListing;

const ListDetailsContainer = styled.div``;

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
