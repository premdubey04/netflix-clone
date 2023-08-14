import React, { useState, useEffect } from 'react';
import './trending.css'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'

import { AiFillPlayCircle } from 'react-icons/ai';

function TrendingNow() {
  const [trending, setTrending] = useState([]);
const [left,setLeft]=useState(5);
const [videourl,setVideourl]=useState('')
const [Display,setDisplay]=useState('none')

const handleLeft=()=>{
  setLeft(
    (lefts)=>lefts-2)
}
 
  useEffect(() => {
    
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YjA2N2Y3MjYyMzEyYmVjOWU0MjEyYTY5ZWZiNTIzNiIsInN1YiI6IjY0ZDFkNzZlODUwOTBmMDBjODdlNjgyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.O9M65USQUnYYLey6TAftZCELtLwZvaSOz10NDVuPy0U'
    }
    };

    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=2', options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
       
        setTrending(data.results);
      })
      .catch(err => { 
      console.log('err',err);
      });
  }, []); 


  const handlePlay=(movieTitle)=>{
    setDisplay('block')
    const apiKey = 'AIzaSyDmvXG4pdMZva9w1BkhoXFB2zhehQzrCq4';

const searchUrl = `https://www.googleapis.com/youtube/v3/search?q=${encodeURIComponent(movieTitle)}+trailer&type=video&key=${apiKey}`;
fetch(searchUrl)
.then((res)=>res.json())
.then(data => {
  const videos = data.items; // Array of video items
  if (videos.length > 0) {
    const firstVideoId = videos[0].id.videoId;
    setVideourl(firstVideoId);
    console.log(`https://www.youtube.com/watch?v=${firstVideoId}`)
   
  } else {
    console.log('No videos found.');
  }
})
  }




  return (
    <>
    <div className='trendingContainer'>
    <iframe style={{display:Display}}
  width="300"
  height="300"
  src={`https://www.youtube.com/embed/${videourl}`}
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>

  
  
Your browser does not support the video tag.

    <h1 className='trendingNow'>Trending Now</h1>
      <BsFillArrowLeftCircleFill className='leftArrow' onClick={handleLeft}
      />
      <div className='trending' style={{ marginLeft: `${left}rem` }}>
        {trending.map(movie => (
          <div className='trendingImgContainer' key={movie.id} >
            <img className='trendingImg'
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} // Use the appropriate image size (e.g., w300) from the API documentation
              alt={movie.title}
            />
       <h1 className='movieTitle'>{movie.title}</h1>
       <AiFillPlayCircle className='playButton'  onClick={() => handlePlay(movie.title)}/>
        
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default TrendingNow;


