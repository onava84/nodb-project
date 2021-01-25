import React from "react";
import "./teammate.css";

function Teammate(props) {
  return (
    <div>
      <p className="player-name-team">{props.playerName}</p>
      <button
        className="remove-button"
        onClick={e => props.handleRemoveTeam(props.playerId)}
      >
        X
      </button>
    </div>
  );
}

export default Teammate;
