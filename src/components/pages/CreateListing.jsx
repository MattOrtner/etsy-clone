import styled from "styled-components";
import PhotoPlaceholder from "../atoms/PhotoPlaceholder";

const CreateListing = () => {
  return (
    <div style={{ width: "75%" }}>
      <HeaderContainer>
        <Title>Create a Listing</Title>
        <h3 style={{ fontWeight: 350 }}>
          Add some photos and details about your ite. Fill out what you can for
          now--you'll be able to edit this later{" "}
        </h3>
      </HeaderContainer>
      <SectionsContainer>
        <Section>
          <div>
            <SectionTitle>Photos</SectionTitle>
            <p>Add as many as you can so buyers can see every detail.</p>
          </div>
          <div style={{ display: "flex", gap: "1rem" }}>
            <div style={{ width: "25%" }}>
              <h4>Photos*</h4>
              <p>
                Use up to ten photos to show your item's most important
                qualities.
              </p>
              <p>Tips</p>
              <ul>
                <li>Use natural light and no flash.</li>
                <li>Include a common object for scale.</li>
                <li>Show the item being held, wor, or used.</li>
                <li>Shoot against a clean, simple background.</li>
                <li>
                  Add photos to your variations so buyers can see all their
                  options
                </li>
              </ul>
            </div>
            <PhotosContainer>
              <PhotoPlaceholder
                width={"9rem"}
                height={"9rem"}
                borderRadius={".5rem"}
                styles={{
                  display: "flex",
                  flexDirection: "column",
                  cursor: "pointer",
                }}
                addClick={() => console.log("cool")}
              >
                <div style={{ fontSize: "3rem", textAlign: "center" }}>+</div>
                <div style={{ textAlign: "center", fontSize: "1.5rem" }}>
                  Add a photo
                </div>
              </PhotoPlaceholder>
              <PhotoPlaceholder
                width={"9rem"}
                height={"9rem"}
                borderRadius={".5rem"}
                styles={{ fontSize: "1rem" }}
              >
                Inspo
              </PhotoPlaceholder>
              <PhotoPlaceholder
                width={"9rem"}
                height={"9rem"}
                borderRadius={".5rem"}
                styles={{ fontSize: "1rem" }}
              >
                Inspo
              </PhotoPlaceholder>
              <PhotoPlaceholder
                width={"9rem"}
                height={"9rem"}
                borderRadius={".5rem"}
                styles={{ fontSize: "1rem" }}
              >
                Inspo
              </PhotoPlaceholder>
              <PhotoPlaceholder
                width={"9rem"}
                height={"9rem"}
                borderRadius={".5rem"}
                styles={{ fontSize: "1rem" }}
              >
                Inspo
              </PhotoPlaceholder>
              <PhotoPlaceholder
                width={"9rem"}
                height={"9rem"}
                borderRadius={".5rem"}
                styles={{ fontSize: "1rem" }}
              >
                Inspo
              </PhotoPlaceholder>
              <PhotoPlaceholder
                width={"9rem"}
                height={"9rem"}
                borderRadius={".5rem"}
                styles={{ fontSize: "1rem" }}
              >
                Inspo
              </PhotoPlaceholder>
              <PhotoPlaceholder
                width={"9rem"}
                height={"9rem"}
                borderRadius={".5rem"}
                styles={{ fontSize: "1rem" }}
              >
                Inspo
              </PhotoPlaceholder>
              <PhotoPlaceholder
                width={"9rem"}
                height={"9rem"}
                borderRadius={".5rem"}
                styles={{ fontSize: "1rem" }}
              >
                Inspo
              </PhotoPlaceholder>
            </PhotosContainer>
          </div>
          <SectionTitle>Photos</SectionTitle>
        </Section>
        <Section>
          <SectionTitle>Listing Details</SectionTitle>
        </Section>
        <Section>
          <SectionTitle>Inventory and pricing</SectionTitle>
        </Section>
      </SectionsContainer>
    </div>
  );
};
export default CreateListing;

const PhotosContainer = styled.div`
  display: flex;
  padding: 1rem 0 0 2rem;
  gap: 1.25rem;
  flex-wrap: wrap;
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
