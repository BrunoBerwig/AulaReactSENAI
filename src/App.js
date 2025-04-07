import React, { useState } from "react";
import Column from "./components/column";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const addTask = () => {
    if (taskName.trim()) {
      const newTask = {
        id: Date.now(),
        name: taskName,
        description: taskDescription,
        status: "todo",
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setTaskName("");
      setTaskDescription("");
    }
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

  const editTask = (taskId, newName, newDescription) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId
        ? { ...task, name: newName, description: newDescription }
        : task
    );
    setTasks(updatedTasks);
  };

  // Quantidade de tarefas pendentes
  const pendingCount = tasks.filter((task) => task.status === "todo").length;

  return (
    <div className="container">
      <h1>Lista de Tarefas</h1>
      <div>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Adicionar título da tarefa"
        />
        <input
          type="text"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          placeholder="Adicionar descrição da tarefa"
        />
        <button onClick={addTask}>Adicionar</button>
      </div>
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
