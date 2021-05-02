import "./App.scss";
import UI from "./UI";
import FormBuilder from "./Components/FormBuilder";
import ButtonNav from "./Layouts/ButtonNav";
const { HelloWorld } = UI;

function App() {
  const MyText = HelloWorld;
  const CircleButton = UI.CircleButton;
  return (
    <div className="App">
      <MyText value="Hello World" />
      {/* <FormBuilder /> */}
      <ButtonNav />
    </div>
  );
}

export default App;
