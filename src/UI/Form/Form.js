import React from "react";
import "./Form.scss";
const Form = (props) => {
  return (
    <form className="Form">
      <p>{props.title}</p>
      {props.children}
    </form>
  );
};

export default Form;
