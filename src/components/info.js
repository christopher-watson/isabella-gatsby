import React, { Component } from 'react'
import colors from "../styles/colors"
import CardLeft from './cardLeft'
import CardRight from './cardRight'

const styles = {
  info: {
    background: colors.dark,
    borderTop: `1px solid ${colors.white}`,
  },
  divider: {
    borderTop: `1px solid ${colors.white}`,
  }
}

class Info extends Component {
  state = { 
    mobile: false,
  }

  componentDidMount() {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  }

  handleResize = () => {
    if(window.innerWidth < 960) {
      this.setState({ mobile: true })
    }
    else {
      this.setState ({ mobile: false })
    }
  }

  render () {
    return (
      <div className='info-div' style={styles.info}>
        <CardLeft 
          mobile={this.state.mobile}
          iconOne='fas fa-weight-hanging'
          textOne='Awesome Workouts!'
          iconTwo='fas fa-running'
          textTwo='Moving with Purpose!'
          iconThree='fas fa-warehouse'
          textThree='Leave Feeling Fulfilled!'
          heading='CrossFit'
          // greenScript='Flourish!'
          paragraph="The perfect fitness option regardless of whether you're brand new to exercise or a veteran. Full instruction and coaching on how to perform each exercise properly is always reinforced and the workouts are always awesome. Our mission is to help you FLOURISH through assessing your individual movement patterns, teaching you how to move with purpose, adapting to your goals as they change, and providing you with instruction and education during class. Our goal is to build a facility in which you are inspired to work hard, feel safe when you are here, and leave feeling fulfilled. Imagine yourself in a place where everyone knows your name and cares about your success! See Pricing below"
          />
        
        <div className="divider" style={styles.divider}></div>
        
        <CardRight 
          mobile={this.state.mobile}
          iconOne='fas fa-child'
          textOne='Proper Mechanics!'
          iconTwo='fas fa-volleyball-ball'
          textTwo='Enhanced Sports Performance!'
          iconThree='fas fa-school'
          textThree='Positive Academic Impact!'
          heading='Youth Fitness (ages 6-13)'
          // greenScript='Standard Meal Plan'
          paragraph="We want kids to have fun. We want kids to belong to a supportive group of other kids that encourage and support them. Our classes are structured so that any kid can be successful. We provide proper instruction in all the exercises that we perform in class. On a daily bases the kids are exposed to bodyweight exercises, cardio exercises, running, kettlebell and dumbbell exercises, medicine ball exercises, and games that involve teamwork and strategy. See Pricing below"
          />

        <div className="divider" style={styles.divider}></div>
        
        <CardLeft 
          mobile={this.state.mobile}
          iconOne='fas fa-heart'
          textOne='Healthy Lifestyle!'
          iconTwo='fas fa-dumbbell'
          textTwo='Build Muscle!'
          iconThree='fas fa-running'
          textThree='Attention & Instruction!'
          heading='Cardio Express'
          // greenScript='Standard Meal Plan'
          paragraph="This is where those who are committed to a healthy lifestyle, gather to workout, sweat, burn fat, build muscle, blow off steam, and be your BEST Self. This class will get you moving and get you out. This is the perfect introduction to fitness with the use of dumbbells, kettlebells, stability balls, and your own bodyweight. Let us be the instrumental part of your day where you get to focus on doing what is right for You! See Pricing below"
          />

        <div className="divider" style={styles.divider}></div>
        
        <CardRight 
          mobile={this.state.mobile}
          iconOne='fas fa-dumbbell'
          textOne='Individual Fitness Goals!'
          iconTwo='fas fa-warehouse'
          textTwo='Private Setting!'
          iconThree='fas fa-clipboard-list'
          textThree='Make Your own Schedule!'
          heading='Private Coaching'
          // greenScript='Standard Meal Plan'
          paragraph="If you're looking for a more private exercise experience or your hectic and unpredictable schedule doesn't allow you to attend our group classes - we have a variety of individual coaching options specifically tailored to you. 1-on-1 coaching provides an intimate experience for anyone looking to begin their fitness journey in a more private setting. With this service, you’re in control of your exercise schedule and every session is individually tailored to your goals and fitness level. Your Schedule, Your Goals! See Pricing below"
          />
          
      </div>
    );
  }
};

export default Info;
