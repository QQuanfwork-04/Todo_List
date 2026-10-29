import { useState } from "react";

const List = ({todos, setTodos}) => {
  const filters = [
    { id: 1, text: "All" },
    { id: 2, text: "Active" },
    { id: 3, text: "Completed" },
  ];
  const [activeFilter, setActiveFilter] = useState(1);

  const filterTodos = todos.filter((item) => {
  if (activeFilter === 2) {
    return !item.isCompleted;
  }

  if (activeFilter === 3) {
    return item.isCompleted;
  }

  return true;
});

  function onCompleteById(array, id) {
    const arrCom = array.map((item) =>
      item.id === id
        ? {
            ...item,
            isCompleted: !item.isCompleted,
            // output array bi doi isCompleted
          }
        : item,
    );
    return arrCom;
  }

  function onDeleteById(array, id) {
    const arrDel = array.filter((item) => item.id !== id);
    // output array remove item co id
    return arrDel;
  }

  function handleOnClick(id) {
    //input id
    console.log("Click");
    setTodos((prevTodos) => onCompleteById(prevTodos, id));
  }

  function handleDelete(id) {
    // input id
    //output array ma remove item co id truyen vao
    console.log("delete");
    setTodos((delTodos) => onDeleteById(delTodos, id));
  }
  function handleFilter(id) {
  console.log("filter")
  setActiveFilter(id);
  
}


  return (
    <div className="filter-options">
      {/* <div className="filter-option"> */}
      <div className="filter-tabs">
        {filters.map((filstate) => (
          <div
            key={filstate.id}
            className={
              activeFilter === filstate.id
                ? "filter-status-checked filter-status"
                : "filter-status"
            }
            onClick={() => handleFilter(filstate.id)}
          >
            {filstate.text}
          </div>
          
        ))}
      </div>
      {/* </div> */}
      <section className="middle_content" id="middle_content">
        {filterTodos.map((todo) => (
          <div key={todo.id} className="todo-item">
            <div id="r-side">
              <label className="label-check" key={todo.id}>
                <div
                  onClick={() => handleOnClick(todo.id)}
                  className={`label-checkbox ${
                    todo.isCompleted ? "checked" : ""
                  }`}
                />
                <span
                  style={{
                    textDecoration: todo.isCompleted ? "line-through" : "none",
                  }}
                >
                  {todo.text}
                </span>
              </label>
            </div>
            <div id="l-side">
              <div className="dot-wrapper">
                <span className={`priority-dot ${todo.priority}`}></span>
              </div>
              <span className="due-date">{todo.date}</span>
              <button
                onClick={() => handleDelete(todo.id)}
                className="Delete-btn"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 6h18" />
                  <path d="M8 6V4h8v2" />
                  <path d="M19 6l-1 14H6L5 6" />
                  <path d="M10 11v6" />
                  <path d="M14 11v6" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default List;
