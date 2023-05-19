import { useState } from "react";
import styled from "styled-components";
import InputPhotos from "../organisms/InputPhotos";

const CreateListing = () => {
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState("");
  const [radioInputs, setRadioInputs] = useState({});
  const [selectInputs, setSelectInputs] = useState({});
  const [inspoGraphics, setInspoGraphics] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  console.log("selectInputs", selectInputs);
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
          <InputPhotos
            images={images}
            handlePhoto={handlePhoto}
            inspoGraphics={inspoGraphics}
          />
        </Section>
        <Section>
          <SectionTitle>Listing Details</SectionTitle>
          <p>Tell the world about your item and why they'll love it</p>
          <ListDetailsContainer>
            <ListDetailContainer>
              <LeftDetailContainer>
                <DetailTitle>Title</DetailTitle>
                <p>
                  Include keywords that buyers would use to search for your
                  item.
                </p>
              </LeftDetailContainer>
              <RightDetailContainer>
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={title}
                  onChange={(e) => handleTitle(e)}
                  style={{
                    width: "100%",
                    height: 28,
                    fontSize: 16,
                    paddingLeft: 10,
                  }}
                />
              </RightDetailContainer>
            </ListDetailContainer>
            <ListDetailContainer>
              <LeftDetailContainer>
                <DetailTitle>About this listing*</DetailTitle>
                <p>
                  <u>
                    Learn more about what types of items are allowed on Etsy.
                  </u>
                </p>
              </LeftDetailContainer>
              <RightDetailContainer
                onChange={handleSelectGroup}
                multiple={true}
              >
                <Dropdown name="who">
                  <option value="">Who made it?</option>
                  <option value="you">You</option>
                  <option value="a friend">A friend</option>
                  <option value="your cat">Your cat</option>
                </Dropdown>
                <Dropdown name="what">
                  <option value="">What is it?</option>
                  <option value="something">something</option>
                  <option value="something-else">something else</option>
                  <option value="another-something-else">
                    another something else
                  </option>
                </Dropdown>
                <Dropdown placeholder="When" name="when">
                  <option value="">When was it made?</option>
                  <option value="today">Today</option>
                  <option value="tomorrow">Tomorrow</option>
                  <option value="in '95">In '95</option>
                </Dropdown>
              </RightDetailContainer>
            </ListDetailContainer>
            <ListDetailContainer>
              <LeftDetailContainer>
                <DetailTitle>Renewal Options *</DetailTitle>
                <p>
                  Type a two or three-word description of your item to get
                  category suggestions that will help more shoppers find it.
                </p>
              </LeftDetailContainer>
              <RightDetailContainer>
                <RadioContainer>
                  <RadioInput>
                    <input
                      type="radio"
                      onChange={handleRadios}
                      name="auto-manual"
                      value="automatic"
                    />
                  </RadioInput>
                  <div>
                    <label htmlFor="automatic">Automatic</label>
                    <p>
                      This listing will renew as it expires for $0.20 USD each
                      time (recommended)
                    </p>
                  </div>
                </RadioContainer>
                <RadioContainer>
                  <RadioInput>
                    <input
                      type="radio"
                      onChange={handleRadios}
                      name="auto-manual"
                      value="manual"
                    />
                  </RadioInput>
                  <div>
                    <label htmlFor="manual">Manual</label>
                    <p>I'll renew expired listings myself.</p>
                  </div>
                </RadioContainer>
              </RightDetailContainer>
            </ListDetailContainer>
            <ListDetailContainer>
              <LeftDetailContainer>
                <DetailTitle>Type *</DetailTitle>
              </LeftDetailContainer>
              <RightDetailContainer>
                <RadioContainer>
                  <RadioInput>
                    <input
                      type="radio"
                      onChange={handleRadios}
                      name="physical-digital"
                      value="physical"
                    />
                  </RadioInput>
                  <div>
                    <label htmlFor="physical">Physical</label>
                    <p>A tangible item thatyou will ship to buyers.</p>
                  </div>
                </RadioContainer>
                <RadioContainer>
                  <RadioInput>
                    <input
                      type="radio"
                      onChange={handleRadios}
                      name="physical-digital"
                      value="digital"
                    />
                  </RadioInput>
                  <div>
                    <label htmlFor="digital">Digital</label>
                    <p>A digital file that buyers will download.</p>
                  </div>
                </RadioContainer>
              </RightDetailContainer>
            </ListDetailContainer>
          </ListDetailsContainer>
        </Section>
        <Section>
          <SectionTitle>Inventory and pricing</SectionTitle>
        </Section>
      </SectionsContainer>
    </div>
  );
};
export default CreateListing;
const RadioInput = styled.div`
  display: flex;
  align-items: flex-start;
  padding-right: 0.25rem;
`;
const RadioContainer = styled.div`
  display: flex;
  width: 40%;
`;

const Dropdown = styled.select`
  height: 24px;
  width: 100%;
  padding: 0 20px;
  text-align: center;
  font-size: 1rem;
  border-radius: 4px;
`;
const RightDetailContainer = styled.div`
  width: 75%;
  margin-right: 1rem;
  display: flex;
  gap: 5px;
`;
const LeftDetailContainer = styled.div`
  width: 18%;
  margin-right: 30px;
`;
const DetailTitle = styled.div`
  font-weight: 600;
`;
const ListDetailContainer = styled.div`
  display: flex;
  padding: 5px 0;
`;
const ListDetailsContainer = styled.div`
  /* display: "flex";
  flex-direction: column; */
`;

const Title = styled.h1`
  font-weight: 300;
`;
const SectionTitle = styled.h2`
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