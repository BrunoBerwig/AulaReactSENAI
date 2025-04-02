import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, toggleCompletion, deleteTask }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          onToggle={() => toggleCompletion(index)}
          onDelete={() => deleteTask(index)}
        />
      ))}
    </div>
  );
};

export default TaskList;
