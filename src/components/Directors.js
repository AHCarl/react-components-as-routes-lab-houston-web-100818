import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((dir, idx) => { 
        return <div key={idx}>
          <h2>{dir.name}</h2>
          <ul>
            {dir.movies.map((m) => <li>{m}</li>)}
          </ul>
        </div>
      })}
    </div>
  );
}

export default Directors
