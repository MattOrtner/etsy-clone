import styled from "styled-components";
import HeartIcon from "../../assets/heart-outline.svg";

const HeartOutlineIcon = ({ styles }) => {
  return <Container style={{ ...styles }} src={HeartIcon} />;
};
export default HeartOutlineIcon;

const Container = styled.img`
  width: 20px;
  height: 20px;
`;
