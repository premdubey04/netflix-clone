
import React, {useState,useEffect} from 'react'
import './blockbuster.css'
import { AiFillPlayCircle } from 'react-icons/ai';
import './blockbuster.css'
function Blockbuster() {
    const [blockbuster,setBlockbuster]=useState([])

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YjA2N2Y3MjYyMzEyYmVjOWU0MjEyYTY5ZWZiNTIzNiIsInN1YiI6IjY0ZDFkNzZlODUwOTBmMDBjODdlNjgyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.O9M65USQUnYYLey6TAftZCELtLwZvaSOz10NDVuPy0U'
          }
        };
    
        fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
          .then(response => response.json())
          .then(data => {
           
            setBlockbuster(data.results);
          })
          .catch(err => console.error(err));
      }, []);
  return (
  <>
    <div className='blockbusterContainer'>

<h1 className='blockbusterNow'>Blockbuster On Netflix </h1>
<div className='blockbuster'>
  {blockbuster.map((movie) => (
    <div className='blockbusterImgContainer' key={movie.id}>
      <img className='blockbusterImg' src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
      <h1 className='movieTitle'>{movie.title}</h1>
            <AiFillPlayCircle className='playButton'/>
    </div>
  ))}
</div>
</div>
  </>
  )
}

export default Blockbuster