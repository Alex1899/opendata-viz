import React, { useEffect } from "react";
import * as d3 from "d3";

import "./piechart.styles.scss";

const PieChart = ({ v, data, percent }) => {
  data.sort((a, b) => d3.descending(a.value, b.value));

  const margin = {
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
  };

  const outerRadius = 190;
  const innerRadius = 80;

  const width = 2 * outerRadius + margin.left + margin.right;
  const height = 2 * outerRadius + margin.top + margin.bottom;

  useEffect(() => {
    drawChart();
  }, [data]);

  const drawChart = () => {
    // Remove the old svg
    d3.select(`.piechart-${v}`).select(`svg`).remove();

    // Create new svg
    const svg = d3
      .select(`.piechart-${v}`)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    const arcGenerator = d3
      .arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius);

    const pieGenerator = d3
      .pie()
      .padAngle(0)
      .value((d) => d.value);

    const arc = svg.selectAll().data(pieGenerator(data)).enter();

    // Append arcs
    arc
      .append("path")
      .attr("class", (d) => `${d.data.industry.name.toLowerCase()}-pie-${v}`)
      .on("mouseover", (d) => {
        d3.select(`.${d.srcElement.className.baseVal}`).style("opacity", "0.4");
        d3.select(`p.${d.srcElement.className.baseVal}`).style(
          "text-shadow",
          "1px 0px #000"
        );
        d3.select(`.${d.srcElement.className.baseVal}-text`)
          .attr("opacity", "1")
          .attr("font-weight", "bold");
      })
      .on("mouseout", (d) => {
        d3.select(`.${d.srcElement.className.baseVal}`).style("opacity", "1");
        d3.select(`p.${d.srcElement.className.baseVal}`).style(
          "text-shadow",
          "unset"
        );
        d3.select(`.${d.srcElement.className.baseVal}-text`).attr(
          "opacity",
          "0"
        );
      })
      .attr("d", arcGenerator)
      .style("fill", (d, i) => d.data.industry.color)
      .style("stroke", "#ffffff")
      .style("stroke-width", 5)
      .append("title")
      .text(
        (d) => `${d.data.industry.title}: ${d.data.value.toLocaleString()}`
      );

    // Append text labels
    arc
      .append("text")
      .attr(
        "class",
        (d) => `${d.data.industry.name.toLowerCase()}-pie-${v}-text`
      )
      .attr("text-anchor", "middle")
      .attr("opacity", "0")
      .text((d) => `${d.data.value.toString()}`)
      .style("fill", "black")
      .attr("transform", (d) => {
        const [x, y] = arcGenerator.centroid(d);
        return `translate(${x}, ${y})`;
      });

    arc.append("text").attr("text-anchor", "m");

    let text = "";
    let first = data[0].value
    let title = data[0].dimension.title
    if(percent) {
      title = title +" (%)"
    }
  
    if (first < 1) {
      text = "No Businesses";
    }
    svg
      .append("g")
      .append("text")
      .attr("text-anchor", "middle")
      .attr("font-weight", "bold")
      .text( title)

    svg
    .append("text")
    .attr("text-anchor", "middle")
    
    .attr("y", 100 - margin.top )
    .text(text);

   

}

  return (
    <React.Fragment>
      <div className={`piechart-${v}`} />
    </React.Fragment>
  );
};

export default React.memo(PieChart);
