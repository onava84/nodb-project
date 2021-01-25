const cors = require("cors");
const express = require("express");
const app = express();
app.use(cors());
app.use(express.json());

//ENDPOINTS
const playersCtrl = require("./playersCtrl");

app.get("/api/players", playersCtrl.getPlayers);
app.post("/api/players", playersCtrl.addPlayer);
app.put("/api/players/:id", playersCtrl.editPlayer);
app.delete("/api/players/:id", playersCtrl.deletePlayer);

app.listen(4040, () => console.log("app corriendo en el puerto 4040"));
