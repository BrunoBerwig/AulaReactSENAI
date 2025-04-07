import React from "react";
import "./TaskItem.css";

const TaskItem = ({ task, onMove, onDelete }) => {
  return (
    <div className={`card ${task.completed ? "completed" : ""}`}>
      <p>{task.name}</p>
      <button onClick={() => onMove(task.id)}>
        {task.completed ? "Mover para A Fazer" : "Concluir"}
      </button>
      <button onClick={() => onDelete(task.id)}>Deletar</button>
      <button onClick={() => alert("Editar tarefa")}>Editar</button>
    </div>
  );
};

export default TaskItem;
