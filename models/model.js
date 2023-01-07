const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema({
  titulo: String,
  release: String,
  cast: String,
  genre: String,
});

moviesSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Movies = mongoose.model("Movies", moviesSchema);

module.exports = Movies;
