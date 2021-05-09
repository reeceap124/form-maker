import React from "react";
import "./PageIndicator.scss";

const PageIndicator = (props) => {
  const indicators = [];
  for (let i = 0; i < props.length; i++) {
    indicators.push(undefined);
  }
  return (
    <div className="pageIndicator_wrapper">
      {indicators.map((val, index) => (
        <button
          key={`pageIndicator${index}`}
          className={`pageIndicator ${
            index === props.active ? "pageIndicator_active" : null
          }`}
        />
      ))}
    </div>
  );
};

export default PageIndicator;
