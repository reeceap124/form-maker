import "./App.less";
import UI from "./UI";
import FormBuilder from "./Components/FormBuilder";
const { HelloWorld } = UI;

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
