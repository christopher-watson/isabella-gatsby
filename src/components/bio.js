import React from 'react';
import Frame from "../components/bioFrame"
import '../styles/bio.css'

import ben from '../images/ben.png'
import alex from '../images/alex.png'
import amanda from '../images/amanda.png'
import kelsey from '../images/kelsey.png'
import zach from '../images/zach.png'
import kevin from '../images/kevin.png'

const Bio = () => {
  return (
    <div className="bio-div">
      {/* <div className="bioHeaderText">
        Meet the Coaches
      </div> */}
      <Frame 
        img={ben} 
        name='Ben Isabella'
        title='Owner'
        innerText='I bring a wealth of valuable experience to my training arsenal after years of extensive work with high school athletes & current Rutgers Football players. I have worked with specialized athletes, weekend warriors, & fitness enthusiasts.'
        cert1='CrossFit Level 1, 2, and 3 Trainer' 
        cert2='CCFT' 
        cert3='C.S.C.S.' 
        cert4='2014 Regionals Athlete' 
        cert5='Certified Ancestral Health Coach' 
        />
        
      <Frame 
        img={kelsey} 
        name='Kelsey Jamedar'
        title='Coach'
        innerText='My goal is always to make my athletes feel comfortable, safe, and excited to take on the WOD and push them to limits they didn’t know they could reach themselves.'
        cert1='CrossFit Level 1 Trainer' 
        />
        
      <Frame 
        img={kevin} 
        name='Kevin Varno'
        title='Coach'
        innerText='My passion for fitness, and thirst for knowledge and experience continues to grow the more I educate myself. I believe that a consistent diet and exercise regimen is the biggest necessity to a happy and healthy lifestyle.'
        cert1='CrossFit Level 1 & 2 Trainer' 
        cert2='Personal Trainer' 
        cert3='Cardio Express Coach' 
        cert4='CrossFit Kids Coach' 
        />
        
      <Frame 
        img={zach} 
        name='Zach Doring'
        title='Coach'
        innerText='I’m looking to help anyone and everyone realize that a healthy lifestyle is achievable through commitment, a little persistence, and, most importantly, FUN!'
        cert1='CrossFit Level 1 Trainer' 
        />
        
      <Frame 
        img={alex} 
        name='Alex Lincho'
        title='Coach'
        innerText='Stemming from Handstand walks to a variation of Clean complexes to rope climbs. The options and progressions are endless.'
        cert1='CrossFit Level 1 Trainer' 
        cert2='5:05pm Specialist' 
        />
        
      <Frame 
        img={amanda} 
        name='Amanda Costello'
        title='Coach'
        innerText='All my life, I have never been one to limit or define myself, but, instead, to constantly try new things and challenge myself and others daily.'
        cert1='CrossFit Level 1 Trainer' 
        cert2='Foundations Coach' 
        cert3='7:15pm Specialist' 
        />
        
    </div>
  )
}

export default Bio;