import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/header.component";
import Home from "./page/home/home.component";
import SampleSize from "./page/sample-size/sample-size.component";
import ResponseRate from "./page/response-rate/response-rate.component";
import TradingStatus from "./page/trading-status/trading-status.component";
import Received from "./page/received/received.component";
import Applied from "./page/applied/applied.component";
import Intending from "./page/intending/intending.component";

function App() {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sample-size" component={SampleSize} />
        <Route path="/response-rate" component={ResponseRate} />
        <Route path="/trading-status" component={TradingStatus} />
        <Route path="/received" component={Received} />
        <Route path="/applied" component={Applied} />
        <Route path="/intending" component={Intending} />
      </Switch>
    </div>
  );
}

export default App;
