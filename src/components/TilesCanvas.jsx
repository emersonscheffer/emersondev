import React from "react";

const TilesCanvas = ({ size, bgColor }) => {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        width: size,
        height: size,
        border: "solid thin gray",
        boxSizing: "border-box",
        float: "left"
      }}
    ></div>
  );
};

export default TilesCanvas;
