import styled from "styled-components";

const CreateProductPriceInventory = ({ handleLWH, handlePriceAndQuantity }) => {
  return (
    <>
      <SectionTitle>Inventory and pricing</SectionTitle>
      <ListDetailContainer>
        <LeftDetailContainer>
          <DetailTitle>Price *</DetailTitle>
          <p>
            Remember to factor in the costs of materials, labor, and other
            business expenses. If you offer free shipping, make sure to included
            the cost of shipping so it doesn't eat into your profits.
          </p>
        </LeftDetailContainer>
        <RightDetailContainer>
          <NumberLabelContainer style={{ width: "25%" }} htmlFor="price">
            $
            <input
              type="number"
              name="price"
              id="price"
              onChange={handlePriceAndQuantity}
              style={{
                border: "none",
                marginLeft: ".5rem",
                fontSize: "1rem",
                width: "100%",
              }}
              placeholder="0"
            />
          </NumberLabelContainer>
        </RightDetailContainer>
      </ListDetailContainer>
      <ListDetailContainer>
        <LeftDetailContainer>
          <DetailTitle>Quantity *</DetailTitle>
          <p>
            For quantities greater than one, this listing will renew
            automatically until it sells out. You'll be charged a $.20USD
            listing fee each time.
          </p>
        </LeftDetailContainer>
        <RightDetailContainer>
          <NumberLabelContainer>
            <input
              type="number"
              name="quantity"
              id="quantity"
              onChange={handlePriceAndQuantity}
              style={{
                border: "none",
                fontSize: "1rem",
                arrows: "hidden",
              }}
              placeholder="1"
            />
          </NumberLabelContainer>
        </RightDetailContainer>
      </ListDetailContainer>
      <ListDetailContainer>
        <LeftDetailContainer>
          <DetailTitle>Item size (when packed)</DetailTitle>
          <p>
            Enter the weight and size of the item plus packing materials. This
            will be used to determine package size.
          </p>
        </LeftDetailContainer>
        <RightDetailContainer>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="length" style={{ marginBottom: 10 }}>
              Length
            </label>
            <NumberLabelContainer>
              <input
                type="number"
                name="length"
                id="length"
                onChange={handleLWH}
                style={{
                  border: "none",
                  margin: "0 .5rem",
                  fontSize: "1rem",
                }}
              />
              <div>in</div>
            </NumberLabelContainer>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="width" style={{ marginBottom: 10 }}>
              Width
            </label>
            <NumberLabelContainer>
              <input
                type="number"
                name="width"
                id="width"
                onChange={handleLWH}
                style={{
                  border: "none",
                  margin: "0 .5rem",
                  fontSize: "1rem",
                }}
              />
              <div>in</div>
            </NumberLabelContainer>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="height" style={{ marginBottom: 10 }}>
              Height
            </label>
            <NumberLabelContainer>
              <input
                type="number"
                name="height"
                id="height"
                onChange={handleLWH}
                style={{
                  border: "none",
                  margin: "0 .5rem",
                  fontSize: "1rem",
                }}
              />
              <div>in</div>
            </NumberLabelContainer>
          </div>
        </RightDetailContainer>
      </ListDetailContainer>
    </>
  );
};
export default CreateProductPriceInventory;

const NumberLabelContainer = styled.label`
  border: 1px solid lightgray;
  height: fit-content;
  padding: 0.75rem;
  margin-right: 1.25rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  box-shadow: inset 1px 1px 1px lightgray, inset -1px -1px 1px lightgray;
  display: flex;
  align-items: center;
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
const ListDetailContainer = styled.div`
  display: flex;
  padding: 1rem 0;
`;
const ListDetailsContainer = styled.div``;

const Title = styled.h1`
  font-weight: 300;
`;
const SectionTitle = styled.h2`
  font-weight: 300;
`;
