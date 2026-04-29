import React from "react";

import MovieList from "./movieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log(movies.nowPlayingMovies);

  return (
    <div className="bg-black">
      <div className="-mt-50 pl-12 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Trending"} movies={movies.topRatedMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.upComingMovies} />
        <MovieList title={"Anime"} movies={movies.nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
