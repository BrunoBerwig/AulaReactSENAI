import React, { useState } from "react";
import Column from "./components/column";
import TaskForm from "./components/taskForm";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const addTask = (newTask) => {
    setTasks([
      ...tasks,
      { ...newTask, priority: newTask.priority || "Média" } // Adiciona prioridade padrão
    ]);
  };

  const updateTaskStatus = (taskId, newStatus) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId
        ? { ...task, status: newStatus, completed: newStatus === "done" }
        : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const editTask = (taskId, newName, newDescription, newDeadline, newPriority) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId
        ? {
            ...task,
            name: newName,
            description: newDescription,
            deadline: newDeadline,
            priority: newPriority || task.priority // Mantém prioridade anterior se não for alterada
          }
        : task
    );
    setTasks(updatedTasks);
  };

  const pendingCount = tasks.filter((task) => task.status === "todo").length;

  return (
    <div className="container">
      <h1>Lista de Tarefas</h1>
      <button onClick={() => setShowForm(true)}>Adicionar uma tarefa</button>
      {showForm && (
        <TaskForm
          onAddTask={addTask}
          onClose={() => setShowForm(false)}
        />
      )}
      <div className="columns">
        <Column
          title="A Fazer"
          tasks={tasks.filter((task) => task.status === "todo")}
          updateTaskStatus={updateTaskStatus}
          deleteTask={deleteTask}
          editTask={editTask}
          status="todo"
          extraInfo={`Você tem ${pendingCount} tarefa(s) pendente(s)`}
        />
        <Column
          title="Concluído"
          tasks={tasks.filter((task) => task.status === "done")}
          updateTaskStatus={updateTaskStatus}
          deleteTask={deleteTask}
          editTask={editTask}
          status="done"
        />
      </div>
    </div>
  );
};

export default App;
