import { useRef, useState } from "react";
import Inputs from "./components/Inputs";
import List from "./components/List";
import Footer from "./components/Footer";

const Body = ({ todos, setTodos }) => {
  const isSelectAll = useRef(false);
  const handleClearCompleted = () => {
    const completedTask = todos.filter((todo) => !todo.isCompleted);
    setTodos(completedTask);
  };

  const getUniqueId = () => {
    let id = todos.length;
    console.log(id);
    while (todos.find((item) => item.id === id)) {
      console.log(id);
      id = id + 1;
    }
    return id;
  };

  const handleAddTodos = (newTodoItem) => {
    const id = getUniqueId();
    setTodos((prevTodos) => [...prevTodos, { ...newTodoItem, id: id }]);
  };
  const handleSelectAllTodos = () => {
    console.log(isSelectAll.current)
    const tmpStatus = !isSelectAll.current
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({
        ...todo,
        isCompleted: tmpStatus,
      })),
    );
    isSelectAll.current = tmpStatus;
  };
  return (
    <div className="card">
      <div className="card-body">
        <Inputs onAdd={handleAddTodos} onSelectAll={handleSelectAllTodos} />
        <List todos={todos} setTodos={setTodos} />
      </div>
      <Footer todos={todos} onClearCompleted={handleClearCompleted} />
    </div>
  );
};

export default Body;
