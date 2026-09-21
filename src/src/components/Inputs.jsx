const Inputs = () => {
  return (
    <div className="card-form">
      <form className="add-form">
        <input
          style={{ width: "245px", height: "46px" }}
          type="text"
          placeholder="Add a new task"
        />
        <input
          style={{ width: "146px", height: "45px" }}
          type="date"
          aria-lable="Due date"
          value={new Date()}
        />
        <select style={{ width: "96px", height: "45px" }} aria-label="Priority">
          <option>Medium</option>
          <option>High</option>
          <option>Low</option>
        </select>
        <button type="submit" class="btn-add">
          + Add
        </button>
      </form>
    </div>
  );
};

export default Inputs;
