import React from "react";
import "./TextBox.scss";

const TextBox = (props) => {
  return (
    <input
      className="TextBox"
      value={props.value}
      name={props.name}
      onChange={props.onChange}
    />
  );
};

export default TextBox;
