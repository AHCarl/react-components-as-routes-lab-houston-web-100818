import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, idx) => {
        return <div key={idx}>
          <h2>{movie.title}</h2>
          <h3>{movie.time}</h3>
          <ul>
            {movie.genres.map((g) => <li>{g}</li>)}
          </ul>
        </div>
      })}
    </div>
  );
};

export default Movies;
