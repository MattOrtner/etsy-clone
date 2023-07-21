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
`;

const Title = styled.h1`
  padding-left: 7rem;
  font-size: 1.5rem;
`;
