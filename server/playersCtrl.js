const data = require("../data.json");
// const players = data;
// let id = data.length + 1;
let id = data[data.length - 1].id + 1;

module.exports = {
  getPlayers: (req, res) => {
    // const { position, team } = req.query;
    // if (
    //   (!position || position === "All positions") &&
    //   (!team || team === "All teams")
    // ) {
    //   res.status(200).send(data);
    // } else if (
    //   (!position || position === "All positions") &&
    //   team === "Barcelona"
    // ) {
    //   const filteredUsers = data.filter(e => e.team === team);
    //   res.status(200).send(filteredUsers);
    // } else if (
    //   (!position || position === "All positions") &&
    //   team === "Real Madrid"
    // ) {
    //   const filteredUsers = data.filter(e => e.team === team);
    //   res.status(200).send(filteredUsers);
    // } else if (
    //   (!position || position === "All positions") &&
    //   team === "Juventus"
    // ) {
    //   const filteredUsers = data.filter(e => e.team === team);
    //   res.status(200).send(filteredUsers);
    // } else if (
    //   (!position || position === "All positions") &&
    //   team === "Bayern Munich"
    // ) {
    //   const filteredUsers = data.filter(e => e.team === team);
    //   res.status(200).send(filteredUsers);
    // } else if ((!position || position === "All positions") && team === "PSG") {
    //   const filteredUsers = data.filter(e => e.team === team);
    //   res.status(200).send(filteredUsers);
    // } else if (
    //   (!position || position === "All positions") &&
    //   team === "Manchester City"
    // ) {
    //   const filteredUsers = data.filter(e => e.team === team);
    //   res.status(200).send(filteredUsers);
    // } else if (
    //   (!position || position === "All positions") &&
    //   team === "Man United"
    // ) {
    //   const filteredUsers = data.filter(e => e.team === team);
    //   res.status(200).send(filteredUsers);
    // } else if (
    //   (!position || position === "All positions") &&
    //   team === "Cagliari"
    // ) {
    //   const filteredUsers = data.filter(e => e.team === team);
    //   res.status(200).send(filteredUsers);
    // } else if (
    //   (!position || position === "All positions") &&
    //   team === "Atletico de Madrid"
    // ) {
    //   const filteredUsers = data.filter(e => e.team === team);
    //   res.status(200).send(filteredUsers);
    // } else if (
    //   (!position || position === "All positions") &&
    //   team === "Napoli"
    // ) {
    //   const filteredUsers = data.filter(e => e.team === team);
    //   res.status(200).send(filteredUsers);
    //   //////////GOALKEEPER ALL TEAMS
    // } else if (
    //   (!position || position === "Goalkeeper") &&
    //   (!team || team === "All teams")
    // ) {
    //   const filteredUsers = data.filter(e => e.position === position);
    //   res.status(200).send(filteredUsers);
    // } else if (
    //   (!position || position === "Goalkeeper") &&
    //   team === "Barcelona"
    // ) {
    //   const filteredUsers = data.filter(
    //     e => e.position === position && e.team === team
    //   );
    //   res.status(200).send(filteredUsers);
    // } else if (
    //   (!position || position === "Goalkeeper") &&
    //   team === "Real Madrid"
    // ) {
    //   const filteredUsers = data.filter(
    //     e => e.position === position && e.team === team
    //   );
    //   res.status(200).send(filteredUsers);
    // } else if (
    //   (!position || position === "Goalkeeper") &&
    //   team === "Juventus"
    // ) {
    //   const filteredUsers = data.filter(
    //     e => e.position === position && e.team === team
    //   );
    //   res.status(200).send(filteredUsers);
    // } else if (
    //   (!position || position === "Goalkeeper") &&
    //   team === "Bayern Munich"
    // ) {
    //   const filteredUsers = data.filter(
    //     e => e.position === position && e.team === team
    //   );
    //   res.status(200).send(filteredUsers);
    // } else if ((!position || position === "Goalkeeper") && team === "PSG") {
    //   const filteredUsers = data.filter(
    //     e => e.position === position && e.team === team
    //   );
    //   res.status(200).send(filteredUsers);
    // } else if (
    //   (!position || position === "Goalkeeper") &&
    //   team === "Manchester City"
    // ) {
    //   const filteredUsers = data.filter(
    //     e => e.position === position && e.team === team
    //   );
    //   res.status(200).send(filteredUsers);
    // } else if (
    //   (!position || position === "Goalkeeper") &&
    //   team === "Man United"
    // ) {
    //   const filteredUsers = data.filter(
    //     e => e.position === position && e.team === team
    //   );
    //   res.status(200).send(filteredUsers);
    // } else if (
    //   (!position || position === "Goalkeeper") &&
    //   team === "Cagliari"
    // ) {
    //   const filteredUsers = data.filter(
    //     e => e.position === position && e.team === team
    //   );
    //   res.status(200).send(filteredUsers);
    // } else if (
    //   (!position || position === "Goalkeeper") &&
    //   team === "Atletico de Madrid"
    // ) {
    //   const filteredUsers = data.filter(
    //     e => e.position === position && e.team === team
    //   );
    //   res.status(200).send(filteredUsers);
    // } else if ((!position || position === "Goalkeeper") && team === "Napoli") {
    //   const filteredUsers = data.filter(
    //     e => e.position === position && e.team === team
    //   );
    //   res.status(200).send(filteredUsers);
    // } else if (
    //   (!position || position === "Defender") &&
    //   (!team || team === "All teams")
    // ) {
    //   const filteredUsers = data.filter(e => e.position === position);
    //   res.status(200).send(filteredUsers);
    // } else if ((!position || position === "Defender") && team === "Barcelona") {
    //   const filteredUsers = data.filter(
    //     e => e.position === position && e.team === team
    //   );
    //   res.status(200).send(filteredUsers);
    // } else if (
    //   (!position || position === "Defender") &&
    //   team === "Real Madrid"
    // ) {
    //   const filteredUsers = data.filter(
    //     e => e.position === position && e.team === team
    //   );
    //   res.status(200).send(filteredUsers);
    // } else if ((!position || position === "Defender") && team === "Juventus") {
    //   const filteredUsers = data.filter(
    //     e => e.position === position && e.team === team
    //   );
    //   res.status(200).send(filteredUsers);
    // } else if (
    //   (!position || position === "Defender") &&
    //   team === "Bayern Munich"
    // ) {
    //   const filteredUsers = data.filter(
    //     e => e.position === position && e.team === team
    //   );
    //   res.status(200).send(filteredUsers);
    // } else if ((!position || position === "Defender") && team === "PSG") {
    //   const filteredUsers = data.filter(
    //     e => e.position === position && e.team === team
    //   );
    //   res.status(200).send(filteredUsers);
    // } else if (
    //   (!position || position === "Defender") &&
    //   team === "Manchester City"
    // ) {
    //   const filteredUsers = data.filter(
    //     e => e.position === position && e.team === team
    //   );
    //   res.status(200).send(filteredUsers);
    // } else if (
    //   (!position || position === "Defender") &&
    //   team === "Man United"
    // ) {
    //   const filteredUsers = data.filter(
    //     e => e.position === position && e.team === team
    //   );
    //   res.status(200).send(filteredUsers);
    // } else if ((!position || position === "Defender") && team === "Cagliari") {
    //   const filteredUsers = data.filter(
    //     e => e.position === position && e.team === team
    //   );
    //   res.status(200).send(filteredUsers);
    // } else if (
    //   (!position || position === "Defender") &&
    //   team === "Atletico de Madrid"
    // ) {
    //   const filteredUsers = data.filter(
    //     e => e.position === position && e.team === team
    //   );
    //   res.status(200).send(filteredUsers);
    // } else if ((!position || position === "Defender") && team === "Napoli") {
    //   const filteredUsers = data.filter(
    //     e => e.position === position && e.team === team
    //   );
    //   res.status(200).send(filteredUsers);
    // } else if (
    //   (!position || position === "Midfielder") &&
    //   (!team || team === "All teams")
    // ) {
    //   const filteredUsers = data.filter(e => e.position === position);
    //   res.status(200).send(filteredUsers);
    // } else if (
    //   (!position || position === "Midfielder") &&
    //   team === "Barcelona"
    // ) {
    //   const filteredUsers = data.filter(
    //     e => e.position === position && e.team === team
    //   );
    //   res.status(200).send(filteredUsers);
    // } else if (
    //   (!position || position === "Midfielder") &&
    //   team === "Real Madrid"
    // ) {
    //   const filteredUsers = data.filter(
    //     e => e.position === position && e.team === team
    //   );
    //   res.status(200).send(filteredUsers);
    // } else if (
    //   (!position || position === "Midfielder") &&
    //   team === "Juventus"
    // ) {
    //   const filteredUsers = data.filter(
    //     e => e.position === position && e.team === team
    //   );
    //   res.status(200).send(filteredUsers);
    // } else if (
    //   (!position || position === "Midfielder") &&
    //   team === "Bayern Munich"
    // ) {
    //   const filteredUsers = data.filter(
    //     e => e.position === position && e.team === team
    //   );
    //   res.status(200).send(filteredUsers);
    // } else if ((!position || position === "Midfielder") && team === "PSG") {
    //   const filteredUsers = data.filter(
    //     e => e.position === position && e.team === team
    //   );
    //   res.status(200).send(filteredUsers);
    // } else if (
    //   (!position || position === "Midfielder") &&
    //   team === "Manchester City"
    // ) {
    //   const filteredUsers = data.filter(
    //     e => e.position === position && e.team === team
    //   );
    //   res.status(200).send(filteredUsers);
    // } else if (
    //   (!position || position === "Midfielder") &&
    //   team === "Man United"
    // ) {
    //   const filteredUsers = data.filter(
    //     e => e.position === position && e.team === team
    //   );
    //   res.status(200).send(filteredUsers);
    // } else if (
    //   (!position || position === "Midfielder") &&
    //   team === "Cagliari"
    // ) {
    //   const filteredUsers = data.filter(
    //     e => e.position === position && e.team === team
    //   );
    //   res.status(200).send(filteredUsers);
    // } else if (
    //   (!position || position === "Midfielder") &&
    //   team === "Atletico de Madrid"
    // ) {
    //   const filteredUsers = data.filter(
    //     e => e.position === position && e.team === team
    //   );
    //   res.status(200).send(filteredUsers);
    // } else if ((!position || position === "Midfielder") && team === "Napoli") {
    //   const filteredUsers = data.filter(
    //     e => e.position === position && e.team === team
    //   );
    //   res.status(200).send(filteredUsers);
    // } else if (
    //   (!position || position === "Striker") &&
    //   (!team || team === "All teams")
    // ) {
    //   const filteredUsers = data.filter(e => e.position === position);
    //   res.status(200).send(filteredUsers);
    // } else if ((!position || position === "Striker") && team === "Barcelona") {
    //   const filteredUsers = data.filter(
    //     e => e.position === position && e.team === team
    //   );
    //   res.status(200).send(filteredUsers);
    // } else if (
    //   (!position || position === "Striker") &&
    //   team === "Real Madrid"
    // ) {
    //   const filteredUsers = data.filter(
    //     e => e.position === position && e.team === team
    //   );
    //   res.status(200).send(filteredUsers);
    // } else if ((!position || position === "Striker") && team === "Juventus") {
    //   const filteredUsers = data.filter(
    //     e => e.position === position && e.team === team
    //   );
    //   res.status(200).send(filteredUsers);
    // } else if (
    //   (!position || position === "Striker") &&
    //   team === "Bayern Munich"
    // ) {
    //   const filteredUsers = data.filter(
    //     e => e.position === position && e.team === team
    //   );
    //   res.status(200).send(filteredUsers);
    // } else if ((!position || position === "Striker") && team === "PSG") {
    //   const filteredUsers = data.filter(
    //     e => e.position === position && e.team === team
    //   );
    //   res.status(200).send(filteredUsers);
    // } else if (
    //   (!position || position === "Striker") &&
    //   team === "Manchester City"
    // ) {
    //   const filteredUsers = data.filter(
    //     e => e.position === position && e.team === team
    //   );
    //   res.status(200).send(filteredUsers);
    // } else if ((!position || position === "Striker") && team === "Man United") {
    //   const filteredUsers = data.filter(
    //     e => e.position === position && e.team === team
    //   );
    //   res.status(200).send(filteredUsers);
    // } else if ((!position || position === "Striker") && team === "Cagliari") {
    //   const filteredUsers = data.filter(
    //     e => e.position === position && e.team === team
    //   );
    //   res.status(200).send(filteredUsers);
    // } else if (
    //   (!position || position === "Striker") &&
    //   team === "Atletico de Madrid"
    // ) {
    //   const filteredUsers = data.filter(
    //     e => e.position === position && e.team === team
    //   );
    //   res.status(200).send(filteredUsers);
    // } else if ((!position || position === "Striker") && team === "Napoli") {
    //   const filteredUsers = data.filter(
    //     e => e.position === position && e.team === team
    //   );
    //   res.status(200).send(filteredUsers);
    // }

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
