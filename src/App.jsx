import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([
    {id: 1, text: 'Set up project folder structure', priority: "low", date: "Oct 12", isCompleted: false },
    {id: 2, text: 'Learn Flexbox basics', priority: "medium", date: "Sep 14", isCompleted: false },
    {id: 3, text: 'Build the todo list layout', priority: "low", date: "Nov 18", isCompleted: false },
    {id: 4, text: 'Style checkbox with pure CSS', priority: "high", date: "Aug 14", isCompleted: false },
    {id: 5, text: 'Practice CSS Grid', priority: "high", date: "May 1", isCompleted: false },
    {id: 6, text: 'Add responsive media queries', priority: "low", date: "Dec 19", isCompleted: false },
    {id: 7, text: 'Review pseudo-classes (:hover, :focus, :checked)', priority: "medium", date: "Jan 1", isCompleted: false }
  ])
  const handleCheckboxChange = (id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted } // Đảo trạng thái true/false
      }
      return todo
    })
    setTodos(updatedTodos) 
  }
  return (
    <>
      <section id="middle_content">
        {todos.map((todo) =>(
          <div key={todo.id} className="todo-item">
            <div id="r-side">
              <label id="lable_check" key={todo.id}>
                <input
                  type="checkbox"
                  checked={todo.isCompleted}
                  onChange={() => handleCheckboxChange(todo.id)}
                />
                <span style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>{todo.text}</span>
              </label>
            </div>
            <div id="l-side">
              <span className={`priority-dot ${todo.priority}`}></span>
              <span className="due-date">{todo.date}</span>
            </div>
        </div>
          ))}
      </section>
      <section id="center">
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count - 8)}
        >
          Count is {count}
        </button>
      </section>

      <section id="spacer"></section>
    </>
  )
}

export default App
