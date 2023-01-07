const Movies = require("../models/model")

const getAllMovies = async (req, res) => {
  const movies = await Movies.find({})
  res.send(movies)
}

const createMovie = async (req, res) => {
  console.log(req.body)
  const newMovie = new Movies(req.body)

  const savedMovie = await newMovie.save()
  res.send(savedMovie)
}

module.exports = { createMovie, getAllMovies }