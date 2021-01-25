import React from "react";
import "./filter.css";

function Filter(props) {
  return (
    <div className="filter">
      <h3 className="filter-title">Filter by position</h3>
      <select
        className="dropdown"
        onChange={e => props.handlePositionSelection(e)}
      >
        <option selected value="All positions">
          All positions
        </option>
        <option value="Goalkeeper">Goalkeeper</option>
        <option value="Defender">Defender</option>
        <option value="Midfielder">Midfielder</option>
        <option value="Striker">Striker</option>
      </select>
    </div>
  );
}

export default Filter;
