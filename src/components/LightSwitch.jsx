import React, { useState } from "react";

function LightSwitch() {
  const [button, setButton] = useState("Включить");
  const [color, setColor] = useState("black");
  return (
    <div style={{ backgroundColor: color, width: "200px", height: "200px" }}>
      <button
        onClick={() => {
          color === "black" ? setColor("grey") : setColor("black");
          button === "Включить"
            ? setButton("Выключить")
            : setButton("Включить");
        }}
      >
        {button}
      </button>
    </div>
  );
}

export default LightSwitch;
