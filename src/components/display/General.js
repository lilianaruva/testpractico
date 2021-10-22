import React from "react";
//components
import PriceEvolution from "./PriceEvolution";
import ComparativeAnalysis from "./ComparativeAnalysis";
import PresenceShare from "./PresenceShare";
//styles
import "../../styles/general.css";

const General = () => {
  return (
    <>
      <div style={{ margin: "2rem" }}>
        <h1>General Performance Analysis</h1>
        <div className="container">
          <div className="content">
            <PriceEvolution />
          </div>
          <div className="content">
          <PresenceShare />
          </div>
        </div>
        <ComparativeAnalysis />
      </div>
    </>
  );
};

export default General;
