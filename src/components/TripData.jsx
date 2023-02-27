
import React from "react";
import "./trip.css";

const TripData = ({ imgScr, heading, desc }) => {
  return (
    <div className="t-card">
      <div className="t-image">
        <img src={imgScr} alt="image" />
        <h4>{heading}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default TripData;
