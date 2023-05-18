import styled from "styled-components";

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
