const express = require("express");
const cors = require("cors");

const charactersRoutes = require("./routes/characters.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/characters", charactersRoutes);

module.exports = app;
