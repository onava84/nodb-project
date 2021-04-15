const data = require("../data.json");
// const players = data;
// let id = data.length + 1;
let id = data[data.length - 1].id + 1;

module.exports = {
  getPlayers: (req, res) => {
    const { position, team } = req.query;
    console.log({ position, team });
    if (position && team) {
      const filteredUsers = data.filter(
        e => e.position === position && e.team === team
      );
      res.status(200).send(filteredUsers);
      return;
    }

    if (position) {
      const filteredUsers = data.filter(e => e.position === position);
      res.status(200).send(filteredUsers);
      return;
    }

    if (team) {
      const filteredUsers = data.filter(e => e.team === team);
      res.status(200).send(filteredUsers);
      return;
    }

    res.status(200).send(data);
  },
  getSinglePlayer: (req, res) => {
    const { id } = req.params;
    const index = data.findIndex(e => e.id === +id);
    res.status(200).send(data[index]);
  },
  deletePlayer: (req, res) => {
    const { id } = req.params;
    const index = data.findIndex(e => e.id === +id);

    data.splice(index, 1);
    res.status(200).send(data);
  },
  addPlayer: (req, res) => {
    const { name, position, value, team, image } = req.body;
    const newPlayer = {
      id,
      name,
      position,
      value,
      team,
      image,
    };
    data.push(newPlayer);
    id++;
    res.status(200).send(data);
  },
  editPlayer: (req, res) => {
    const { id } = req.params;
    const { name, position, value, team, image } = req.body;

    const index = data.findIndex(e => e.id === +id);

    if (index === -1) {
      res.status(404);
    }
    const playerToEdit = data[index];

    data[index] = {
      id: playerToEdit.id,
      name: name || playerToEdit.name,
      position: position || playerToEdit.position,
      value: value || playerToEdit.value,
      team: team || playerToEdit.team,
      image: image || playerToEdit.image,
    };
    res.status(200).send(data);
  },
};
