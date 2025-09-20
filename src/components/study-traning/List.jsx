import React, { useState } from "react";

function List() {
  const users = [
    { id: 1, name: "Олег", age: 28 },
    { id: 2, name: "Анна", age: 25 },
    { id: 3, name: "Иван", age: 31 },
  ];
  users.map((user) => {
    console.log(user);
  });

  return (
    <ul>
      {users.map((user) => {
        user.color = user.age < 30 ? "green" : "red";
      })}
      {users.map((user) => (
        <li key={user.id}>
          <span style={{ color: user.color }}>Имя: {user.name}</span>
          <span>({user.age} лет)</span>
          <button
            onClick={() => {
              if (user.color === "red") {
                user.color = "green";
              } else {
                user.color = "red";
              }
            }}
          >
            сменить цвет
          </button>
        </li>
      ))}
    </ul>
  );
}

export default List;
