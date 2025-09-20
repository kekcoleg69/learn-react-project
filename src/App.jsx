import React, { useState } from "react";
import Form from "./components/Form";
import TasksList from "./components/TasksList";
const App = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  function addTask(text) {
    if (text) {
      const newTask = { id: Date.now(), text: text };
      setTasks([...tasks, newTask]);
      localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
    }
  }
  function deleteTask(arr, id) {
    const newTasks = arr.filter((elem) => {
      return elem.id !== id;
    });
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  }
  const [color, setColor] = useState("red");
  return (
    <div className="container" style={{ backgroundColor: color }}>
      <button
        onClick={() => {
          if (color === "red") {
            setColor("yellow");
          } else {
            setColor("red");
          }
        }}
      >
        Поменять тему
      </button>
      <Form add={addTask} title="text" tasks={tasks} />
      <TasksList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
