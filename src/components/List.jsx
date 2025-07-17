function List({ tasks, handleCheck, checkedItems, setCheckedItems }) {
  return (
    <div className="listData">
      <ul>
        {tasks.map((task, index) => {
          return (
            <li key={index}>
              <h4
                style={{
                  textDecoration: checkedItems[index]
                    ? "line-through orangered 4px"
                    : "none",
                }}
              >
                {task}
              </h4>
              <input
                type="checkbox"
                checked={checkedItems[index] || false}
                onChange={() => handleCheck(index)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default List;
