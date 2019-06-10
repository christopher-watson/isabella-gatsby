import React from 'react';
import Frame from "../components/bioFrame"
import '../styles/bio.css'

import ben from '../images/ben.png'

const Bio = () => {
  return (
    <div className="bio-div">

      <Frame 
        img={ben} 
        name='Ben Isabella'
        title='Owner'
        innerText='Top Dawg of Isabella Fitness'
        cert1='cert1' 
        cert2='cert2' 
        cert3='cert3' 
        cert4='cert4' 
        />
        
      <Frame 
        img={ben} 
        name='Ben Isabella'
        title='Owner'
        innerText='Top Dawg of Isabella Fitness'
        cert1='cert1' 
        cert2='cert2' 
        cert3='cert3' 
        cert4='cert4' 
        />
        
    </div>
  )
}

export default Bio;