import "./App.scss";
import UI from "./UI";
const { HelloWorld, Form, TextBox } = UI;
const texts = ["my", "test", "text", "here"];

function App() {
  const MyText = HelloWorld;
  return (
    <div className="App">
      <MyText value="Hello World" />
      <Form title="Form Title">
        {texts.map((t) => {
          return <TextBox value={t} />;
        })}
      </Form>
    </div>
  );
}

export default App;
