const Footer = () => {
  return (
    <div className="card-footer">
        <div className="progress-label">
          <div className="completed-text">
           <div className="c-text">
             <span><strong>3</strong> of 7 completed </span>
           </div>
            <div className="progress-right" style={{color: "#8B8496", fontSize: "12px"}}>
              <span className="percent-text">43%</span>
            </div>
          </div>
          <div className="progress-bar">
            <div className="progress-bar-fill" style={{ width: "43%" }}></div>
          </div>
        </div>
      <div className="progress-btn">
        <button className="clear-btn" type="button">
          Clear completed
        </button>
      </div>
    </div>
  );
};

export default Footer;
