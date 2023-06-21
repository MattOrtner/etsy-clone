import styled from "styled-components";
import HeartOutline from "../../assets/heart-outline.svg";
import RedHeart from "../../assets/red-heart.svg";

const HeartIconContainer = ({ styles, src }) => {
  const srcChoice = {
    outline: HeartOutline,
    red: RedHeart,
  };
  return <Container style={{ ...styles }} src={srcChoice[src]} />;
};
export default HeartIconContainer;

const Container = styled.img`
  width: 1.25rem;
  height: 1.25rem;
`;
