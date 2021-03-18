import React from "react";
import "./industry-list.styles.scss";

const IndustryList = ({ data }) => {
  return (
    <div className="industry-list">
      {data.data.map((d, i) => (
        <div key={i} className="industry">
          <span className="dot" style={{ backgroundColor: d.industry.color }}></span>
          <p className={`${d.industry.name.toLowerCase()}`}>
            {d.industry.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default React.memo(IndustryList);
