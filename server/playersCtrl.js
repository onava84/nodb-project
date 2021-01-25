const data = require("../data.json");
// const players = data;
// let id = data.length + 1;
let id = data[data.length - 1].id + 1;

module.exports = {
  getPlayers: (req, res) => {
    const { position } = req.query;
    if (!position || position === "All positions") {
      res.status(200).send(data);
    } else {
      const filteredUsers = data.filter(e => e.position === position);
      res.status(200).send(filteredUsers);
    }
    /////////
    // if (playersByQuery) {
    //   if (position === "Goalkeeper") {
    //     playersByQuery = playersByQuery.filter(e => e.position === position);
    //   } else if (position === "Defender") {
    //     playersByQuery = playersByQuery.filter(e => e.position === position);
    //   } else if (position === "Midfielder") {
    //     playersByQuery = playersByQuery.filter(e => e.position === position);
    //   } else if (position === "Striker") {
    //     playersByQuery = playersByQuery.filter(e => e.position === position);
    //   }
    // }
    //////////
    // if (position && position === "Goalkeeper") {
    //   playersByQuery = playersByQuery.filter(e => e.position === position);
    // } else if (position && position === "Defender") {
    //   playersByQuery = playersByQuery.filter(e => e.position === position);
    // } else if (position && position === "Midfielder") {
    //   playersByQuery = playersByQuery.filter(e => e.position === position);
    // } else if (position && position === "Striker") {
    //   playersByQuery = playersByQuery.filter(e => e.position === position);
    // }
    // res.status(200).send(playersByQuery);
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
