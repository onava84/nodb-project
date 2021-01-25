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
    };
  }

  getPlayers = () => {
    axios
      .get(`http://localhost:4040/api/players?position=${this.state.position}`)
      .then(res => {
        // console.log(res.data);
        this.setState({
          players: res.data,
        });
      });
  };

  componentDidMount() {
    this.getPlayers();
  }

  // getPlayersPost() {
  //   this.setState({
  //     players: this.players,
  //   });
  // }

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

  componentDidUpdate() {
    this.getPlayers();
  }

  render() {
    // console.log(this.state.position);
    return (
      <div>
        <Header />
        <div className="main">
          <section className="body">
            <NewPlayer getPlayers={this.getPlayers} />
            <Filter
              handlePositionSelection={this.handlePositionSelection}
              position={this.state.position}
            />
            <Players
              playersList={this.state.players}
              delete={this.handleDelete}
              getPlayers={this.getPlayers}
              handleAddToTeam={this.handleAddToTeam}
              handleRemoveTeam={this.handleRemoveTeam}
            />
          </section>
          <aside className="sidebar">
            <Team
              teamToBuild={this.state.team}
              handleRemoveTeam={this.handleRemoveTeam}
              totalValue={this.state.totalValue}
            />
          </aside>
        </div>
      </div>
    );
  }
}

export default App;
