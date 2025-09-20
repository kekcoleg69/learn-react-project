import React, { useState } from "react";

function Tasks() {
  const [tasks, setTasks] = useState([1, 2, 3, 4, 5]);

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li>{task}</li>
        ))}
      </ul>
      <button
        onClick={() => {
          setTasks([...tasks].concat([tasks.length + 1]));
        }}
      >
        Добавить элемент
      </button>
      <button
        onClick={() => {
          setTasks(tasks.slice(0, tasks.length - 1));
        }}
      >
        Удалить последний элемент
      </button>
      <button
        onClick={() => {
          setTasks(tasks.slice(1, tasks.length));
        }}
      >
        Удалить первый элемент
      </button>
      <button
        onClick={() => {
          setTasks(tasks.filter((item) => item != "3"));
        }}
      >
        Удалить "3"
      </button>
      <button
        onClick={() => {
          setTasks(
            tasks.map((item) => {
              return item === 2 ? (item = 20) : (item = item);
            })
          );
        }}
      >
        поменять 2 на 20
      </button>
      <button
        onClick={() => {
          setTasks(
            tasks.filter((_, index) => {
              return index !== 2;
            })
          );
        }}
      >
        Удалить элемент с индексом 2
      </button>
    </div>
  );
}

export default Tasks;
