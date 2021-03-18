import React, { useState } from "react";
import "./trading-status.styles.scss";
import DatasetViz from "../../components/dataset-viz/dataset-viz.component";
import RadioButton from "../../components/radio-buttons/radio-button.component";

const TradingStatus = () => {
  const datasetName1 = "tradingStatus1";
  const datasetName2 = "tradingStatus2";
  const datasetName3 = "tradingStatus3";

  const dimensionType = "TradingStatus";

  const [selection, setSelection] = useState({
    dataset: datasetName1,
    table: "Table 1",
  });


  const onChangeFunction = (e) => {
    switch (e.target.value) {
      case "Table 1":
        setSelection({ dataset: datasetName1, table: "Table 1" });
        break;
      case "Table 2":
        setSelection({ dataset: datasetName2, table: "Table 2" });
        break;
      case "Table 3":
          setSelection({ dataset: datasetName3, table: "Table 3" });
          break;
      default:
        setSelection({ dataset: datasetName1, table: "Table 1" });
    }

  };
  return (
    <div className="trading-status">
      <RadioButton
        label="Select which table to visualize:"
        options={["Table 1", "Table 2", "Table 3"]}
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

export default React.memo(TradingStatus);
