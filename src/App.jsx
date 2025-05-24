import { useState } from "react";
import "./App.css";
function App() {
  const [todoInput, setTodoInput] = useState("");
  const [tasks, setTasks] = useState([]);
  function addTask() {
    if (todoInput.trim() !== "") {
      setTasks([...tasks, todoInput]);
      setTodoInput("");
    }
  }
  return (
    <>
      <div className="container">
        <div className="todoBox">
          <div className="heading">
            <h1>TodoMatic</h1>
            <p>What needs to be done?</p>
          </div>
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

          <div className="extraButtons">
            <button id="allBtn">All</button>
            <button id="activeBtn">Active</button>
            <button id="completedBtn">Completed</button>
          </div>
          {/* This is just a dummy list and you know it 😊 */}
          <div className="listData">
            <ul>
              {tasks.map((task, index) => {
                return <li key={index}>{task}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
