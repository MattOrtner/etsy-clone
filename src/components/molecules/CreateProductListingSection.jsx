import styled from "styled-components";

const CreateProductListingSection = ({
  title,
  handleTitle,
  handleRadios,
  handleSelectGroup,
  description,
  setDescription,
}) => {
  return (
    <>
      <SectionTitle>Listing Details</SectionTitle>
      <p>Tell the world about your item and why they'll love it</p>
      <div>
        <ListDetailContainer>
          <LeftDetailContainer>
            <DetailTitle>Title</DetailTitle>
            <p>
              Include keywords that buyers would use to search for your item.
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
              <u>Learn more about what types of items are allowed on Etsy.</u>
            </p>
          </LeftDetailContainer>
          <RightDetailContainer onChange={handleSelectGroup} multiple={true}>
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
              Type a two or three-word description of your item to get category
              suggestions that will help more shoppers find it.
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
                  This listing will renew as it expires for $0.20 USD each time
                  (recommended)
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
      </div>
      <ListDetailContainer>
        <LeftDetailContainer>
          <DetailTitle>Description</DetailTitle>
          <p>
            Start with a brief overview that describes your item's finest
            features. Shoppers will only see the firsnt few lines of your
            description at first, so make it count!
          </p>
        </LeftDetailContainer>
        <RightDetailContainer>
          <DescriptionInput
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </RightDetailContainer>
      </ListDetailContainer>
    </>
  );
};
export default CreateProductListingSection;

const ListDetailContainer = styled.div`
  display: flex;
  padding: 1rem 0;
`;
const DescriptionInput = styled.textarea`
  width: 100%;
  resize: none;
  padding: 1rem;
  font-size: 1rem;
`;
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
  width: 80%;
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
const SectionTitle = styled.h2`
  font-weight: 300;
`;
