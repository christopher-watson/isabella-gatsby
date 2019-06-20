import React from 'react';
import Frame from "../components/bioFrame"
import '../styles/bio.css'

import ben from '../images/ben.png'
import alex from '../images/alex.png'
import amanda from '../images/amanda.png'
import kelsey from '../images/kelsey.png'
import kevin from '../images/kevin.png'
import jaime from '../images/jaime.png'
import allyssa from '../images/allyssa.jpg'

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
        innerText='In 2009, I received my C.S.C.S from the National Strength and Conditioning Association. As well as being a strength and conditioning specialist, bootcamp instructor, and CrossFit Level 1. 2, and 3 Trainer (CCFT). I am a Physical Education Teacher at Sayreville High School in New Jersey.  I bring a wealth of valuable experience to my training arsenal after years of extensive work with high school athletes and former Collegiate Athletes. I have worked with specialized athletes, weekend warriors, and fitness enthusiasts. I continuously demonstrate my versatility by providing individual and group training in the areas of CrossFit. bootcamp, and circuit training. In 2014, I was fortunate enough to qualify for the 2014 NorthEast Regional where I took 17th overall. My mission has always been to work with individuals who love & live fitness.'
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
        innerText='On February 21st, 2012 I walked into a bootcamp class full of adults while I was just shy of turning 18. Little did I know, that my first bootcamp class would forever change my perspective and habits in regards to health and fitness. While I always played sports as a child (soccer, dance, karate), my body was in complete shock after that first bootcamp class full of wallballs and sprints. It wasn’t anything like I expected, yet everything I needed and had been missing out on. Our bootcamp classes slowly transformed into Crossfit and by the time I returned from my first year of college our crew had doubled and we were working out in a “box” called CrossFit Sayreville. For 4 years of college, I struggled with finding the perfect CrossFit gym that matched our box here in Sayreville and I spent the majority of my time making up my own WODS at my recreation center. Finally, I stumbled upon a gym my senior year and my reunion with CrossFit cultivated and satisfied my passion for the sport. With dreams of being a teacher of some sort, I never knew that could mean being a CrossFit Coach. Educating, motivating, and encouraging athletes to be the very best they can be at our box has fulfilled that teaching dream of mine. It is something I look forward to every day. My goal is always to make my athletes feel comfortable, safe, and excited to take on the WOD and push them to limits they didn’t know they could reach themselves.'
        cert1='CrossFit Level 1 Trainer' 
        />
        
      <Frame 
        img={kevin} 
        name='Kevin Varno'
        title='Coach'
        innerText='My athletic background consists mainly of high school track and field. I found my passion for fitness while rehabbing a hip injury I suffered while high jumping. Intrigued by the lifestyle of helping others improve their health and performance, I surrounded myself with an assortment of fitness methodologies. I originally set out to become a physical therapist, but quickly realized I would much prefer working with a wider variety of individuals; not just those coming back from injury. After the discovery of obstacle racing and CrossFit, I knew I would follow my passion and make a living in the fitness industry. In 2011, I first discovered Isabella Fitness and, shortly after, became a personal trainer. I have been working as a personal trainer since early 2012 and as a crossfit coach since the spring of 2013. My passion for fitness, and thirst for knowledge and experience continues to grow the more I educate myself. I believe that a consistent diet and exercise regimen is the biggest necessity to a happy and healthy lifestyle. I am passionate about helping everyone I can on their journey to find the perfect plan for their needs!'
        cert1='CrossFit Level 1 & 2 Trainer' 
        cert2='Personal Trainer' 
        cert3='Cardio Express Coach' 
        cert4='CrossFit Kids Coach' 
        />

      <Frame 
        img={jaime} 
        name='Jaime Novak'
        title='Coach'
        innerText='In 2011, a few months after the birth of my third child, I made the choice to improve my lifestyle. Your typical gym bored me easily, so friends talked me into joining a local bootcamp. I found myself enjoying this type of group fitness class setting. I became so passionate about it, after a year I studied to become a certified personal fitness trainer and, shortly thereafter, joined the coaching staff. I quickly discovered how much I enjoyed being on the teaching side of the fence. I am also a certified teacher so you could say teaching/helping others is in my blood. After a few years, I made the decision to try something new and challenging and found myself walking through the doors of Isabella Fitness. I couldn’t be happier. My goal here is to help provide a safe, comfortable, and motivating environment. I want to help athletes make personal progress, no matter how big or small, and help them achieve their goals. I look forward to an athlete’s excitement when they do something they once thought they couldn’t. It’s incredibly rewarding. My plan for the future is to expand on my own coaching credentials to become even more educated in this area of fitness to be able to assist athletes more.'
        cert1='CrossFit Level 1 Trainer' 
        />

      <Frame 
        img={alex} 
        name='Alex Lincho'
        title='Coach'
        innerText='I’ve been a fitness professional for over 7 years now, you can’t do something for 7+ years without having a love for it. I have an Associate Degree in Phys.Ed, certifications in resistance base movements and corrective exercises and as well as my Crossfit Level 1 Cert. 4 years and still going as a Trainer and Coach, as well as 3 years in a management role at a gym. Working out has to be enjoyable and challenging in order to insure success. I started Crossfit around Dec2013/January2014 once my workouts started to get stale at the global gym with the routine BodyBuilding approach/split. Don’t get me wrong, I still enjoy a good “bodybuilding” workout and incorporate it in my fitness consistently, but I wanted a new way to challenge myself and the beauty of fitness…there’s always room for improvement whether you a beginner or a “seasoned vet”. I crave CrossFit because it’s become a sport to me. Stemming from Handstand walks to a variation of Clean complexes to rope climbs. The options and progressions are endless.'
        cert1='CrossFit Level 1 Trainer' 
        cert2='5:00pm Specialist' 
        />
        
      <Frame 
        img={amanda} 
        name='Amanda Costello'
        title='Coach'
        innerText='A year after joining Isabella Fitness, I decided I wanted to become a Trainer. I wanted to teach other people about fitness, about staying active, and showing them they are capable of anything! One of my strengths as a trainer is my relate-ability to the everyday man or woman. I got into training to show people there is no certain category you have to fit into to be able to succeed in fitness. All my life, I have never been one to limit or define myself, but, instead, to constantly try new things and challenge myself daily. I want to motivate others in the way Fitness has motivated me.'
        cert1='CrossFit Level 1 Trainer' 
        cert2='Foundations Coach' 
        cert3='7:15pm Specialist' 
        />
        
      <Frame 
        img={allyssa} 
        name='Allyssa Sillari'
        title='Coach'
        innerText='Growing up, I was always active whether it was in gym class, during club soccer, gymnastics classes, or dancing around at home in front of the mirror. I currently have an Associates Degree in Diagnostic Medical Sonography from UCC, and am currently going for my Bachelors in Exercise Science at Rutgers University. Once I have graduated from Rutgers, my goal is to continue to coach athletes to be their very best selves, and to be a physical education teacher or athletic trainer in a school. I started doing Crossfit at Isabella Fitness in December 2017. It only took a few months of being at the box for me to realize that I not only wanted to excel at the goals I set for myself, but that I wanted to help other athletes at the box do so as well! Not only did I want to coach athletes in CrossFit, but in a positive body image. I have been researching Body Positivity for years because I believe that people of all age groups, genders, backgrounds and sizes should feel comfortable coming to a fitness center where they can be well, fit, have fun, and be confident in their own skin and abilities. This is something I believe Isabella Fitness is great at implementing in the facility and is something I hope to continue and add to as a coach. My passions are Crossfit, Body Positivity, and working with senior athletes!'
        cert1='CrossFit Level 1 Trainer' 
        cert2='Foundations Coach' 
        cert3='Personal Trainer' 
        cert4='Accountability Coach' 
        />


    </div>
  )
}

export default Bio;