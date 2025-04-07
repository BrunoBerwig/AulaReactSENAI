import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tarefas, marcarCompleto, apagarTarefa }) => {
  return (
    <div>
      {tarefas.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          onToggle={() => marcarCompleto(index)}
          onDelete={() => apagarTarefa(index)}
        />
      ))}
    </div>
  );
};

export default TaskList;
