import React from "react";

import "./radio-button.style.scss"

const RadioButton = ({ label, options, onChangeFunction, checkedValue }) => {
  return (
    <div className="controls">
      <p>{label}</p>
      <div className="radio">
        {options &&
          options.map((option, id) => (
            <label key={id}>
              <input
                type="radio"
                value={option}
                checked={checkedValue === option}
                onChange={onChangeFunction}
              />
              <span className="radio-text">{option}</span>
            </label>
          ))}
      </div>
    </div>
  );
};

export default RadioButton;