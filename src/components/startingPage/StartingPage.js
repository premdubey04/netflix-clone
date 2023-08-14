import React from 'react'
import './startingPage.css';

import Body from './Body';
import Body2 from './Body2';
import Body3 from './Body3';
import Body4 from './Body4';
function Main({auth}) {
  return (
    <>
    
    
    <Body auth={auth}/>
    <Body2/>
    <Body3/>
    <Body4/>
    </>
  )
}

export default Main;