import  Movie  from "../models/movie.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const getMovies = asyncHandler(async (req, res) => {
  const tempmovies = await Movie.find();
  res.json(new ApiResponse(200, tempmovies));
});

const addMovie = asyncHandler(async (req, res) => {
  const tempmovie = await Movie.create(req.body);
  res.status(201).json(new ApiResponse(201, tempmovie, "Movie added"));
});

export { getMovies, addMovie };
