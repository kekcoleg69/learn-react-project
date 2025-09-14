import React, { useState } from "react";

const Input = () => {
  let [text, setText] = useState("");
  let symv =
    text.length > 0
      ? `Количество введенных символов : ${text.length} `
      : "Введите,пожалуйста,имя";
  return (
    <div>
      <input
        value={text}
        type="text"
        onChange={(evt) => {
          setText(evt.target.value);
        }}
      />
      <p>Привет, {text}</p>
      <p>{symv}</p>
    </div>
  );
};

export default Input;
