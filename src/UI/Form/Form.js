import React, { forwardRef } from "react";
import "./Form.scss";
const Form = forwardRef((props, ref) => {
  return (
    <form className="Form" onSubmit={props.onSubmit} ref={ref}>
      <h3>{props.title}</h3>
      {props.children}

      {/* <input type="number" onChange={logVal} value={state} /> */}
    </form>
  );
});

export default Form;
