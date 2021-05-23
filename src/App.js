import "./App.scss";
import React from "react";
import ButtonNav from "./Layouts/ButtonNav";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Routes from "./Components/Routes/Routes";
import NewMaker from "./Components/NewMaker/NewMaker";

function App() {
  return (
    <div className="App">
      <Router>
        <ButtonNav />
        {/* <NewMaker /> */}
        <Link to="/form/1">
          <button>Form Builder</button>
        </Link>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
