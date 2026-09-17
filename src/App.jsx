import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([
    {id: 1, text: 'Set up project folder structure', isCompleted: false },
    {id: 2, text: 'Learn Flexbox basics', isCompleted: false },
    {id: 3, text: 'Build the todo list layout', isCompleted: false },
    {id: 4, text: 'Style checkbox with pure CSS', isCompleted: false },
    {id: 5, text: 'Practice CSS Grid', isCompleted: false },
    {id: 6, text: 'Add responsive media queries', isCompleted: false },
    {id: 7, text: 'Review pseudo-classes (:hover, :focus, :checked)', isCompleted: false }
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
        <div id="r-side">
          {todos.map((todo) =>(
          <label key={todo.id}>
            <input
              type="checkbox"
              checked={todo.isCompleted}
              onChange={() => handleCheckboxChange(todo.id)}
            />
            <span style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}></span>
            {todo.text}
          </label>
          ))}
        </div>
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
