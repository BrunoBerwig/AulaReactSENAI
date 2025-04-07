import React from "react";
import TaskItem from "./TaskItem";
import "./column.css";

const Column = ({ title, tasks, updateTaskStatus, deleteTask, status,  }) => {
  return (
    <div className="column">
      <h2>{title}</h2>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          onMove={() =>
            updateTaskStatus(
              index,
              status === "todo" ? "done" : "todo"
            )
          }
          onDelete={() => deleteTask(index)}
        />
      ))}
    </div>
  );
};

export default Column;
