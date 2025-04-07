import React, { useRef, useState } from "react";
import "./TaskForm.css";

const TaskForm = ({ onAddTask, onClose }) => {
  const formRef = useRef(null);
  const [taskPriority, setTaskPriority] = useState("Média"); // Padrão: Média

  const handleClickOutside = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      onClose();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const taskName = e.target.taskName.value.trim();
    const taskDescription = e.target.taskDescription.value.trim();
    const taskDeadline = e.target.taskDeadline.value;
    if (taskName) {
      onAddTask({
        id: Date.now(),
        name: taskName,
        description: taskDescription,
        deadline: taskDeadline || "Sem prazo definido",
        priority: taskPriority, // Passa a prioridade selecionada
        status: "todo",
        completed: false,
        dateCreated: new Date().toLocaleDateString(),
      });
      onClose();
    }
  };

  return (
    <div className="task-form-overlay" onClick={handleClickOutside}>
      <div className="task-form" ref={formRef}>
        <form onSubmit={handleSubmit}>
          <h2>Adicionar Tarefa</h2>
          <input name="taskName" type="text" placeholder="Título da tarefa" required />
          <textarea name="taskDescription" placeholder="Descrição da tarefa"></textarea>
          <input name="taskDeadline" type="date" />
          {/* Campo de seleção para prioridade */}
          <select
            value={taskPriority}
            onChange={(e) => setTaskPriority(e.target.value)}
          >
            <option value="Alta">Alta</option>
            <option value="Média">Média</option>
            <option value="Baixa">Baixa</option>
          </select>
          <div className="buttons">
            <button type="submit">Adicionar</button>
            <button type="button" onClick={onClose}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
