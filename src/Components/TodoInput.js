import React from "react";

function TodoInput({ task, onSetTask, onHandleAddTask }) {
  return (
    <div className="input-container">
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Nhập việc cần làm..."
          value={task}
          onChange={(e) => onSetTask(e.target.value)}
          className="input-field"
        />
        <button
          className="add-button"
          onClick={() => {
            onHandleAddTask(task);
            onSetTask("");
          }}
        >
          Thêm
        </button>
      </div>
    </div>
  );
}

export default TodoInput;
