import React, { Component } from "react";
import "./newPlayer.css";
import axios from "axios";

class NewPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      position: "",
      value: "",
      team: "",
      image: "",
      fieldEmpty: false,
      errorMessage: "All fields are required",
    };
  }

  handleInput = e => {
    // console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addPlayer = () => {
    if (
      !this.state.name ||
      !this.state.position ||
      !this.state.value ||
      !this.state.team ||
      !this.state.image
    ) {
      this.setState({
        fieldEmpty: true,
      });
    } else {
      // console.log(this.state.name);
      let newPlayer = {
        name: this.state.name,
        position: this.state.position,
        value: this.state.value,
        team: this.state.team,
        image: this.state.image,
      };
      axios.post("/api/players", newPlayer).then(res => {
        // console.log("ya lo agrego a la lista");
        this.props.getPlayers();
        this.setState({ fieldEmpty: false });
      });
    }
    this.setState({
      name: "",
      position: "",
      value: "",
      team: "",
      image: "",
    });
  };

  render() {
    // console.log(this.name.value);
    return (
      <div className="new-player-container">
        <div>
          <h2>Add New Player</h2>
        </div>
        <div className="fields-block">
          <p className="fields-required">
            {this.state.fieldEmpty ? this.state.errorMessage : null}
          </p>
          <input
            name="name"
            placeholder="Name"
            onChange={this.handleInput}
            className="add-player-field"
            value={this.state.name}
          />
          <input
            name="position"
            placeholder="Position"
            onChange={this.handleInput}
            className="add-player-field"
            value={this.state.position}
          />
          <input
            name="value"
            placeholder="Value"
            onChange={this.handleInput}
            className="add-player-field"
            value={this.state.value}
          />
          <input
            name="team"
            placeholder="Team"
            onChange={this.handleInput}
            className="add-player-field"
            value={this.state.team}
          />
          <input
            name="image"
            placeholder="Image"
            onChange={this.handleInput}
            className="add-player-field"
            value={this.state.image}
          />
          <button onClick={this.addPlayer}>ADD PLAYER</button>
        </div>
      </div>
    );
  }
}

export default NewPlayer;
