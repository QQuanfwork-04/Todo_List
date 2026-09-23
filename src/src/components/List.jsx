import { useState } from "react";

const List = () => {
  const [todos] = useState([
    {
      id: 1,
      text: "Set up project folder structure",
      priority: "low",
      date: "Oct 12",
      isCompleted: true,
    },
    {
      id: 2,
      text: "Learn Flexbox basics",
      priority: "medium",
      date: "Sep 14",
      isCompleted: true,
    },
    {
      id: 3,
      text: "Build the todo list layout",
      priority: "low",
      date: "Nov 18",
      isCompleted: false,
    },
    {
      id: 4,
      text: "Style checkbox with pure CSS",
      priority: "high",
      date: "Aug 14",
      isCompleted: true,
    },
    {
      id: 5,
      text: "Practice CSS Grid",
      priority: "high",
      date: "May 01",
      isCompleted: false,
    },
    {
      id: 6,
      text: "Add responsive media queries",
      priority: "low",
      date: "Dec 19",
      isCompleted: false,
    },
    {
      id: 7,
      text: "Review pseudo-classes (:hover, :focus, :checked)",
      priority: "medium",
      date: "Jan 01",
      isCompleted: false,
    },
  ]);
  return (
    <div>
      {/* <div className="filter-option"> */}
      <div className="filter-tabs">
        <label className="filter-status" for="filter-all">
          All
        </label>
        <label className="filter-status" for="filter-active">
          Active
        </label>
        <label className="filter-status" for="filter-completed">
          Completed
        </label>
      </div>
      {/* </div> */}
      <section id="middle_content">
        {todos.map((todo) => (
          <div key={todo.id} className="todo-item">
            <div id="r-side">
              <label className="label-check" key={todo.id}>
                <input
                  className="real-checkbox"
                  type="checkbox"
                  checked={todo.isCompleted}
                  readOnly
                />
                <span
                  className={`label-checkbox ${
                    todo.isCompleted ? "checked" : ""
                  }`}
                ></span>
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
              <button className="Delete-btn">
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
