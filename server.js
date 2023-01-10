require('dotenv').config()
const { getAllMovies, createMovie } = require('./controllers/controller')

const express = require('express')
const path = require('path')
const mongoose = require('mongoose');


const app = express()
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "/view/index.html"))
})

app.get('/test', (req, res) => {
  res.send('<h1>Teste...</h1>')
})

app.get('/movies', getAllMovies)

app.post('/movies', createMovie)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})