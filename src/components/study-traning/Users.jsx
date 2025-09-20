import React, { useState } from "react";

function Users() {
  const [users, setUsers] = useState([
    { id: 1, name: "Олег", age: 28 },
    { id: 2, name: "Мария", age: 25 },
    { id: 3, name: "Иван", age: 30 },
  ]);
  return (
    <div>
      <ul>
        {users.map((user) => {
          return (
            <li>
              <span>{user.name}</span>
              <span>{user.age}</span>
            </li>
          );
        })}
      </ul>
      <button
        onClick={() => {
          setUsers(
            users.map((user) =>
              user.id === 2 ? { ...user, name: "Анна" } : user
            )
          );
        }}
      >
        Поменять имя у элемента с id 2
      </button>
    </div>
  );
}

export default Users;
