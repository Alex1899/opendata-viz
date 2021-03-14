import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: "90%",
  },
});

const DiscreteSlider = ({ setOptions, applyTightness, tightness }) => {
  const classes = useStyles();

  const handleChange = (val) => {
    applyTightness(val);
    setOptions(val);
  };

  const marks = [
    { value: 0, label: "0" },
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
    { value: 6, label: "6" },
    { value: 7, label: "7" },
    { value: 8, label: "8" },
    { value: 9, label: "9" },
    { value: 10, label: "10" },
  ];

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider" gutterBottom>
        Tightness
      </Typography>
      <Slider
        style={{ marginLeft: 5, width: "100%", color: "#1a75ff" }}
        value={tightness}
        aria-labelledby="discrete-slider"
        step={1}
        marks={marks}
        min={0}
        max={10}
        onChange={(e, val) => handleChange(val)}
      />
    </div>
  );
};

export default DiscreteSlider;
