function Buttons({ filter, handleFilterChange }) {
  return (
    <div className="extraButtons">
      <button 
        id="allBtn"
        className={filter === "all" ? "active" : ""}
        onClick={() => handleFilterChange("all")}
      >
        All
      </button>
      <button 
        id="activeBtn"
        className={filter === "active" ? "active" : ""}
        onClick={() => handleFilterChange("active")}
      >
        Active
      </button>
      <button 
        id="completedBtn"
        className={filter === "completed" ? "active" : ""}
        onClick={() => handleFilterChange("completed")}
      >
        Completed
      </button>
    </div>
  );
}

export default Buttons;
