import React from 'react'
import netflix from './netflix.png';
import logout from './logOut.png'
import './mainnavbar.css';
import { Link } from 'react-router-dom';
function MainNavbar() {
  return (
    <>
   

<div className='nav'>
<div className='leftSide'>
    <img className="strangerImg" src={netflix} alt="netflix.png"/>
   <Link to='/'><button class='Link'>Home</button></Link>
<ul>
  <li> <h3>Tv Shows</h3></li>
  <li>   <h3>Movies</h3></li>
  <li>   <h3>My List</h3></li>
</ul>
   
</div>
<div className='rightSide'>

<input class='search' placeholder='search'/>
<img class="logoutPng" src={logout} />

</div>
</div>

    </>
  )
}

export default MainNavbar