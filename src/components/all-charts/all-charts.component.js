import React, { useEffect } from "react";
import BarChart from "../charts/barchart/barchart.component";
import PieChart from "../charts/piechart/piechart.component";
import * as d3 from "d3";
import "./all-charts.styles.scss";
import {
  getDataForAllDimensions,
  getDimensionNames,
} from "../../rdf-store/queries";

const AllCharts = ({
  dimensionType,
  datasetName,
  label,
  chartType,
  title
}) => {
  const dim_names = getDimensionNames(dimensionType);
  const allDimData = getDataForAllDimensions(datasetName, dim_names);
  let percent = false;
  if (title.includes("Percentage")){
    percent = true;
  }
  return (
    <div className="all-charts">
      <h5>{label}</h5>

      <div className="charts">
        {allDimData.map((obj, i) => {
          if (chartType === "barchart") {
            return <BarChart key={i} v={i} data={obj.data} percent={percent} />;
          } else {
            return <PieChart key={i} v={i} data={obj.data} percent={percent}/>;
          }
        })}
      </div>
    </div>
  );
};

export default AllCharts;
