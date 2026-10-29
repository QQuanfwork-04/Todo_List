import { useState } from "react";

const displayMonthList = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
// function Validation() {}
// Validation.isRequired = function (selector, message) {
//   return {
//     selector: selector,
//     test: function (value) {
//       return value && value.trim() !== ""
//         ? undefined
//         : message || "Vui long nhap truong nay";
//     },
//   };
// };

const priorityList = [
  {
    id: "low",
    name: "Low",
  },
  {
    id: "medium",
    name: "Medium",
  },
  {
    id: "high",
    name: "High",
  },
];

const Inputs = ({ onAdd, onSelectAll }) => {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [dateError, setDateError] = useState("");
  const [priority, setPriority] = useState(priorityList[0]);

  const [errorMessage, setErrorMessage] = useState("");
  const handleAdd = (e) => {
    e.preventDefault();
    console.log("Gia tri date", date);
    const textErr = !text.trim() ? "Please input your task name" : "";
    const dateErr = !date ? "Please choose the date" : "";
    setErrorMessage(textErr);
    setDateError(dateErr);
    if (textErr || dateErr) {
      return;
    }

    const tmpDate = new Date(date);
    onAdd({
      text: text,
      priority: priority,
      date: `${displayMonthList[tmpDate.getMonth()]} ${String(tmpDate.getDate()).padStart(2, "0")}`,
      isCompleted: false,
    });

    setText("");
  };
  const handleSelectAll = (e) => {
    e.preventDefault();
    onSelectAll();
  };

  return (
    <div className="card-form">
      <div className="todo-add-info">
        <div className="todo-task-1">
        <input
          id="todo-task"
          className="todo-task"
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            setErrorMessage("");
          }}
          placeholder="Add a new task"
        />
        {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
      </div>
      <div className="todo-date-1">
        <input
          id="todo-date"
          className="todo-date"
          type="date"
          aria-lable="Due date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
            setDateError("");
          }}
        />
        {dateError && <div style={{ color: "red" }}>{dateError}</div>}
      </div>

      <div>
        <select
          id = "todo-priority"
          className="todo-priority"
          style={{ width: "96px", height: "45px" }}
          onChange={(e) => setPriority(e.target.value)}
        >
          {priorityList.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      </div>
      <div className="todo-btn">
        <button onClick={handleAdd} className="btn-add">
          + Add
        </button>
        <button onClick={handleSelectAll} className="btn-select-all">
          Select All
        </button>
      </div>
    </div>
  );
};

export default Inputs;
