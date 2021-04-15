import "./App.css";
import UI from "./UI";
const { HelloWorld, Form, TextBox } = UI;
const texts = ["my", "test", "text", "here"];

function App() {
  const MyText = HelloWorld;
  return (
    <div className="App">
      <MyText value="Hello World" />
      <Form title="Form Title">
        <TextBox value="TEST TEXT BOX" />
        {texts.map((t) => {
          return <TextBox value={t} />;
        })}
      </Form>
    </div>
  );
}

export default App;
