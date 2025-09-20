import React from "react";
import Task from "./Task";

function TasksList({ tasks, deleteTask }) {
  {
    return tasks.length > 0 ? (
      <div>
        <h2>Список задач:</h2>
        <ul>
          {tasks.map((task, index) => {
            return (
              <Task
                task={task}
                index={index}
                key={task.id}
                deleteTask={deleteTask}
                tasks={tasks}
              />
            );
          })}
        </ul>
      </div>
    ) : (
      <h2>Задачи не найдены</h2>
    );
  }
}

export default TasksList;
