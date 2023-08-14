import React from 'react'

import  './navbar.css';
import netflix from '../assets/netflix.png'
function Navbar() {
  return (
 <>
 <nav className='nav'>
        <div className='left-side'> <img src= {netflix}/></div>
        <div className='right-side'>
           <select >
            <option value='english'>English</option> 
            <option value='hindi'>Hindi</option> 
                </select> 
                <button className='signIn'>Sign In</button>
        </div>
    </nav>



 </>
  )
}

export default Navbar