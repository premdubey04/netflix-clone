import React from 'react'
import StartingPage from './components/startingPage/StartingPage'
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Import your Dashboard component
import Dashbord from './components/dashbord/Dashbord';
function App() { 
  const firebaseConfig = {
    apiKey: "AIzaSyCVuC-Yx_qhLCWDpp04CNTRZ2Un31XFyVI",
    authDomain: "netflix-clone-d8990.firebaseapp.com",
    projectId: "netflix-clone-d8990",
    storageBucket: "netflix-clone-d8990.appspot.com",
    messagingSenderId: "1040111425121",
    appId: "1:1040111425121:web:d95c80cf2536972c173c20",
    measurementId: "G-DLJTNF36YE"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const auth=getAuth(app);

  return (
  <>
<Router>
      <Routes>
      <Route
          exact
          path="/"
         element={<StartingPage auth={auth}/>}
        />
        <Route path="/dashbord" element={<Dashbord/>} />
      </Routes>
    </Router>

  </>
  )
}

export default App
