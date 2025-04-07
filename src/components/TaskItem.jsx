import React, { useState } from "react";
import "./TaskItem.css";

const TaskItem = ({ task, onMove, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(task.name);
  const [newDescription, setNewDescription] = useState(task.description);

  const handleEdit = () => {
    onEdit(newName, newDescription);
    setIsEditing(false);
  };

  return (
    <div className={`card ${task.completed ? "completed" : ""}`}>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Editar título"
          />
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            placeholder="Editar descrição"
          />
          <button onClick={handleEdit}>Salvar</button>
          <button onClick={() => setIsEditing(false)}>Cancelar</button>
        </div>
      ) : (
        <div>
          <p><strong>{task.name}</strong></p>
          <p>{task.description}</p>
          <button onClick={onMove}>
            {task.completed ? "Mover para A Fazer" : "Concluir"}
          </button>
          <button onClick={onDelete}>Deletar</button>
          <button onClick={() => setIsEditing(true)}>Editar</button>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
