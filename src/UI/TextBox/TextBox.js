import React from "react";
import "./TextBox.scss";

const TextBox = (props) => {
  return <input className="TextBox" type="text" value={props.value} />;
};

export default TextBox;
