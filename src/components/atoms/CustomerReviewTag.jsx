import React from "react";
import styled from "styled-components";

const CustomerReviewTag = ({ customer }) => {
  return (
    <Container>
      <ProfileImg src={customer.profileImage} alt="users profile" />
      <div style={{ textDecoration: "underline" }}>{customer.name}</div>
      <div>{customer.date}</div>
    </Container>
  );
};

export default CustomerReviewTag;

const ProfileImg = styled.img`
  height: 45px;
  width: 45px;
  border-radius: 50%;
`;
const Container = styled.div`
  display: flex;
  font-size: 18px;
  gap: 15px;
  align-items: center;
  height: 42px;
  width: 50%;
  padding-bottom: 15px;
  color: #595959;
`;
