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

  function addTask() {
    if (todoInput.trim() !== "") {
      setTasks([...tasks, todoInput]);
      setTodoInput("");
    }
  }

  // Hanlder Function for handling checkbox
  function handleCheck(index) {
    console.log(checkedItems);
    setCheckedItems((prevChecked) => ({
      ...prevChecked,
      [index]: !prevChecked[index],
    }));
  }

  return (
    <>
      <Container>
        <Input
          todoInput={todoInput}
          setTodoInput={setTodoInput}
          addTask={addTask}
        />
        <Buttons />
        <List
          tasks={tasks}
          handleCheck={handleCheck}
          checkedItems={checkedItems}
          setCheckedItems={setCheckedItems}
        />
      </Container>
    </>
  );
}

export default App;
