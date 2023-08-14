import React from 'react'
import './dashbord.css'
import DashbordBody from './DashbordBody.js'
import TrendingNow from './TrendingNow.js'
import Upcoming from './Upcoming.js'
import Popular from './Popular'
import Blockbuster from './Blockbuster'
function Dashbord() {
  return (
   <>
   <div className='dashbordBody'>



   <DashbordBody/>
   </div>
   <TrendingNow/>
   <Upcoming/>
   <Popular/>
   <Blockbuster/>
   </>
  )
}

export default Dashbord