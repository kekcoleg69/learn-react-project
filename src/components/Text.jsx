import React, { useState } from "react";

const Text = () => {
  let [name, setName] = useState("OLEG");
  function changeName() {
    if (name === name.toUpperCase()) {
      setName(name.toLowerCase());
    } else {
      setName(name.toUpperCase());
    }
  }
  const reverseName = name.split("").reverse().join("");
  return (
    <div>
      <p>{name}</p>
      <p>{reverseName}</p>
      <button onClick={changeName}>Изменить имя</button>
    </div>
  );
};

export default Text;
