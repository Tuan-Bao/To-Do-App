import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

function Todo({ value, key, index, onHandleRemoveTask, onHandleEditTask }) {
  return (
    <div key={key} className="to-do-task">
      <input type="checkbox" className="task-checkbox" />
      <p>{value}</p>
      <div className="dropDown">
        <button className="dropdown-toggle">⁝</button>
        <ul className="dropdown-menu">
          <li onClick={() => onHandleRemoveTask(index)}>
            <span className="trashCan">
              <FontAwesomeIcon icon={faTrashCan} />
            </span>
          </li>
          <li onClick={() => onHandleEditTask(index)}>
            <span className="editTask">
              <FontAwesomeIcon icon={faPenToSquare} />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Todo;
