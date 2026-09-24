const express = require("express");
const app = express();
app.use(express.json({ limit: "50mb" })); // مهم للصور
app.use(require("cors")());

let players = {};

app.post("/frame", (req, res) => {
    const data = req.body;
    players[data.userid] = {
        username: data.username,
        userid: data.userid,
        frame: data.frame,
        lastUpdate: Date.now()
    };
    res.send("OK");
});

app.get("/players", (req, res) => {
    res.json(players);
});

app.listen(3000, () => console.log("WL Emergency API Running"));
