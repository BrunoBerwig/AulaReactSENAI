import React from "react";
import TaskItem from "./TaskItem";
import "./column.css";

const Column = ({ title, tasks, updateTaskStatus, deleteTask, editTask, status, extraInfo }) => {
  return (
    <div className="column">
      <h2>{title}</h2>
      {extraInfo && <p className="extra-info">{extraInfo}</p>} {/* Texto adicional */}
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onMove={() =>
            updateTaskStatus(task.id, status === "todo" ? "done" : "todo")
          }
          onDelete={() => deleteTask(task.id)}
          onEdit={(newName, newDescription, newDeadline) =>
            editTask(task.id, newName, newDescription, newDeadline)
          }
        />
      ))}
    </div>
  );
};

export default Column;
