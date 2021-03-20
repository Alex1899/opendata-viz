import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/header.component";
import Home from "./page/home/home.component";
import SampleSize from "./page/sample-size/sample-size.component";
import ResponseRate from "./page/response-rate/response-rate.component";
import TradingStatus from "./page/trading-status/trading-status.component";
import Initiatives from "./page/initiatives/initiatives.component";

function App() {
  const appliedInitiatives = {
    title:
      "Question: Has your enterprise applied for any of the following initiatives?",
    datasetNames: [
      "appliedInitiatives1",
      "appliedInitiatives2",
      "appliedInitiatives3",
    ],
  };
  const receivedInitiatives = {
    title:
      "Question: Of the initiatives applied for, which has your enterprise received?",
    datasetNames: ["receivedInitiatives1", "receivedInitiatives2"],
  };
  const intendingInitiatives = {
    title:
      "Question: Is your enterprise intending to apply for any of the following initiatives?",
    datasetNames: ["intendingToApply1", "intendingToApply2"],
  };

  return (
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sample-size" component={SampleSize} />
        <Route path="/response-rate" component={ResponseRate} />
        <Route path="/trading-status" component={TradingStatus} />
        <Route
          path="/applied"
          render={(props) => (
            <Initiatives
              key="applied"
              datasetNames={appliedInitiatives.datasetNames}
              title={appliedInitiatives.title}
              {...props}
            />
          )}
        />
        <Route
          path="/received"
          render={(props) => (
            <Initiatives
              key="received"
              datasetNames={receivedInitiatives.datasetNames}
              title={receivedInitiatives.title}
              {...props}
            />
          )}
        />
        <Route
          path="/intending"
          render={(props) => (
            <Initiatives
              key="intending"
              datasetNames={intendingInitiatives.datasetNames}
              title={intendingInitiatives.title}
              {...props}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
