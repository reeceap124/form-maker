import React, { useState } from "react";
import "./Form.scss";
const Form = (props) => {
  const [state, setState] = useState(1);
  const logVal = (e) => {
    setState(parseInt(e.target.value));
    console.log("type:", typeof state);
    console.log("value", state);
  };
  return (
    <form className="Form" onSubmit={props.onSubmit}>
      <h3>{props.title}</h3>
      {props.children}

      {/* <input type="number" onChange={logVal} value={state} /> */}
    </form>
  );
};

export default Form;
