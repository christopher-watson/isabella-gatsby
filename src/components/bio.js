import React, { Component } from 'react';
import Frame from "../components/bioFrame"
import '../styles/bio.css'

import ben2 from '../images/ben2.png'
import alex from '../images/alex.png'
import amanda from '../images/amanda.png'
import kelsey from '../images/kelsey.png'
import kevin from '../images/kevin.png'
import jaime from '../images/jaime.png'
import allyssa from '../images/allyssa.jpg'
// import allie2 from '../images/allie.jpg'
import allie from '../images/Allie.png'

class Bio extends Component {

  state = {
    // IF YOU NEED TO ADD ANOTHER COACH, DONT FORGET TO PUT NAME HERE FOR CAROUSEL
    bios: ['Ben', 'Alex', 'Amanda', 'Kelsey', 'Kevin', 'Jaime', 'Allyssa', 'Allie'],
    displayBioIndex: 0,
  }

  componentDidMount() {
    this.displayBio()
    // console.log(`compDidMount - ${this.state.displayBioIndex}`)
    // this.handleScroll()
    // this.bioAutoScroll()
    // window.addEventListener('keydown', this.handleKeyPress)
    // window.addEventListener('scroll', this.handleScroll)
  }

  updateIndexLeft = () => {
    const lastIndex = this.state.bios.length - 1;
    const currentImageIndex  = this.state.displayBioIndex;
    const shouldResetIndex = currentImageIndex === 0;
    const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;

    return index
  }

  leftArrowClick = () => {
    // console.log(`leftArrowClicked - ${this.state.displayBioIndex}`)
    // const lastIndex = this.state.bios.length - 1;
    // const currentImageIndex  = this.state.displayBioIndex;
    // const shouldResetIndex = currentImageIndex === 0;
    // const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
    // console.log(`leftArrowClicked Index - ${index}`)

    this.setState({
      displayBioIndex: this.updateIndexLeft()
    });
    setTimeout(() => {
      this.displayBio()
    }, 100);
  }

  updateIndexRight = () => {
    const lastIndex = this.state.bios.length - 1;
    const currentImageIndex  = this.state.displayBioIndex;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index =  shouldResetIndex ? 0 : currentImageIndex + 1;
    // console.log(`updateIndexRight index: ${index}`)
    return index
  }

  rightArrowClick = () => {
    // console.log(`rightArrowClicked - ${this.state.displayBioIndex}`)
    // const lastIndex = this.state.bios.length - 1;
    // const currentImageIndex  = this.state.displayBioIndex;
    // const shouldResetIndex = currentImageIndex === lastIndex;
    // const index =  shouldResetIndex ? 0 : currentImageIndex + 1;
    // console.log(`rightArrowClicked Index - ${index}`)
   
    // this.setState({
    //   displayBioIndex: index
    // });
    // this.displayBio()
   
    // console.log(`rightArrowClicked - ${this.state.displayBioIndex}`)

    this.setState({
      displayBioIndex: this.updateIndexRight()
    });
    setTimeout(() => {
      this.displayBio()
    }, 100);

  }

  handleKeyPress = (e) => {
    if(e.key === 'ArrowRight'){
      this.rightArrowClick()
    }
    if(e.key === 'ArrowLeft'){
      this.leftArrowClick()
    }
  }

  displayBio() {
    // console.log(`displayBio - ${this.state.displayBioIndex}`)
    for(var i=0; i<this.state.bios.length; i++){
      if(this.state.displayBioIndex === i){
        // console.log(`forLoop i - ${i}`)
        // document.getElementById(`bio${i}`).style.display = 'initial';
        document.getElementById(`bio${i}`).setAttribute('state', 'bio-active');
      }
      else {
        // document.getElementById(`bio${i}`).style.display = 'none';
        document.getElementById(`bio${i}`).setAttribute('state', 'bio-hidden');
      }
    }
  }

  // handleScroll = () => {
  //   if (window.scrollY === 3000) {
  //     this.setState({
  //       displayBioIndex: 0,
  //     })
  //   }
  //   if (window.scrollY === 4600) {
  //     this.setState({
  //       displayBioIndex: 0,
  //     })
  //   }
  // }

  // bioAutoScroll = () => {
  //   setInterval(() => {
  //     this.rightArrowClick()
  //   }, 5000);
  // }

