import React from "react";

import "./home.styles.scss";

const Home = () => {
  return (
    <div className="home">
      <h3>COMP6214 Open Data Innovation Coursework I </h3>
      <p style={{ fontSize: 20, marginBottom: 0 }}>Aleko Kvashilava </p>
      <p>Student ID: 29015022</p>

      <div className="content">
        <p>
          The indicators and analysis presented on this website are based on
          responses from the new voluntary fortnightly business survey, which
          captures businesses responses on how their turnover, workforce prices,
          trade and business resilience have been affected in the two week
          reference period. These data relate to the period 6 April 2020 to 19
          April 2020.
          <br />
          <br />
          The survey was sent to around 17,600 UK businesses, and results
          presented in this release are based on a limited number of responses,
          around 34.7% (6,114) of all businesses surveyed who responded.
          Estimates from the Business Impact of Coronavirus (COVID-19) Survey
          (BICS) are currently unweighted* and should be treated with caution
          when used to evaluate the impact of COVID-19 across the UK economy.
          Each business was assigned the same weight regardless of turnover,
          size or industry, and the data in the latest period are final.
        </p>
      </div>
    </div>
  );
};

export default Home;
