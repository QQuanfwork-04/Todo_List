import { useState } from "react";

const List = () => {
  const [todos] = useState([
    {
      id: 1,
      text: "Set up project folder structure",
      priority: "low",
      date: "Oct 12",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Learn Flexbox basics",
      priority: "medium",
      date: "Sep 14",
      isCompleted: false,
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
      isCompleted: false,
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
      <div className="filter-option">
        <div className="filter-tabs">
          <label className="filter-status" for="filter-all">
            All
          </label>
          <label className="filter-status" for="filter-active">Active</label>
          <label className="filter-status" for="filter-completed">Completed</label>
        </div>
      </div>
      <section id="middle_content">
        {todos.map((todo) => (
          <div key={todo.id} className="todo-item">
            <div id="r-side">
              <label className="label-check" key={todo.id}>
                <input className="label-checkbox"
                  type="checkbox"
                  checked={todo.isCompleted}
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
              <span className={`priority-dot ${todo.priority}`}></span>
              <span className="due-date">{todo.date}</span>
              <button className="Delete-btn"> {'\u{1F5D1}'} </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default List;