import React, { forwardRef } from "react";
import "./TextBox.scss";

const TextBox = forwardRef((props, ref) => {
  return (
    <div
      className={`TextBox_wrapper${props.cName ? " " + props.cName : ""}`}
      ref={ref}
    >
      {props.label ? (
        <label className="TextBox_label">{props.label}</label>
      ) : null}
      <input
        className="TextBox"
        value={props.value}
        name={props.name}
        onChange={props.onChange}
      />
    </div>
  );
});

export default TextBox;
