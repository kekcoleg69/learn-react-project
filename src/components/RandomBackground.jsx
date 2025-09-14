import React, { useState } from "react";

function RandomBackground() {
  const [color, setColor] = useState("black");
  const colors = [
    "red",
    "green",
    "blue",
    "orange",
    "purple",
    "pink",
    "brown",
    "black",
    "gray",
    "cyan",
    "magenta",
    "lime",
    "teal",
    "indigo",
    "violet",
    "gold",
    "silver",
    "navy",
    "coral",
    "chocolate",
  ];
  return (
    <div style={{ backgroundColor: color, width: "200px", height: "200px" }}>
      <button
        onClick={() => {
          setColor(colors[Math.ceil(Math.random() * colors.length - 1)]);
        }}
      >
        {" "}
        Сменить фон
      </button>
    </div>
  );
}

export default RandomBackground;
