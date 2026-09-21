const Header = () => {
  const formatHeaderDate = (dateString) => {
    if (!dateString) return "";

    const date = new Date(dateString);
    return (
      date.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
      }) + " - "
    );
  };

  return (
    <div className="head-card">
      <div className="head-logo">
        <p>&#10004;</p>
      </div>
      <div className="head-note">
        <h2 className="head-title">Today's Focus</h2>
        <p className="head-desc">
            <strong>{formatHeaderDate(new Date())}</strong>
             7 tasks </p>
      </div>
    </div>
  );
};

export default Header;