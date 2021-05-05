import "./App.scss";
import UI from "./UI";
import React from "react";
import FormBuilder from "./Components/FormBuilder";
import ButtonNav from "./Layouts/ButtonNav";
const { HelloWorld } = UI;

function App() {
  const MyText = HelloWorld;
  return (
    <div className="App">
      <MyText value="Hello World" />
      <FormBuilder />
      <ButtonNav />
    </div>
  );
}

export default App;
