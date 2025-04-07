import React, { useState } from "react";
import "./TaskItem.css";

const TaskItem = ({ task, onMove, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(task.name);
  const [newDescription, setNewDescription] = useState(task.description);
  const [newDeadline, setNewDeadline] = useState(task.deadline);
  const [newPriority, setNewPriority] = useState(task.priority);

  const handleEdit = () => {
    onEdit(newName, newDescription, newDeadline, newPriority);
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
          <textarea
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            placeholder="Editar descrição"
          ></textarea>
          <input
            type="date"
            value={newDeadline}
            onChange={(e) => setNewDeadline(e.target.value)}
            placeholder="Editar prazo"
          />
          <select
            value={newPriority}
            onChange={(e) => setNewPriority(e.target.value)}
          >
            <option value="Alta">Alta</option>
            <option value="Média">Média</option>
            <option value="Baixa">Baixa</option>
          </select>
          <button onClick={handleEdit}>Salvar</button>
          <button onClick={() => setIsEditing(false)}>Cancelar</button>
        </div>
      ) : (
        <div>
          <p><strong>{task.name}</strong></p>
          <p>{task.description}</p>
          <p>Data de Criação: {task.dateCreated}</p>
          <p>Prazo: {task.deadline}</p>
          <p>Prioridade: <span className={`priority-${task.priority.toLowerCase()}`}>{task.priority}</span></p>
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
