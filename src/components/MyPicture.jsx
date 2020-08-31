import React from "react";

const MyPicture = ({ picName, picSrc }) => {
  return (
    <div
      style={{
        width: "350px",
        height: "auto",
        border: "solid 1px gray",
        marginTop: "45px",
        marginBottom: "45px",
      }}
    >
      <img
        style={{ width: "100%", height: "auto" }}
        src={picSrc}
        alt={picName}
      />
    </div>
  );
};

export default MyPicture;
