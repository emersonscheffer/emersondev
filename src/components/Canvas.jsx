import React from "react";
import TilesCanvas from "./TilesCanvas";

const Canvas = () => {
  const numberOfSqsPerLine = 10;

  const arr2D = [
    { 0: 0, 1: 0 },
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [],
  ];

  const sqRender = () => {
    let sqs = [];

    for (let i = 0; i < numberOfSqsPerLine * numberOfSqsPerLine; i++) {
      sqs.push(
        <TilesCanvas
          key={i}
          bgColor={i % 2 === 0 ? "white" : "red"}
          size={100 / numberOfSqsPerLine + "%"}
        />
      );
    }

    return sqs;
  };

  return (
    <div
      style={{
        backgroundColor: "black",
        width: "400px",
        height: "400px",
      }}
    >
      {sqRender()}
    </div>
  );
};

export default Canvas;
