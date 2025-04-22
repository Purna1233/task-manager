import React, { useState } from "react";
import Card from "./Card";

interface ColumnProps {
  title: string;
  count: number;
  tasks: string[];
}

const Column: React.FC<ColumnProps> = ({ title, count, tasks }) => {
  const [taskList, setTaskList] = useState(tasks);

  const handleDragStart = (event: React.DragEvent, task: string) => {
    event.dataTransfer.setData("text/plain", task);
  };

  const handleAddCard = () => {
    const newTask = prompt("Enter the task name:");
    if (newTask) {
      setTaskList([...taskList, newTask]);
    }
  };

  const handleDeleteTask = (task: string) => {
    setTaskList(taskList.filter((t) => t !== task));
  };

  return (
    <div className="column">
      <div className="column-header">
        <h3>{title}</h3>
        <span>{taskList.length}</span>
      </div>
      <div className="column-content">
        {taskList.map((task, index) => (
          <div key={index} style={{ display: "flex", alignItems: "center" }}>
            <Card text={task} draggable onDragStart={(event) => handleDragStart(event, task)} />
            <button
              onClick={() => handleDeleteTask(task)}
              style={{ marginLeft: "10px", backgroundColor: "#ff4d4d", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
            >
              Delete
            </button>
          </div>
        ))}
        <div className="add-card" onClick={handleAddCard}>Add card +</div>
      </div>
    </div>
  );
};

export default Column;