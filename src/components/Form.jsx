import React, { useState } from "react";

const Form = () => {
  let [name, setName] = useState("");
  let [age, setAge] = useState("");
  let [savedName, setSavedName] = useState("");
  let [savedAge, setSavedAge] = useState("");

  return (
    <div>
      <input
        value={name}
        type="text"
        placeholder="Имя"
        onChange={(evt) => {
          setName(evt.target.value);
        }}
      />
      <input
        value={age}
        type="text"
        placeholder="Возраст"
        onChange={(evt) => {
          setAge(evt.target.value);
        }}
      />
      <button
        onClick={() => {
          setSavedName(name);
          setSavedAge(age);
        }}
      >
        Сохранить
      </button>
      <span>
        Имя: {savedName}, возраст : {savedAge}
      </span>
    </div>
  );
};

export default Form;
