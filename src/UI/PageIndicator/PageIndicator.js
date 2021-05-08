import React from "react";
import "./PageIndicator.scss";

const PageIndicator = (props, { length = 0 }) => {
  const indicators = [];
  for (let i = 0; i < length; i++) {
    indicators.push(undefined);
  }
  return (
    <div className="pageIndicator_wrapper">
      {indicators.map((val, index) => (
        <button
          className={`pageIndicator ${
            index === props.active ? "pageIndicator_active" : null
          }`}
        />
      ))}
    </div>
  );
};

export default PageIndicator;
