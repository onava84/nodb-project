import React, { Component } from "react";
import Teammate from "../../teammates/Teammate";
import "./team.css";

class Team extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const teamMap = this.props.teamToBuild.map(e => {
      return (
        <Teammate
          playerName={e.name}
          handleRemoveTeam={this.props.handleRemoveTeam}
          playerId={e.id}
        />
      );
    });
    return (
      <div className="team-block">
        <h2>My Team</h2>
        <div>{teamMap}</div>
        <h3 className="total-market-value">Total Market Value</h3>
        <h4>${this.props.totalValue} M</h4>
      </div>
    );
  }
}

export default Team;
