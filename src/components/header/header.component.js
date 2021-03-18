import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";

const Header = () => {
  return (
    <nav className="sheets">
      <Link className="link" to="/">
        HomePage
      </Link>
      <Link className="link" to="/sample-size">
        SampleSize
      </Link>
      <Link className="link" to="/response-rate">
        ReponseRate
      </Link>
      <Link className="link" to="/trading-status">
        TradingStatus
      </Link>
      <Link className="link" to="/applied">
        AppliedInitiatives
      </Link>
      <Link className="link" to="/received">
        ReceivedInitiatives
      </Link>
      <Link className="link" to="/intending">
        IntendingToApply
      </Link>
    </nav>
  );
};

export default Header;
