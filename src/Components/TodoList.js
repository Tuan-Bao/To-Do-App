import React from "react";
import Todo from "./Todo";

function TodoList({ todos, onHandleRemoveTask, onHandleEditTask }) {
  const rows = [];
  todos.forEach((todo, id) => {
    rows.push(
      <Todo
        value={todo}
        key={id}
        index={id}
        onHandleRemoveTask={onHandleRemoveTask}
        onHandleEditTask={onHandleEditTask}
      />
    );
  });

  return <div className="to-do-list">{rows}</div>;
}

export default TodoList;
