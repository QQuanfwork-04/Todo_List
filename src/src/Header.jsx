const Header = ({todos}) => {
  const totalTask = todos.length;
  const formatHeaderDate = (dateString) => {
    if (!dateString) return "";

    const date = new Date(dateString);
    return (
      date.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
      }) + " · "
    );
  };

  return (
    <div className="head-card">
      <div className="head-logo">
        <img src="/checked.png" alt="check"/>
      </div>
      <div className="head-note">
        <h1 className="head-title">Today's Focus</h1>
        <p style = {{fontSize: "13.5px"}} className="head-desc">
            <strong>{formatHeaderDate(new Date())}</strong>
             {totalTask} task </p>
      </div>
    </div>
  );
};

export default Header;