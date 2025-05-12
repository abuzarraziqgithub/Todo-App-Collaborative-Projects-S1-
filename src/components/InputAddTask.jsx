import "../App.css";
export default function InputAddBtn() {
  return (
    <>
      <div className="input_btn">
        <input type="text" placeholder="Enter a task" id="taskInput" />
        <button id="addBtn">+</button>
      </div>
    </>
  );
}
