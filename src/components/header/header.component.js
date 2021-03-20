import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";

const Header = () => {
  const [active, setActive] = useState("");

  const handleClick = (e) => {
    const clicked = e.target.id;
    if (active === clicked) {
      setActive("");
    } else {
      setActive(clicked);
    }
  };

  return (
    <nav className="sheets">
      <Link
        id="homepage"
        onClick={handleClick}
        className={`link ${active === "homepage" && "active"}`}
        to="/"
      >
        HomePage
      </Link>
      <Link
        id="samplesize"
        onClick={handleClick}
        className={`link ${active === "samplesize" && "active"}`}
        to="/sample-size"
      >
        SampleSize
      </Link>
      <Link
        id="responserate"
        onClick={handleClick}
        className={`link ${active === "responserate" && "active"}`}
        to="/response-rate"
      >
        ReponseRate
      </Link>
      <Link
        id="tradingstatus"
        onClick={handleClick}
        className={`link ${active === "tradingstatus" && "active"}`}
        to="/trading-status"
      >
        TradingStatus
      </Link>
      <Link
        id="applied"
        onClick={handleClick}
        className={`link ${active === "applied" && "active"}`}
        to="/applied"
      >
        AppliedInitiatives
      </Link>
      <Link
        id="received"
        onClick={handleClick}
        className={`link ${active === "received" && "active"}`}
        to="/received"
      >
        ReceivedInitiatives
      </Link>
      <Link
        id="intending"
        onClick={handleClick}
        className={`link ${active === "intending" && "active"}`}
        to="/intending"
      >
        IntendingToApply
      </Link>
    </nav>
  );
};

export default Header;
