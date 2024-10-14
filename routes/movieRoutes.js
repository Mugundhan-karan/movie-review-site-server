const express = require('express')
const router = express.Router()
const Movie = require('../models/movie')

// Get all movies
router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find()
    res.json(movies)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Get one movie
router.get('/:id', getMovie, (req, res) => {
  res.json(res.movie)
})

// Add review to a movie
router.post('/:id/reviews', getMovie, async (req, res) => {
  const { review, rating } = req.body
  res.movie.reviews.push({ text: review, rating })
  try {
    const updatedMovie = await res.movie.save()
    res.json(updatedMovie)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})


async function getMovie(req, res, next) {
  let movie
  try {
    movie = await Movie.findById(req.params.id)
    if (movie == null) {
      return res.status(404).json({ message: 'Movie not found' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
  res.movie = movie
  next()
}

module.exports = router