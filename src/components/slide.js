import React, { Component } from 'react';
import '../styles/slide.css';

export default class Slide extends Component {
  state = {
    slide1: true,
    slide2: false,
    slide3: false,
  }

  handleSlides = (event) => {
    // console.log(event.target.attributes.name.value);
    const name = event.target.attributes.name.value;
    switch(name){
      case 'slide1':
        this.setState({
          slide1: true,
          slide2: false,
          slide3: false
        })
        break;
      case 'slide2':
        this.setState({
          slide1: false,
          slide2: true,
          slide3: false
        })
        break;
      case 'slide3':
        this.setState({
          slide1: false,
          slide2: false,
          slide3: true
        })
        break;
      default:
      this.setState({
        slide1: true,
        slide2: false,
        slide3: false
      })
    }
  }

  render() {
    return (
      <div className="slide">
        <div className="sliders" style={{ marginTop: 40 }}>
          <div className="slider slider1 button" name='slide1' style={this.state.slide1 ? {boxShadow: '0 0 15px var(--white)', color: 'var(--white)'} : {boxShadow: 'none'}} onClick={this.handleSlides}>PLANS</div>
          <div className="slider slider2 button" name='slide2' style={this.state.slide2 ? {boxShadow: '0 0 15px var(--white)', color: 'var(--white)'} : {boxShadow: 'none'}} onClick={this.handleSlides}>SCHEDULE</div>
          <div className="slider slider3 button" name='slide3' style={this.state.slide3 ? {boxShadow: '0 0 15px var(--white)', color: 'var(--white)'} : {boxShadow: 'none'}} onClick={this.handleSlides}>SLIDE 3</div>
        </div>

        {/* SLIDE 1 */}
        <div 
          className="slide1" 
          state={this.state.slide1 ? 'active' : 'hidden'}>
          <div className="slide1-container">
            <div className="top-row">
              <div className="box box1">
                <div className="heading-text green-text">Monthly Membership</div>
                <div className="info-text">
                  <ul>
                    <li>Unlimited Access to All Classes</li>
                    <li>Automatic Monthly Renewal</li>
                    <li>Rate Guaranteed for One Year</li>
                    <li>Cancellation Requires 30 Days Notice</li>
                  </ul>
                </div>
                <div className="background-text">$199</div>
              </div>
              <div className="box box2">
                <div className="heading-text green-text">Monthly Membership</div>
                <div className="info-text">
                  <ul>
                    <li>Unlimited Access to All Classes</li>
                    <li>Automatic Monthly Renewal</li>
                    <li>Rate Guaranteed for One Year</li>
                    <li>Cancellation Requires 30 Days Notice</li>
                  </ul>
                </div>
                <div className="background-text">$199</div>
              </div>
              <div className="box box3">
                <div className="heading-text green-text">Monthly Membership</div>
                <div className="info-text">
                  <ul>
                    <li>Unlimited Access to All Classes</li>
                    <li>Automatic Monthly Renewal</li>
                    <li>Rate Guaranteed for One Year</li>
                    <li>Cancellation Requires 30 Days Notice</li>
                  </ul>
                </div>
                <div className="background-text">$199</div>
              </div>
            </div>
            <div className="bottom-row">
              <div className="bottom-box bottom-box-left">
                <div className="underline-text">
                  Single Class & Multi-Day
                </div>
                <div className="slide-text-left">
                <ul>
                    <li>1</li>
                    <li>5</li>
                    <li>10</li>
                    <li>15</li>
                    <li>20</li>
                    <li>30</li>
                  </ul>
                </div>
                <div className="slide-text-right">
                  <ul>
                    <li>$25</li>
                    <li>$95</li>
                    <li>$180</li>
                    <li>$225</li>
                    <li>$320</li>
                    <li>$750</li>
                  </ul>
                </div>
              </div>
              <div className="bottom-box bottom-box-right">
                <div className="underline-text">
                  Single Class & Multi-Day
                </div>
                <div className="slide-text-left">
                  <ul>
                    <li>1</li>
                    <li>5</li>
                    <li>10</li>
                    <li>15</li>
                    <li>20</li>
                    <li>30</li>
                  </ul>
                </div>
                <div className="slide-text-right">
                  <ul>
                    <li>$25</li>
                    <li>$95</li>
                    <li>$180</li>
                    <li>$225</li>
                    <li>$320</li>
                    <li>$750</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SLIDE 2 */}
        <div 
          className="slide2" 
          state={this.state.slide2 ? 'active' : 'hidden'}>
          <div className="slide2-container">
            <div className="weekday-box">
              <div className="schedule-box monday">
                <div className="highlight monday-highlight">
                  Monday
                </div>
                  <div className="schedule-time">
                    <ul>
                      <li>5:30 am</li>
                      <li>9:30 am</li>
                      <li>3:45 pm</li>
                      <li>5:00 pm</li>
                      <li>5:00 pm</li>
                      <li>6:10 pm</li>
                      <li>6:15 pm</li>
                      <br/>
                      <li>7:15 pm</li>
                      <li>8:20 pm</li>
                    </ul>
                  </div>
                  <div className="schedule-type">
                    <ul>
                      <li>Crossfit</li>
                      <li>Crossfit</li>
                      <li>Crossfit</li>
                      <li>Crossfit</li>
                      <li>Youth Fitness</li>
                      <li>Crossfit</li>
                      <li>Ladies Cardio<br/>Express</li>
                      <li>Crossfit</li>
                      <li>Cardio Express</li>
                    </ul>
                  </div>
              </div>
              <div className="schedule-box tuesday">
                <div className="highlight tuesday-highlight">
                  Tuesday
                </div>
                  <div className="schedule-time">
                    <ul>
                      <li>5:30 am</li>
                      <li>9:30 am</li>
                      <li>3:45 pm</li>
                      <li>5:00 pm</li>
                      <li>5:00 pm</li>
                      <li>6:10 pm</li>
                      <li>6:15 pm</li>
                      <br/>
                      <li>7:15 pm</li>
                      <li>8:20 pm</li>
                    </ul>
                  </div>
                  <div className="schedule-type">
                    <ul>
                      <li>Cardio Express</li>
                      <li>Crossfit</li>
                      <li>Crossfit</li>
                      <li>Crossfit</li>
                      <li>Youth Fitness</li>
                      <li>Crossfit</li>
                      <li>Ladies Cardio<br/>Express</li>
                      <li>Crossfit</li>
                      <li>Cardio Express</li>
                    </ul>
                  </div>
              </div>
              <div className="schedule-box wednesday">
                <div className="highlight wednesday-highlight">
                  Wednesday
                </div>
                  <div className="schedule-time">
                    <ul>
                      <li>5:30 am</li>
                      <li>9:30 am</li>
                      <li>3:45 pm</li>
                      <li>5:00 pm</li>
                      <li>5:00 pm</li>
                      <li>6:10 pm</li>
                      <li>7:15 pm</li>
                      <li>8:20 pm</li>
                    </ul>
                  </div>
                  <div className="schedule-type">
                    <ul>
                      <li>Crossfit</li>
                      <li>Crossfit</li>
                      <li>Crossfit</li>
                      <li>Crossfit</li>
                      <li>Youth Fitness</li>
                      <li>Crossfit</li>
                      <li>Crossfit</li>
                      <li>Cardio Express</li>
                    </ul>
                  </div>
              </div>
              <div className="schedule-box thursday">
                <div className="highlight thursday-highlight">
                  Thursday
                </div>
                  <div className="schedule-time">
                    <ul>
                      <li>5:30 am</li>
                      <li>9:30 am</li>
                      <li>3:45 pm</li>
                      <li>5:00 pm</li>
                      <li>5:00 pm</li>
                      <li>6:10 pm</li>
                      <li>6:15 pm</li>
                      <li>7:15 pm</li>
                      <li>8:20 pm</li>
                    </ul>
                  </div>
                  <div className="schedule-type">
                    <ul>
                      <li>Cardio Express</li>
                      <li>Crossfit</li>
                      <li>Crossfit</li>
                      <li>Crossfit</li>
                      <li>Youth Fitness</li>
                      <li>Crossfit</li>
                      <li>Ladies Cardio<br/>Express</li>
                      <li>Crossfit</li>
                      <li>Cardio Express</li>
                    </ul>
                  </div>
              </div>
              <div className="schedule-box friday">
                <div className="highlight friday-highlight">
                  Friday
                </div>
                  <div className="schedule-time">
                    <ul>
                      <li>5:30 am</li>
                      <li>9:30 am</li>
                      <li>3:45 pm</li>
                      <li>5:00 pm</li>
                      <li>5:00 pm</li>
                      <li>6:10 pm</li>
                    </ul>
                  </div>
                  <div className="schedule-type">
                    <ul>
                      <li>Crossfit</li>
                      <li>Crossfit</li>
                      <li>Crossfit</li>
                      <li>Crossfit</li>
                      <li>Open Gym</li>
                      <li>Crossfit</li>
                    </ul>
                  </div>
              </div>
              <div className="schedule-box saturday">
                <div className="highlight saturday-highlight">
                    Saturday
                  </div>
                    <div className="schedule-time">
                      <ul>
                        <li>8:30 am</li>
                        <li>9:30 am</li>
                        <li>10:30 am</li>
                      </ul>
                    </div>
                    <div className="schedule-type">
                      <ul>
                        <li>Cardio Express</li>
                        <li>Crossfit</li>
                        <li>Open Gym</li>
                      </ul>
                  </div>
              </div>
              <div className="schedule-box sunday">
                <div className="highlight sunday-highlight">
                    Sunday
                  </div>
                    <div className="schedule-time">
                      <ul>
                        <li>9:30 am</li>
                        <li>10:30 am</li>
                      </ul>
                    </div>
                    <div className="schedule-type">
                      <ul>
                        <li>Foundations</li>
                        <li>Open Gym</li>
                      </ul>
                  </div>
              </div>
            </div>
          </div>
        </div>

        {/* SLIDE 3 */}
        <div 
          className="slide3" 
          state={this.state.slide3 ? 'active' : 'hidden'}>
            <div className="slide3-container">
              <div className="green-text">Whatever you want goes here!</div>
            </div>
        </div>
      </div>
    )
  }
}
