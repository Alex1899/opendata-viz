import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const BarChart = ({ v, data, percent }) => {
  const svgRef = useRef();
  data.sort((a, b) => d3.descending(a.value, b.value));

  useEffect(() => {
    // set the dimensions and margins of the graph

    let width = 700;
    let height = 400;
    const margin = { top: 50, bottom: 50, left: 50, right: 50 };

    d3.select(`.barchart-container-${v}`).select("svg").remove();

    let svg = d3
      .select(`.barchart-container-${v}`)
      .append("svg")
      .attr("width", width - margin.left - margin.right)
      .attr("height", height - margin.top - margin.bottom)
      .attr("viewBox", [0, 0, width, height])
      .call(zoom);

    const x = d3
      .scaleBand()
      .domain(d3.range(data.length))
      .range([margin.left, width - margin.right])
      .padding(0.1);

    let first = data[0].value
    let last = data[data.length - 1].value

    const y_range = first + last;

    const y = d3
      .scaleLinear()
      .domain([0, y_range])
      .range([height - margin.bottom, margin.top]);

    function zoom(svg) {
      const extent = [
        [margin.left, margin.top],
        [width - margin.right, height - margin.top],
      ];

      svg.call(
        d3
          .zoom()
          .scaleExtent([1, 8])
          .translateExtent(extent)
          .extent(extent)
          .on("zoom", zoomed)
      );

      function zoomed(event) {
        x.range(
          [margin.left, width - margin.right].map((d) =>
            event.transform.applyX(d)
          )
        );
        svg
          .selectAll(".bars rect")
          .attr("x", (d, i) => x(i))
          .attr("width", x.bandwidth());
        svg.selectAll(".x-axis").call(xAxis);
      }
    }

 


    svg
      .append("g")
      .attr("class", "bars")
      .selectAll("rect")
      .data(data)
      .join("rect")
      .attr("class", (d) => `${d.industry.name.toLowerCase()}-bar-${v}`)
      .attr("x", (d, i) => x(i))
      .attr("y", (d) => y(d.value))
      .attr("fill", (d) => d.industry.color)
      .attr("height", (d) => y(0) - y(d.value))
      .attr("width", x.bandwidth())
      .on("mouseover", (d) => {
        d3.select(`.${d.srcElement.className.baseVal}`).style("opacity", "0.4");
      })
      .on("mouseout", (d) => {
        d3.select(`.${d.srcElement.className.baseVal}`).style(
          "opacity",
          "unset"
        );
      })
      .append("title")
      .text((d) => `${d.industry.title}: ${d.value.toLocaleString()}`);

   

    const xAxis = (g) => {
      g.attr("transform", `translate(0, ${height - margin.bottom} )`)
        .call(d3.axisBottom(x))
        .style("font-size", "20px");
    };

    const yAxis = (g) => {
      g.attr("transform", `translate(${margin.left}, 0)`)
        .call(d3.axisLeft(y).ticks(null, data.format))
        .attr("font-size", "25px");
    };
    svg.append("g").attr("class", "y-axis").call(yAxis);
    svg.append("g").attr("class", "x-axis").call(xAxis);

    let text = ''
    let title = data[0].dimension.title
    if(percent) {
      title = title +" (%)"
    }
  
    if(first < 1){
      text = "No Businesses"
    }
    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", 80 - margin.top / 2)
      .attr("text-anchor", "middle")
      .style("font-size", "20px")
      .text(title);

    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", 200 - margin.top / 2)
      .attr("text-anchor", "middle")
      .style("font-size", "20px")
      .text(text);

    svg.node();
  }, [data, v]);

  return (
    <React.Fragment>
      <div
        className={`barchart-container-${v}`}
        style={{ backgroundColor: "#f0f0f0", margin: 40 }}
   
      ></div>
    </React.Fragment>
  );
};

export default BarChart;
