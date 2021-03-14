import React, { useState, useRef, useEffect } from "react";
import * as d3 from "d3";
import { fetchApi } from "../../../api-calls/api";

const BarChart = () => {
  const svgRef = useRef();
  const [data, setData] = useState();

  useEffect(() => {
      fetchApi("/industries", setData);
  }, []);

  const drawData = (data) => {};

  return <svg ref={svgRef}></svg>;
};

export default BarChart;
