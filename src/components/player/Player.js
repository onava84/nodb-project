import React, { Component } from "react";
import "./player.css";
import axios from "axios";

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      name: "",
      position: "",
      value: "",
      team: "",
      image: "",
      fieldEmpty: false,
    };
  }

  toggleEditing = e => {
    // console.log(e);
    this.setState({
      name: "",
      position: "",
      value: "",
      team: "",
      image: "",
      editing: !this.state.editing,
    });
  };

  cleanInputs() {
    this.setState({
      name: "",
      position: "",
      value: "",
      team: "",
      image: "",
    });
  }

  handleInput = e => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  ///AQUI ME QUEDE PARA MANDAR LOS DATOS EDITADOS AL SERVIDOR
  handleEditing = id => {
    if (
      !this.state.name &&
      !this.state.position &&
      !this.state.value &&
      !this.state.team &&
      !this.state.image
    ) {
      this.setState({
        fieldEmpty: true,
      });
    } else {
      const newPlayer = {
        name: this.state.name,
        position: this.state.position,
        value: this.state.value,
        team: this.state.team,
        image: this.state.image,
      };
      axios
        .put(`http://localhost:4040/api/players/${id}`, newPlayer)
        .then(res => {
          this.props.getPlayers();
          this.toggleEditing();
          this.cleanInputs();
        });
    }
  };

  handleClickDelete = () => {
    this.props.handleDelete(this.props.id);
    this.props.handleRemoveTeam(this.props.id);
  };

  render() {
    return (
      <div className="player-card">
        <img src={this.props.image} className="player-image" />
        <h4 className="player-name">{this.props.name}</h4>
        <p>Position: {this.props.position}</p>
        <p>Value: {this.props.value} M</p>
        <p>Team: {this.props.team}</p>
        <button onClick={e => this.props.handleAddToTeam(this.props.id)}>
          ADD TO MY TEAM
        </button>
        {this.state.editing ? (
          <div className="update-fields">
            <p className="update-info-card">Update info card</p>
            <input
              name="name"
              value={this.state.name}
              placeholder="Name"
              className="update-field"
              onChange={this.handleInput}
            />
            <input
              name="position"
              value={this.state.position}
              placeholder="Position"
              className="update-field"
              onChange={this.handleInput}
            />
            <input
              name="value"
              value={this.state.value}
              placeholder="Value"
              className="update-field"
              onChange={this.handleInput}
            />
            <input
              name="team"
              value={this.state.team}
              placeholder="Team"
              className="update-field"
              onChange={this.handleInput}
            />
            <input
              name="image"
              value={this.state.image}
              placeholder="Image"
              className="update-field"
              onChange={this.handleInput}
            />
            <p className="fields-required">
              {this.state.fieldEmpty
                ? "You should fill at least 1 field"
                : null}
            </p>
          </div>
        ) : (
          ""
        )}
        <button
          onClick={e => this.toggleEditing(e)}
          className={this.state.editing ? "cancel" : ""}
        >
          {this.state.editing ? "CANCEL" : "EDIT PLAYER INFO"}
        </button>
        {this.state.editing ? (
          <button
            className="save-button"
            onClick={e => this.handleEditing(this.props.id)}
          >
            SAVE
          </button>
        ) : null}
        <button onClick={this.handleClickDelete}>DELETE PLAYER</button>
      </div>
    );
  }
}

export default Player;
