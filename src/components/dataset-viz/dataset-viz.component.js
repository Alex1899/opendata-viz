import React, { useState } from "react";
import AllCharts from "../../components/all-charts/all-charts.component"
import RadioButton from "../../components/radio-buttons/radio-button.component";
import { getDatasetTitleLabel } from "../../rdf-store/queries"

import "./dataset-viz.styles.scss"


const DatasetViz = ({datasetName, dimensionType}) => {
    const [chart, setChart] = useState("barchart");
    const options = ["barchart", "piechart"];
    const table_name = getDatasetTitleLabel(datasetName);
  
    return (
      <div className="dataset">
        <h3 className="title">{table_name.title}</h3>
        <div className="radio-btn">
          <RadioButton
            label="Select the chart option:"
            options={options}
            onChangeFunction={(e) => setChart(e.target.value)}
            checkedValue={chart}
          />
  
        </div>
  
        <AllCharts chartType={chart} datasetName={datasetName} label={table_name.label} dimensionType={dimensionType}/>
       
      </div>
    );
}

export default DatasetViz;