import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/header/Header";
import Players from "./components/players/Players";
import NewPlayer from "./components/newPlayer/NewPlayer";
import Team from "./components/team/Team";
import Filter from "./components/filter/Filter";

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: [],
      team: [],
      totalValue: 0,
      position: "",
      teamPlaying: "",
    };
  }

  getPlayers = () => {
    let position =
      this.state.position === "All positions" ? undefined : this.state.position;
    let team =
      this.state.teamPlaying === "All teams"
        ? undefined
        : this.state.teamPlaying;
    let queries = {
      position,
      team,
    };
    let queryString = "";

    for (let key in queries) {
      if (queries[key]) {
        queryString += "&" + key + "=" + queries[key];
      }
    }

    axios.get(`http://localhost:4040/api/players?${queryString}`).then(res => {
      // console.log(res.data);
      this.setState({
        players: res.data,
      });
    });
  };

  componentDidMount() {
    this.getPlayers();
  }

  handleDelete = id => {
    axios.delete(`http://localhost:4040/api/players/${id}`).then(res => {
      // console.log(res.data);
      this.setState({
        players: res.data,
      });
    });
  };

  handleAddToTeam = id => {
    const index = this.state.players.findIndex(e => e.id === +id);
    const found = this.state.team.find(
      e => e.name === this.state.players[index].name
    );
    if (found) {
      alert("The player is already in the list");
    } else {
      const newTeammate = this.state.players[index];
      this.setState({
        team: [...this.state.team, newTeammate],
        totalValue: this.state.totalValue + newTeammate.value,
      });
    }
    //AQUI TERMINA MI CODIGO

    // const filteredPlayer = this.state.players.filter(e => e.id === +id);
    // console.log({ filteredPlayer });
    // let updatedTeam = [...this.state.team, ...filteredPlayer];
    // console.log({ updatedTeam });
    // // console.log(filteredTeam);
    // const totalValue = updatedTeam.reduce((acc, cur) => {
    //   return (acc += cur.value);
    // }, 0);

    // this.setState({
    //   team: updatedTeam,
    //   totalValue,
    // });
  };

  handleRemoveTeam = id => {
    const filteredTeam = this.state.team.filter(e => e.id !== +id);
    const totalValue = filteredTeam.reduce((acc, cur) => {
      return (acc += cur.value);
    }, 0);

    this.setState({
      team: filteredTeam,
      totalValue,
    });
  };

  handlePositionSelection = e => {
    // console.log(e.target.value);
    this.setState({
      position: e.target.value,
    });
  };

  handleTeamPlaying = e => {
    // console.log(e.target.value);
    this.setState({
      teamPlaying: e.target.value,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.position !== this.state.position ||
      prevState.teamPlaying !== this.state.teamPlaying
    ) {
      this.getPlayers();
    }
  }

  render() {
    // console.log(this.state.teamPlaying);
    const { players, team, totalValue, position, teamPlaying } = this.state;
    return (
      <div>
        <Header />
        <div className="main">
          <section className="body">
            <NewPlayer getPlayers={this.getPlayers} />
            <Filter
              handlePositionSelection={this.handlePositionSelection}
              position={position}
              handleTeamPlaying={this.handleTeamPlaying}
              teamPlaying={teamPlaying}
            />
            <Players
              playersList={players}
              delete={this.handleDelete}
              getPlayers={this.getPlayers}
              handleAddToTeam={this.handleAddToTeam}
              handleRemoveTeam={this.handleRemoveTeam}
            />
          </section>
          <aside className="sidebar">
            <Team
              teamToBuild={team}
              handleRemoveTeam={this.handleRemoveTeam}
              totalValue={totalValue}
            />
          </aside>
        </div>
      </div>
    );
  }
}
export default App;
