import React, { useState } from "react";

const MyBtns = ({ btnTitle, btnAction, btnColor, btnTitleColor }) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div
      style={{
        backgroundColor: btnColor,
        height: "35px",
        padding: "5px",
        width: "170px",
        border: "solid 1px black",
        borderRadius: "7px",
        display: "grid",
        marginBottom: "40px",
        cursor: isHovering ? "pointer" : "default",
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={btnAction}
    >
      <h1
        style={{
          justifySelf: "center",
          alignSelf: "center",
          fontFamily: "helvetica",
          fontSize: isHovering ? "20px" : "18px",
          fontWeight: isHovering ? "bold" : "normal",
          color: btnTitleColor,
        }}
      >
        {btnTitle}
      </h1>
    </div>
  );
};

export default MyBtns;
