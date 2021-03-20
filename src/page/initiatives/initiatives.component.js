import React, { useState, useEffect, useMemo } from "react";
import DatasetViz from "../../components/dataset-viz/dataset-viz.component";
import RadioButton from "../../components/radio-buttons/radio-button.component";

const Initiatives = ({ datasetNames, title }) => {
  let [dict, options] = useMemo(() => {
    let obj = {};
    const options = datasetNames.map((d, i) => `Table ${i + 1}`);

    for (let i = 0; i < datasetNames.length; i++) {
      obj[options[i]] = datasetNames[i];
    }
    return [obj, options];
  }, [datasetNames]);

  const [selection, setSelection] = useState({
    dataset: dict[options[0]],
    table: options[0],
  });

  const onChangeFunction = (e) => {
    let table = e.target.value;
    setSelection({ dataset: dict[table], table });
  };

  return (
    <div className="trading-status">
      <RadioButton
        label="Select which table to visualize:"
        options={options}
        onChangeFunction={onChangeFunction}
        checkedValue={selection.table}
      />
      <h5 style={{ textAlign: "center" }}>{title}</h5>

      <DatasetViz datasetName={selection.dataset} dimensionType="Initiative" />
    </div>
  );
};

export default React.memo(Initiatives);
