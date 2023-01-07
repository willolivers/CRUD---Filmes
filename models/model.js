const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema({
  titulo: String,
  release: String,
  cast: String,
  genre: String,
});

const Movies = mongoose.model("Movies", moviesSchema);

module.exports = Movies;
