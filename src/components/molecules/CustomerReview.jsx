import React from "react";
import styled from "styled-components";
import CustomStarRating from "../atoms/CustomStarRating";
import thumbUpIcon from "../../assets/thumb-up.svg";
import CustomerReviewTag from "../atoms/CustomerReviewTag";

const CustomerReview = ({ customer }) => {
  return (
    <Container key={customer.userId}>
      <div>
        <CustomStarRating name="Customer Review" value={customer.starRating} />
      </div>
      <div style={{ fontSize: 28, fontWeight: 300 }}>{customer.review}</div>
      <div
        style={{
          height: 24,
          paddingBottom: 20,
          color: "#595959",
          textOverflow: "ellipsis",
        }}
      >
        <p>
          <strong>Purchased item:</strong> Handmade Cutting Board
        </p>
      </div>
      <CustomerReviewTag customer={customer} />
      <HelpfulOuterContainer>
        <ThumbIcon src={thumbUpIcon} />
        <div style={{ fontWeight: 600, fontSize: 16 }}>Helpful?</div>
      </HelpfulOuterContainer>
    </Container>
  );
};

export default CustomerReview;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0px;
`;
const ThumbIcon = styled.img`
  height: 18px;
  width: 18px;
`;

const HelpfulOuterContainer = styled.div`
  display: flex;
  gap: 10px;
`;
