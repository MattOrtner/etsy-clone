import React from "react";
import { NavLink } from "react-router-dom";

const FeatureItemPicture = () => {
  // add wrap image with NavLink

  return <NavLink to="product" style={{ ...styles }} />;
};

export default FeatureItemPicture;

const styles = {
  backgroundColor: "lightblue",
  color: "black",
  borderRadius: 8,
  cursor: "pointer",
  alignItems: "center",
  justifyContent: "center",
};

