import Inputs from "./components/Inputs";
import List from "./components/List";
import Footer from "./components/Footer";

const Body = () => {
  return (
    <div className="card">
      <div className="card-body">
        <Inputs />
        <List />
      </div>
      <Footer />
    </div>
  );
};

export default Body;
