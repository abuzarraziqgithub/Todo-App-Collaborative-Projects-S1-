import "./App.css";
import Heading from "./components/Heading.jsx";
import InputAddBtn from "./components/InputAddTask.jsx";
import ExtraButtons from "./components/ExtraButtons.jsx";
import List from "./components/List.jsx";
function App() {
  return (
    <>
      <div className="container">
        <div className="todoBox">
          <Heading />
          <InputAddBtn handleInput="" />
          <ExtraButtons />
          {/* This is just a dummy list and you know it 😊 */}
          <List />
        </div>
      </div>
    </>
  );
}

export default App;
