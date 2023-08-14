import React from 'react'
import MainNavbar from './MainNavbar'
import netflix from './netflixlogo.png'
import './dashbordbody.css'
function DashbordBody() {
  return (
    <>
     <MainNavbar/>
     <div class='containerbody'>

     <div className='netflixseries'>
     <img className='netflixlogo' src={netflix}/>
     <h2 className='series'>Series</h2>
     </div> 
     <h1 class="strangerthings">Strangers Things</h1>
     <div>
      <button className='play'>Play </button>
      <button className='moreInfo'>More Info</button>
     </div>
     </div>
    </>
  )
}

export default DashbordBody