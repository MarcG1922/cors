const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      "https://rickandmortyapi.com/api/character"
    );
    res.json(response.data.results);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener personajes" });
  }
});

router.get("/:name", async (req, res) => {
  const { name } = req.params;

  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/?name=${name}`
    );
    res.json(response.data.results[0]);
  } catch (error) {
    res.status(404).json({ message: "Personaje no encontrado" });
  }
});

module.exports = router;
