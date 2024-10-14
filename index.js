const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const movieRoutes = require('./routes/movieRoutes')

const app = express()
const PORT = process.env.PORT || 6030

// Middleware
app.use(cors())
app.use(express.json())

// Connect to MongoDB
mongoose.connect('mongodb://localhost/movie_review_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
if(mongoose.connect){
    console.log("DB connected");
    
}

// Routes
app.use('/api/movies', movieRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})