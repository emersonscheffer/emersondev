import React from "react";

const MyParagraph = ({ paragraphWords }) => {
  return (
    <p
      style={{
        fontSize: "18px",
        fontFamily: "Helvetica",
        marginBottom: "40px",
        fontWeight: "lighter",
        lineHeight: "1.4em"
      }}
    >
      {paragraphWords}
    </p>
  );
};

export default MyParagraph;
