import React, { useState } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";


export default function CustomCheckbox({ label, changeFunction }) {
  const [state, setState] = useState({
    checked: false,
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.checked });
    changeFunction(e.target.checked);
  };

  return (
    <FormControlLabel
      control={
        <Checkbox
          size="small"
          checked={state.checked}
          onChange={handleChange}
          name="checked"
          style={{ color: "#1a75ff" }}
        />
      }
      label={label}
      style={{ marginTop: -5, marginBottom: 10 }}
    />
  );
}
