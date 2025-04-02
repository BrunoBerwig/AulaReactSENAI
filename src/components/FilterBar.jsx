import React from "react";
import "./FilterBar.css";

const FilterBar = ({ currentFilter, setFilter }) => {
  const filterStyle = {
    margin: "20px 0",
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  };

  const buttonStyle = (active) => ({
    padding: "8px 12px",
    border: "1px solid #007BFF",
    borderRadius: "4px",
    backgroundColor: active ? "#007BFF" : "#fff",
    color: active ? "#fff" : "#007BFF",
    cursor: "pointer",
  });

  return (
    <div style={filterStyle}>
      <button style={buttonStyle(currentFilter === "all")} onClick={() => setFilter("all")}>
        Todas
      </button>
      <button style={buttonStyle(currentFilter === "pending")} onClick={() => setFilter("pending")}>
        Pendentes
      </button>
      <button style={buttonStyle(currentFilter === "completed")} onClick={() => setFilter("completed")}>
        Concluídas
      </button>
    </div>
  );
};

export default FilterBar;
