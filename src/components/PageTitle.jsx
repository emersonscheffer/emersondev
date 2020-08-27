import React from "react";

const PageTitle = ({ title }) => {
  return (
    <h1
      style={{
        fontSize: "25px",
        fontWeight: "bold",
        fontFamily: "Arial",
        marginBottom: "30px"
      }}
    >
      {title}
    </h1>
  );
};

export default PageTitle;
