import React,{useState,useEffect} from 'react'

import left from './left.png'
import right from './right.png'
import { AiFillPlayCircle } from 'react-icons/ai';
import './popular.css';
function Popular() {
    const [popular, setPopular] = useState([]);

    useEffect(() => {
      const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YjA2N2Y3MjYyMzEyYmVjOWU0MjEyYTY5ZWZiNTIzNiIsInN1YiI6IjY0ZDFkNzZlODUwOTBmMDBjODdlNjgyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.O9M65USQUnYYLey6TAftZCELtLwZvaSOz10NDVuPy0U'
        }
      };
      fetch('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc', options)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setPopular(data.results);
        })
        .catch(err => console.error(err));
    }, []);
  return (
  <>
   <div className='popularContainer'>
<h1 className='popularNow'>Tv serials</h1>
<img className='imgleft' src={left}/>
<img className='imgright' src={right}></img>
<div className='popular'>
  {popular.map((show) => (
    <div className='popularImgContainer'key={show.id}>
      <img className='popularImg' src={`https://image.tmdb.org/t/p/w300${show.poster_path}`} alt={show.name} />
      <h1 className='movieTitle'>{show.name}</h1>
                <AiFillPlayCircle className='playButton'/>
    </div>
   
  ))}
</div>
</div>
</>
  )
}

export default Popular