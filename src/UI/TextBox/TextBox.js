import React from "react";
import { Input } from "semantic-ui-react";
import "./TextBox.scss";

const TextBox = (props) => {
  return (
    <Input
      fluid
      className="TextBox"
      value={props.value}
      name={props.name}
      onChange={props.onChange}
    />
  );
};

export default TextBox;
