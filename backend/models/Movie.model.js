import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, index: true },
    description: String,
    rating: Number,
    releaseDate: String,
    duration: String
  },
  { timestamps: true }
);

export const Movie = mongoose.model("Movie", movieSchema);
