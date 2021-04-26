import "./App.scss";
import "semantic-ui-css/semantic.min.css";
import UI from "./UI";
import FormBuilder from "./Components/FormBuilder";
const { HelloWorld, Form, TextBox } = UI;

function App() {
  const MyText = HelloWorld;
  return (
    <div className="App">
      <MyText value="Hello World" />
      <FormBuilder />
    </div>
  );
}

export default App;
