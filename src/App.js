import "./App.scss";
import React from "react";
import ButtonNav from "./Layouts/ButtonNav";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Routes from "./Components/Routes/Routes";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <FormBuilder /> */}
        <ButtonNav />
        <Link to="/form/1">
          <button>Form Builder</button>
        </Link>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
