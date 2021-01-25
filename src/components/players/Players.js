import React, { Component } from "react";
import Player from "../player/Player";
import "./players.css";

class Players extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const playersMap = this.props.playersList.map(e => {
      return (
        <Player
          id={e.id}
          name={e.name}
          position={e.position}
          value={e.value}
          team={e.team}
          image={e.image}
          className="player"
          handleDelete={this.props.delete}
          getPlayers={this.props.getPlayers}
          handleAddToTeam={this.props.handleAddToTeam}
          handleRemoveTeam={this.props.handleRemoveTeam}
        />
      );
    });
    return (
      <div className="players-container">
        <div>
          <h2>Available Players</h2>
        </div>
        <div className="players-cards">{playersMap}</div>
      </div>
    );
  }
}

export default Players;
