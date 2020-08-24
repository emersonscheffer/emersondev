import React from "react";

const TopicBar = ({ color }) => {
  return (
    <div
      style={{
        backgroundColor: color ? color : "black",
        width: "140px",
        height: "7px",
        borderRadius: "1px"
      }}
    ></div>
  );
};

export default TopicBar;
