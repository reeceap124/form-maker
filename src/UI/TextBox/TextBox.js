import React, { forwardRef } from "react";
import "./TextBox.scss";

const TextBox = forwardRef((props, ref) => {
  return (
    <input
      className="TextBox"
      value={props.value}
      name={props.name}
      onChange={props.onChange}
      ref={ref}
    />
  );
});

export default TextBox;
