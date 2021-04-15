import "./App.css";
import UI from "./UI";
const { HelloWorld, Form } = UI;

function App() {
  const MyText = HelloWorld;
  return (
    <div className="App">
      <MyText value="Hello World" />
      <Form title="Form Title" />
    </div>
  );
}

export default App;
