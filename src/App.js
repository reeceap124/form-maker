import "./App.scss";
import React from "react";
import FormBuilder from "./Components/FormBuilder";
import ButtonNav from "./Layouts/ButtonNav";

function App() {
  return (
    <div className="App">
      <FormBuilder />
      <ButtonNav />
    </div>
  );
}

export default App;
