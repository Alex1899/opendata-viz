import React, { useState } from "react";
import "./response-rate.styles.scss";
import DatasetViz from "../../components/dataset-viz/dataset-viz.component";
import RadioButton from "../../components/radio-buttons/radio-button.component";
import * as d3 from "d3";

const ResponseRate = () => {
  const datasetName1 = "responseRate1";
  const datasetName2 = "responseRate2";
  const dimensionType = "WorkforceSize";

  const [selection, setSelection] = useState({
    dataset: datasetName1,
    table: "Table 1",
  });
  console.log("rendered...")

  const onChangeFunction = (e) => {
    console.log("entered change function")

    switch (e.target.value) {
      case "Table 1":
        setSelection({ dataset: datasetName1, table: "Table 1" });
        break;
      case "Table 2":
        setSelection({ dataset: datasetName2, table: "Table 2" });
        break;
      default:
        setSelection({ dataset: datasetName1, table: "Table 1" });
    }

    
    
    console.log("exiting change function")

  };
  return (
    <div className="response-rate">
      <RadioButton
        label="Select which table to visualize:"
        options={["Table 1", "Table 2"]}
        onChangeFunction={onChangeFunction}
        checkedValue={selection.table}
      />
      <DatasetViz
        datasetName={selection.dataset}
        dimensionType={dimensionType}
      />
    </div>
  );
};

export default React.memo(ResponseRate);
