import React, { useState, useEffect } from "react";

import "./controls-panel.styles.scss";
import Typography from "@material-ui/core/Typography";
import DiscreteSlider from "../slider/slider.component";
import Button from "@material-ui/core/Button";
import SelectionControls from "../selection-controls/selection-controls.component";
import CustomCheckbox from "../checkbox/checkbox.component";


const ControlsPanel = ({ chart}) => {
  const [options, setOptions] = useState({
    layout: "lens",
    centrality: "none",
    tightness: 5,
  });

  const layoutOptions = ["Lens","Organic", "Standard"];
  const centralityOptions = ["None","Degrees", "Betweenness" ];


  return (
    <div className="controls-container">
      <Typography className="header">Graph Controls</Typography>
      <SelectionControls label="Select layout:" graphOptions={layoutOptions} onChangeFunction={()=> null} state={options} type="layout" />
      <CustomCheckbox label="Highlight frequently occured characters" changeFunction={()=> null} />
      <CustomCheckbox label="Filter out less relevant characters" changeFunction={()=> null} />

      <DiscreteSlider
        setOptions={(val)=> setOptions({...options, tightness: val})}
        applyTightness={()=> null}
        tightness={options.tightness}
      />

      <div className="buttons">
        <Button style={{ marginRight: 15 }} variant="contained" onClick={()=> null} >
          Reset
        </Button>
        <Button variant="contained" onClick={()=> null} >
          Change Layout
        </Button>
      </div>
    </div>
  );
};

export default ControlsPanel;
