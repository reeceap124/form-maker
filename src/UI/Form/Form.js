import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import "./Form.less";
const MyForm = (props) => {
  const [state, setState] = useState(1);
  const logVal = (e) => {
    setState(parseInt(e.target.value));
    console.log("type:", typeof state);
    console.log("value", state);
  };
  return (
    <Form className="Form" onSubmit={props.onSubmit}>
      <h3>{props.title}</h3>
      {props.children}

      {/* <input type="number" onChange={logVal} value={state} /> */}
    </Form>
  );
};

export default MyForm;
