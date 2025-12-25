
const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  rating: { type: Number },
  releaseDate: { type: String },
  duration: { type: String },
});

module.exports = mongoose.model('Movie', MovieSchema);
