import React from "react";
const Form = (props) => {
  return (
    <form>
      <p>{props.title}</p>
      {props.children}
    </form>
  );
};

export default Form;
