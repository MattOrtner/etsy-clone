import React from "react";
import styled from "styled-components";

const SectionTitle = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};

export default SectionTitle;

const Container = styled.div`
  width: 100%;
  padding-left: 40px;
`;

const Title = styled.h2`
  font-weight: 500;
`;
