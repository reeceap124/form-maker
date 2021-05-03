import "./App.scss";
import UI from "./UI";
import React, { useLayoutEffect, useRef } from "react";
import FormBuilder from "./Components/FormBuilder";
import ButtonNav from "./Layouts/ButtonNav";
const { HelloWorld } = UI;

function App() {
  const MyText = HelloWorld;
  const formRef = useRef(null);
  // const childRef = useRef(null);
  useLayoutEffect(() => {
    if (formRef.current) {
      console.log("Document height: ", document.body.scrollHeight);
      console.log("inner height", window.innerHeight);
      console.log("ref height", formRef.current.offsetHeight);
      // for (const el of childRef.current) {
      //   console.log("child height", el, el.offsetHeight);
      // }
    }
  }, [window.innerHeight, document.body.scrollHeight, formRef]);

  function bunchOfElements() {
    const elements = [];
    for (let i = 0; i <= 5; i++) {
      elements.push(i);
    }
    console.log(elements.length);

    return elements.map((e) => (
      <div
        key={`test_${e}`}
        className="testDiv"
        // ref={(e) => (childRef.current[e] = e)}
      ></div>
    ));
  }
  return (
    <div className="App">
      <MyText value="Hello World" />
      <FormBuilder />
      <ButtonNav />
      <div ref={formRef}>{bunchOfElements()}</div>
    </div>
  );
}

export default App;
