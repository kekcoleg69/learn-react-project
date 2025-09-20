import React from "react";
import MyButton from "./ui/MyButton/MyButton";

function Task({ task, index, deleteTask, tasks }) {
  return (
    <li>
      {index + 1}.{task.text}
      {/* <button

      >
      </button> */}
      <MyButton
        onClick={() => {
          deleteTask(tasks, task.id);
        }}
      >
        Удалить задачу
      </MyButton>
    </li>
  );
}

export default Task;
