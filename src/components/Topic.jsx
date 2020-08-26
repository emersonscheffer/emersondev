import React from "react";
import TopicBar from "./TopicBar";

const Topic = ({ word, color }) => {
  return (
    <div>
      <h1 style={{ marginBottom: "10px", fontFamily: "Arial", fontSize: "20px" }}>{word}</h1>
      <TopicBar color={color} />
    </div>
  );
};
export default Topic;
