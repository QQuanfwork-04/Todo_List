
import "./App.css";
import Header from "./src/Header";
import Body from "./src/Body";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
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
    <>
      <main>
        <Header todos={todos}/>
        <Body todos={todos} setTodos={setTodos} />
      </main>
    </>
  );
}

export default App;
