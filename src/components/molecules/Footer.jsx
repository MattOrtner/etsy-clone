import styled from "styled-components";
import PhotoPlaceholder from "../atoms/PhotoPlaceholder";

const Footer = () => {
  return (
    <Container>
      <ColumnContainer>
        <Column>
          <Title>Shop</Title>
          <Link>Gift cards</Link>
          <Link>Etsy Registry</Link>
          <Link>Sitemap</Link>
          <Link>Etsy blog</Link>
          <Link>Etsy United Kingdom</Link>
          <Link>Etsy Canada</Link>
        </Column>
        <Column>
          <Title>Sell</Title>
          <Link>Seller handbook</Link>
          <Link>Teams</Link>
          <Link>Forums</Link>
          <Link>Affiliates & Creators</Link>
        </Column>
        <Column>
          <Title>About</Title>
          <Link>Etsy, Inc.</Link>
          <Link>Policies</Link>
          <Link>Investors</Link>
          <Link>Careers</Link>
          <Link>Press</Link>
          <Link>Impact</Link>
        </Column>
        <Column>
          <Title>Help</Title>
          <Link>Help Center</Link>
          <Link>Privacy settings</Link>
        </Column>
      </ColumnContainer>
      <FooterTagline>
        <div style={{ display: "flex", gap: ".5rem", paddingLeft: "8rem" }}>
          <PhotoPlaceholder
            height={"1.3rem"}
            width={"1.3rem"}
            borderRadius={"50%"}
            backgroundColor={"lightblue"}
          />
          <div>United States</div>
          <div>|</div>
          <div>English</div>
          <div>|</div>
          <div>USD</div>
        </div>
        <div style={{ display: "flex", gap: "1rem", paddingRight: "8rem" }}>
          <u>2023 NotEtsy, Inc.</u>
          <u>Terms of Use</u>
          <u>Privacy</u>
          <u>Interest-based ads</u>
          <u>Local Shops</u>
          <u>Regions</u>
        </div>
      </FooterTagline>
    </Container>
  );
};
export default Footer;
const Title = styled.h3`
  font-weight: 500;
`;
const Container = styled.nav`
  color: white;
  background-color: blue;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2f466c;
`;
const ColumnContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1400px;
  padding: 1rem 0 3rem 0;
  gap: 15rem;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Link = styled.li`
  list-style-type: none;
  font-size: 1rem;
`;
const FooterTagline = styled.div`
  background-color: #232347;
  display: flex;
  width: 100%;
  height: 5.5rem;
  justify-content: space-between;
  align-items: center;
`;
