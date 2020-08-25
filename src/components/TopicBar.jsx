import React from "react";

const TopicBar = ({ color }) => {
  return (
    <div
      style={{
        backgroundColor: color ? color : "black",
        width: "140px",
        height: "3px",
        borderRadius: "2px",
        marginBottom: "10px"
      }}
    ></div>
  );
};

export default TopicBar;
