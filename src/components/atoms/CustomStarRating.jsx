import React from "react";
import StarRatingComponent from "react-star-rating-component";

const CustomStarRating = ({ name, value }) => {
  return (
    <StarRatingComponent
      name={name}
      value={value}
      starColor={"#222222"}
      emptyStarColor={"#22222263"}
    />
  );
};

export default CustomStarRating;
