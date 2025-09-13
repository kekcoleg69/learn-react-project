import React, { useState } from "react";

const Counter = () => {
  let [number, setNumber] = useState(0);
  console.log(number);
  function plus() {
    if (number < 10) {
      setNumber(number + 1);
    }
  }
  function minus() {
    if (number > 0) {
      setNumber(number - 1);
    }
  }
  return (
    <div>
      <div>{number}</div>

      <button onClick={plus}>+1</button>
      <button
        onClick={() => {
          minus();
        }}
      >
        -1
      </button>
    </div>
  );
};

export default Counter;
