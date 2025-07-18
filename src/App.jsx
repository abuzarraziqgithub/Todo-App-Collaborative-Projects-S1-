import { useState } from "react";
import "./App.css";
import Container from "./components/Container";
import Input from "./components/Input";
import Buttons from "./components/Buttons";
import List from "./components/List";

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [checkedItems, setCheckedItems] = useState({});
  const [editingIndex, setEditingIndex] = useState(null);
  const [editText, setEditText] = useState("");
  const [filter, setFilter] = useState("all"); // "all", "active", "completed"

  function addTask() {
    if (todoInput.trim() !== "") {
      setTasks([...tasks, todoInput]);
      setTodoInput("");
    }
  }

  // Handler Function for handling checkbox
  function handleCheck(index) {
    setCheckedItems((prevChecked) => ({
      ...prevChecked,
      [index]: !prevChecked[index],
    }));
  }

  // Delete task function
  function deleteTask(index) {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);

    // Update checkedItems to maintain correct indexes
    const newCheckedItems = {};
    Object.keys(checkedItems).forEach((key) => {
      const keyIndex = parseInt(key);
      if (keyIndex < index) {
        newCheckedItems[keyIndex] = checkedItems[keyIndex];
      } else if (keyIndex > index) {
        newCheckedItems[keyIndex - 1] = checkedItems[keyIndex];
      }
    });
    setCheckedItems(newCheckedItems);
  }

  // Start editing a task
  function startEdit(index) {
    setEditingIndex(index);
    setEditText(tasks[index]);
  }

  // Save edited task
  function saveEdit(index) {
    if (editText.trim() !== "") {
      const newTasks = [...tasks];
      newTasks[index] = editText;
      setTasks(newTasks);
    }
    setEditingIndex(null);
    setEditText("");
  }

  // Cancel editing
  function cancelEdit() {
    setEditingIndex(null);
    setEditText("");
  }

  // Filter tasks based on current filter
  function getFilteredTasks() {
    return tasks
      .map((task, index) => ({ task, index }))
      .filter(({ index }) => {
        if (filter === "active") {
          return !checkedItems[index]; // Show unchecked tasks
        } else if (filter === "completed") {
          return checkedItems[index]; // Show checked tasks
        }
        return true; // Show all tasks
      });
  }

  // Handle filter change
  function handleFilterChange(newFilter) {
    setFilter(newFilter);
  }

  return (
    <>
      <Container>
        <Input
          todoInput={todoInput}
          setTodoInput={setTodoInput}
          addTask={addTask}
        />
        <Buttons filter={filter} handleFilterChange={handleFilterChange} />
        <List
          filteredTasks={getFilteredTasks()}
          handleCheck={handleCheck}
          checkedItems={checkedItems}
          deleteTask={deleteTask}
          startEdit={startEdit}
          saveEdit={saveEdit}
          cancelEdit={cancelEdit}
          editingIndex={editingIndex}
          editText={editText}
          setEditText={setEditText}
        />
      </Container>
    </>
  );
}

export default App;