  render () {
    return (
      <div className="bio-div">
        {/* <div className="bioHeaderText">
          Meet the Coaches
        </div> */}
        <div className="bio-carousel-container">
          <div className='left-arrow arrow' onClick={() => this.leftArrowClick()}><i className="fas fa-angle-double-left"></i></div>
          <div className='right-arrow arrow' onClick={() => this.rightArrowClick()}><i className="fas fa-angle-double-right"></i></div>
          <div className="bios-scroll">
            <div className="display-bio" id='bio0'>
            <Frame 
              img={ben2} 
              name='Ben Isabella'
              title='Owner, Level 1, 2, & 3 Trainer'
              innerText='My life has changed in so many great ways since leading my first class on July 11, 2011. At the time, there were only a few of us working out together on the high school football field. Before I knew it, on May 1, 2013, I opened up my own facility and began running group classes throughout the day. Over the years, I have developed so many great relationships, friendships, and experiences. Opening up my own facility was a dream of my mine for many years. It is the relationships we build that sustain loyalty over time. I look forward to building that bond and relationship with you. At the end of the day, you come to Isabella Fitness to Flourish! Mobile #: 732 532 3337. Email: Ben@isabellafitness.com. Location: 242 Main St. #B-D, Sayreville, NJ 08872'
              // cert1='CrossFit Level 1, 2, and 3 Trainer' 
              // cert2='CCFT' 
              // cert3='C.S.C.S.' 
              // cert4='2014 Regionals Athlete' 
              // cert5='Certified Ancestral Health Coach'
              />
            </div>

            <div className="display-bio" id="bio1">
              <Frame 
                img={kelsey} 
                name='Kelsey Jamedar'
                title='Level 1 Trainer'
                innerText='With dreams of being a teacher, I never knew that could mean being a Trainer. Educating, motivating, and encouraging athletes to be the very best they can has fulfilled that teaching dream of mine. It is something I look forward to every day. My goal is always to make everyone feel comfortable, safe, and excited to take on the workouts, and push them to limits they didn’t know they could reach themselves. Email: Contact@isabellafitness.com'
                // cert1='CrossFit Level 1 Trainer' 
                />
            </div>
          
            <div className="display-bio" id="bio2">
              <Frame 
                img={kevin} 
                name='Kevin Varno'
                title='Level 1 & 2 Trainer'
                innerText='In 2011, I first discovered Isabella Fitness and, shortly after, I became a personal trainer. I have been working as a personal trainer since early 2012. My passion for fitness and thirst for knowledge continues to grow the more I educate myself. I believe that a consistent diet and exercise regimen is the biggest necessity to a happy and healthy lifestyle. I am passionate about helping everyone I can on their journey to find the perfect plan for their needs! Email: Contact@isabellafitness.com'
                />
            </div>
    
            <div className="display-bio" id="bio3">
              <Frame 
                img={jaime} 
                name='Jaime Novak'
                title='Trainer'
                innerText='I am also a certified teacher so you could say teaching/helping others is in my blood. After years of working out, I made the decision to try something new and challenging; this let me to Isabella Fitness. I couldn’t be happier with that decision. My goal here is to help provide a safe, comfortable, and motivating environment. I want to help athletes make personal progress, no matter how big or small, and help them achieve their goals. I look forward to an athlete’s excitement when they do something they once thought they couldn’t. It’s incredibly rewarding. Email: Contact@isabellafitness.com'
                // cert1='CrossFit Level 1 Trainer' 
                />
            </div> 
    
            <div className="display-bio" id="bio4">
              <Frame 
                img={alex} 
                name='Alex Lincho'
                title='Level 1 Trainer'
                innerText='Working out has to be enjoyable and challenging in order to ensure success. My bodybuilding workouts started getting stale at the commercial gym so I decided to start CrossFit in January 2014. Don’t get me wrong, I still enjoy a good “bodybuilding” workout and incorporate it in my fitness routine consistently, but I wanted a new way to challenge myself. The beauty of fitness is that there’s always room for improvement whether you a beginner or a “seasoned vet”. Email: Contact@isabellafitness.com'
                // cert1='CrossFit Level 1 Trainer' 
                // cert2='5:00pm Specialist' 
                />
            </div> 

            <div className="display-bio" id="bio5">
              <Frame 
                img={amanda} 
                name='Amanda Costello'
                title='Level 1  & 2 Trainer'
                innerText='A year after joining Isabella Fitness, I decided I wanted to become a Trainer. I wanted to teach other people about fitness, about staying active, and showing them they are capable of anything! One of my strengths as a trainer is my "relate-ability" to the everyday person. I started coaching to show people there is no certain category you have to fit into to be able to succeed in fitness. All my life, I have never been one to limit or define myself, but, instead, to constantly try new things and challenge myself daily. I want to motivate others in the way Fitness has motivated me. Email: Contact@isabellafitness.com'
                // cert1='CrossFit Level 1 Trainer' 
                // cert2='Foundations Coach' 
                // cert3='7:15pm Specialist' 
                />
            </div> 

            <div className="display-bio" id="bio6">
              <Frame 
                img={allyssa} 
                name='Allyssa Sillari'
                title='Level 1 Trainer'
                innerText='I started doing Crossfit at Isabella Fitness in December 2017. It only took a few months of being at Isabella Fitness for me to realize that I not only wanted to excel at the goals I set for myself, but that I wanted to help other people do so as well! Not only did I want to coach athletes in CrossFit, but I wanted to help people create a positive body image. I believe Isabella Fitness is great at implementing. My passions are CrossFit, Body Positivity, and working with senior athletes! Email: Contact@isabellafitness.com'
                // cert1='CrossFit Level 1 Trainer' 
                // cert2='Foundations Coach' 
                // cert3='Personal Trainer' 
                // cert4='Accountability Coach' 
                />
            </div> 

            <div className="display-bio" id="bio7">
              <Frame 
                img={allie} 
                name='Allie Couzo'
                title='Level 1 Trainer'
                innerText='I am a doctor of physical therapy, but being a COACH has brought a fulfilling sense of what I can do for people beyond rehabbing injuries. I am very passionate about movement analysis and being able to identify deficits before a more serious injury can develop. Coaching allows me to help our athletes move safely and prescribe injury prevention exercises as needed to allow them to thrive and perform. Educating people about their own bodies, how they move and what they can do for themselves is the most valuable thing a DPT or Coach can do and that blend of roles is where I want to be. Email: Contact@isabellafitness.com'
                // cert1='CrossFit Level 1 Trainer' 
                // cert2='Foundations Coach' 
                // cert3='Personal Trainer'  
                />
            </div> 



          </div>
          
        </div>

  
      </div> 
    )

  }
}

export default Bio; 
