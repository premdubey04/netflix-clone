import React, { useState, useEffect } from 'react';
import './upcoming.css';
import { AiFillPlayCircle } from 'react-icons/ai';
function Upcoming() {
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YjA2N2Y3MjYyMzEyYmVjOWU0MjEyYTY5ZWZiNTIzNiIsInN1YiI6IjY0ZDFkNzZlODUwOTBmMDBjODdlNjgyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.O9M65USQUnYYLey6TAftZCELtLwZvaSOz10NDVuPy0U'
      }
    };

    fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
      .then(response => response.json())
      .then(data => {
      
        setUpcoming(data.results);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <>
    <div className='upcomingContainer'>

      <h1 className='upcomingNow'>New Releases</h1>
      <div className='upcoming'>
        {upcoming.map((movie) => (
          <div className='upcomingImgContainer' key={movie.id}>
            <img className='upcomingImg' src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
            <h1 className='movieTitle'>{movie.title}</h1>
            <AiFillPlayCircle className='playButton'/>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Upcoming;
