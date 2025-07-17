function Input({ todoInput, addTask, setTodoInput }) {
  return (
    <div className="input_btn">
      <input
        type="text"
        placeholder="Enter a task"
        id="taskInput"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />
      <button id="addBtn" onClick={addTask}>
        +
      </button>
    </div>
  );
}

export default Input;
