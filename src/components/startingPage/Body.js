import React from 'react'
import './body.css'
import Navbar from './Navbar'
import {useState} from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { useNavigate } from "react-router-dom"; 
function Body({auth}) {
  
  const [showInput,ShowInput]=useState(false);
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const handlePassword=(e)=>{
    setPassword(e.target.value)
  }
  const handleEmail=(e)=>{
    setEmail(e.target.value);
  }
  const handleClick=()=>{
    ShowInput(true)
  }
  const navigate=useNavigate();
  const handleSignup=()=>{
    createUserWithEmailAndPassword(auth,email,password)
    .then((userCrendiatls)=>{
      navigate("/dashbord")
    })
    .catch((error) => {
      // Handle signup errors, e.g., display error message to the user
      console.error("Error signing up:", error);
    });
  }
  return (
   <>


<div className='body'>


   <Navbar/>
       <main className='main'>
      <h1>Unlimited movies, TV shows and more</h1>
      <h2>Watch anywhere. Cancel anytime.</h2>
      <h2 className='h2'>Ready to watch? Enter your email to create or restart your membership.
</h2>

<div className='enter'>

<input onChange={handleEmail} placeholder='Email address' type='email' name='email' className='input'/>
{showInput ?(<input  onChange={handlePassword} placeholder='password' className='password' type='text'/>):

(<button onClick={handleClick} className='getStarted'>Get Started </button>)}
</div>
<button onClick={handleSignup} className='signUp'>Sign Up</button>




    </main>
   
</div>

  
   </>
  )
}

export default Body 