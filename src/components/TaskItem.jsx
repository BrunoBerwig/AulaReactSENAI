import React from "react";
import "./TaskItem.css";

const TaskItem = ({ task, onMove, onDelete }) => {
  return (
    <div className={`card ${task.completed ? "completed" : ""}`}>
      <p>{task.name}</p>
      <button onClick={onMove}>
        {task.completed ? "Mover para A Fazer" : "Concluir"}
      </button>
      <button onClick={onDelete}>Deletar</button>
    </div>
  );
};

export default TaskItem;
