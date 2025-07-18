function List({
  filteredTasks,
  handleCheck,
  checkedItems,
  deleteTask,
  startEdit,
  saveEdit,
  cancelEdit,
  editingIndex,
  editText,
  setEditText,
}) {
  return (
    <div className="listData">
      <ul>
        {filteredTasks.map(({ task, index }) => {
          return (
            <li key={index}>
              {editingIndex === index ? (
                // Edit mode
                <div className="edit-mode">
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="edit-input"
                    autoFocus
                  />
                  <button onClick={() => saveEdit(index)} className="save-btn">
                    ✓
                  </button>
                  <button onClick={cancelEdit} className="cancel-btn">
                    ✕
                  </button>
                </div>
              ) : (
                // Normal mode
                <>
                  <h4
                    style={{
                      textDecoration: checkedItems[index]
                        ? "line-through orangered 4px"
                        : "none",
                    }}
                  >
                    {task}
                  </h4>
                  <div className="task-actions">
                    <input
                      id="checkbox-input"
                      type="checkbox"
                      checked={checkedItems[index] || false}
                      onChange={() => handleCheck(index)}
                    />
                    <button
                      onClick={() => startEdit(index)}
                      className="edit-btn"
                      title="Edit task"
                    >
                      ✏️
                    </button>
                    <button
                      onClick={() => deleteTask(index)}
                      className="delete-btn"
                      title="Delete task"
                    >
                      🗑️
                    </button>
                  </div>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default List;
