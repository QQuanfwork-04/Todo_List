const Footer = ({ todos, onClearCompleted }) => {
  const total = todos.length;
  const completed = todos.filter((todo) => todo.isCompleted).length;
  const percent = total === 0 ? 0: Math.round((completed/total)*100);
  return (
    <div className="card-footer">
        <div className="progress-label">
          <div className="completed-text">
           <div className="c-text">
             <span><strong>{completed}</strong> of {total} completed </span>
           </div>
            <div className="progress-right" style={{color: "#8B8496", fontSize: "12px"}}>
              <span className="percent-text">{percent}%</span>
            </div>
          </div>
          <div className="progress-bar">
            <div className="progress-bar-fill" style={{ width: `${percent}%` }}></div>
          </div>
        </div>
      <div className="progress-btn">
        <button className="clear-btn" type="button" onClick={onClearCompleted}>
          Clear completed
        </button>
      </div>
    </div>
  );
};

export default Footer;
