import React from "react";
import "./CircleButton.scss";

const CircleButton = (props) => {
  return (
    <label>
      <span
        className={
          "CircleButtonLabel " + (props.labelOpen ? "labelOpen" : null)
        }
      >
        {props.label}
      </span>

      <button className="CircleButton" onClick={props.onClick}>
        {props.children}
      </button>
    </label>
  );
};

export default CircleButton;
