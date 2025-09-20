import React, { useState } from "react";

function Form({ add, title, tasks }) {
  const [text, setText] = useState("");

  return (
    <div>
      <h1>{title}</h1>
      <form action="">
        <input
          type="text"
          value={text}
          onChange={(evt) => {
            setText(evt.target.value);
          }}
        />
        <button
          onClick={(evt) => {
            evt.preventDefault();
            add(text);
            setText("");
          }}
        >
          Добавить задачу
        </button>
      </form>
    </div>
  );
}

export default Form;
