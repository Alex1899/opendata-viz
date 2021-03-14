import React from "react";

import "./selection-controls.styles.scss";
import Typography from "@material-ui/core/Typography";

const SelectionControls = ({ label, graphOptions, onChangeFunction, state, type }) => {
  return (
    <div className="controls">
      <Typography>{label}</Typography>
      <div className="radio">
        {graphOptions &&
          graphOptions.map((option, id) => (
            <label key={id}>
              <input
                type="radio"
                value={option.toLowerCase()}
                checked={state[type] === option.toLowerCase()}
                onChange={onChangeFunction}
              />
              <span className="radio-text">{option}</span>
            </label>
          ))}
      </div>
    </div>
  );
};

export default SelectionControls;
