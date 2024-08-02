import { useState, useEffect } from "react";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";

function App() {
  const [task, setTask] = useState("");
  const [todos, setToDos] = useState([]);

  function persistData(newList) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }

  function handleAddTask(newToDo) {
    if (newToDo !== "") {
      const newTodoList = [...todos, newToDo];
      persistData(newTodoList);
      setToDos(newTodoList);
    }
  }

  function handleRemoveTask(id) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== id;
    });
    persistData(newTodoList);
    setToDos(newTodoList);
  }

  function handleEditTask(id) {
    const taskToBeEdited = todos[id];
    setTask(taskToBeEdited);
    handleRemoveTask(id);
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }

    let localTodos = localStorage.getItem("todos");
    if (!localTodos) {
      return;
    }

    localTodos = JSON.parse(localTodos).todos;
    setToDos(localTodos);
  }, []);

  return (
    <>
      <h3>Danh sách việc cần làm</h3>
      <TodoInput
        task={task}
        onSetTask={setTask}
        onHandleAddTask={handleAddTask}
      />
      <TodoList
        todos={todos}
        onHandleRemoveTask={handleRemoveTask}
        onHandleEditTask={handleEditTask}
      />
    </>
  );
}

export default App;
