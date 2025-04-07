import React, { useState } from "react";
import Column from "./components/column";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");

  const addTask = () => {
    if (taskName.trim()) {
      setTasks([...tasks, { name: taskName, status: "todo", completed: false }]);
      setTaskName("");
    }
  };

  const updateTaskStatus = (taskIndex, newStatus) => {
    const updatedTasks = [...tasks];
    updatedTasks[taskIndex].status = newStatus;
    updatedTasks[taskIndex].completed = newStatus === "done";
    setTasks(updatedTasks);
  };

  const deleteTask = (taskIndex) => {
    const updatedTasks = tasks.filter((_, index) => index !== taskIndex);
    setTasks(updatedTasks);
  };

  const editTaskName = (taskIndex, newName) => {
    if (newName.trim()) {
      const updatedTasks = [...tasks];
      updatedTasks[taskIndex].name = newName;
      setTasks(updatedTasks);
    }
  };

  return (
    <div className="container">
      <h1>Lista de tarefas</h1>
      <div>
        <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} placeholder="Adicionar nova tarefa"/>
        <button onClick={addTask}>Adicionar</button>
      </div>
      <div className="columns">
        <Column
          title="A Fazer"
          tasks={tasks.filter((task) => task.status === "todo")}
          updateTaskStatus={updateTaskStatus}
          deleteTask={deleteTask}
          editTaskName={editTaskName}
          status="todo"
        />
        <Column
          title="Concluído"
          tasks={tasks.filter((task) => task.status === "done")}
          updateTaskStatus={updateTaskStatus}
          deleteTask={deleteTask}
          editTaskName={editTaskName}
          status="done"
        />
      </div>
    </div>
  );
};

export default App;
