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
          heading='IF60 - IF45 - IF30 Group Classes'
          // greenScript='Flourish!'
          paragraph="Think 60, 45, or 30 minutes of a HIIT and Strength + Conditioning workout with movements that change daily. Every class starts with an overview of the workout followed by demos of the movements and modifications. All of our group fitness classes can be modified for any fitness level.The perfect fitness option regardless of whether you're brand new to exercise or a veteran. Our mission is to help you FLOURISH through assessing your individual movement patterns, teaching you how to move with purpose, adapting to your goals as they change, and providing you with instruction and education during class."
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
          heading='Youth Fitness (Ages 8-12)'
          // greenScript='Standard Meal Plan'
          paragraph="We want kids to have fun. We want kids to belong to a supportive group of other kids that encourage and support them. Our classes are structured so that any kid can be successful. We provide proper instruction in all the exercises that we perform in class. On a daily bases the kids are exposed to bodyweight exercises, cardio exercises, running, kettlebell and dumbbell exercises, medicine ball exercises, and games that involve teamwork and strategy. ALL KIDS START OUT WITH 2-CLASSES FREE! Text Ben @ 732.208.8942 to get started."
          />

        <div className="divider" style={styles.divider}></div>
        
        <CardLeft 
          mobile={this.state.mobile}
          iconOne='fas fa-heart'
          textOne='Lose Weight'
          iconTwo='fas fa-dumbbell'
          textTwo='Feel Great'
          iconThree='fas fa-running'
          textThree='Look Amazing!'
          heading='Fresh Start Program'
          // greenScript='Standard Meal Plan'
          paragraph="Our 8-week Fresh Start NUTRITION Program is the perfect way to reach your wellness goals. The main goal of the program is to help you lose weight and feel great. Losing weight should not be complicated or overwheliming. During our 8-week program, you will be introduced to new strategies weekly."
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
