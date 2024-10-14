const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
  text: String,
  rating: Number,
})

const movieSchema = new mongoose.Schema({
  title: String,
  description: String,
  year: Number,
  poster: String,
  reviews: [reviewSchema],
})

module.exports = mongoose.model('Movie', movieSchema)