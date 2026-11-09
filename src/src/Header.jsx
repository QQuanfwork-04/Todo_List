const Header = ({ todos }) => {
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
        </svg>
      </div>
      <div className="head-note">
        <h1 className="head-title">Today's Focus</h1>
        <p style={{ fontSize: "13.5px" }} className="head-desc">
          <strong>{formatHeaderDate(new Date())}</strong>
          {totalTask} task{" "}
        </p>
      </div>
    </div>
  );
};

export default Header;
