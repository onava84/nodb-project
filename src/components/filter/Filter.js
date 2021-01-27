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

      <select className="dropdown" onChange={e => props.handleTeamPlaying(e)}>
        <option selected value="All teams">
          All teams
        </option>
        <option value="Barcelona">Barcelona</option>
        <option value="Real Madrid">Real Madrid</option>
        <option value="Juventus">Juventus</option>
        <option value="Bayern Munich">Bayern Munich</option>
        <option value="PSG">PSG</option>
        <option value="Manchester City">Manchester City</option>
        <option value="Man United">Man United</option>
        <option value="Cagliari">Cagliari</option>
        <option value="Atletico de Madrid">Atletico de Madrid</option>
        <option value="Napoli">Napoli</option>
      </select>
    </div>
  );
}

export default Filter;
