import React, { Component } from 'react';
import Video from './video';
import '../styles/slide.css';

export default class Slide extends Component {
  state = {
    slide1: false,
    slide2: true,
    slide3: false,
    testimonials: [ 'Mike', 'Vivian', 'Angela', 'Kyle', 'Jess' ],
    displayTestIndex: 0,
  }

  componentDidMount() {
    this.displayTestimonials()
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
        slide1: false,
        slide2: true,
        slide3: false
      })
    }
  }

  updateTestIndexLeft = () => {
    const lastIndex = this.state.testimonials.length - 1;
    const currentImageIndex  = this.state.displayTestIndex;
    const shouldResetIndex = currentImageIndex === 0;
    const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;

    return index
  }

  leftArrowClick = () => {
    this.setState({
      displayTestIndex: this.updateTestIndexLeft()
    });
    setTimeout(() => {
      this.displayTestimonials()
    }, 100);
  }

  updateTestIndexRight = () => {
    const lastIndex = this.state.testimonials.length - 1;
    const currentImageIndex  = this.state.displayTestIndex;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

    return index
  }

  rightArrowClick = () => {
    this.setState({
      displayTestIndex: this.updateTestIndexRight()
    });
    setTimeout(() => {
      this.displayTestimonials()
    }, 100);
  }

  displayTestimonials() {
    for(var i=0; i<this.state.testimonials.length; i++){
      if(this.state.displayTestIndex === i){
        document.getElementById(`test${i}`).setAttribute('state', 'test-active');
      }
      else {
        document.getElementById(`test${i}`).setAttribute('state', 'test-hidden');
      }
    }
  }

  render() {
    return (
      <div className="slide">
        <div className="sliders" style={{ marginTop: 40 }}>
          <div className="slider slider1 button" name='slide1' style={this.state.slide1 ? {boxShadow: '0 0 15px var(--white)', color: 'var(--white)'} : {boxShadow: 'none'}} onClick={this.handleSlides}>PRICING</div>
          <div className="slider slider2 button" name='slide2' style={this.state.slide2 ? {boxShadow: '0 0 15px var(--white)', color: 'var(--white)'} : {boxShadow: 'none'}} onClick={this.handleSlides}>SCHEDULE</div>
          <div className="slider slider3 button" name='slide3' style={this.state.slide3 ? {boxShadow: '0 0 15px var(--white)', color: 'var(--white)'} : {boxShadow: 'none'}} onClick={this.handleSlides}>STORIES</div>
        </div>

        {/* SLIDE 1 */}
        <div 
          className="slide1" 
          state={this.state.slide1 ? 'active' : 'hidden'}>
          <div className="slide1-container">
            <div className="top-row">
              <div className="box box1">
                <div className="heading-text green-text">IF Group Classes </div>
                <div className="info-text">
                  <ul>
      {/* <li>Drop In - $25/class</li>
                    <li>10 Class Pass - $200</li> */}
                    <li>Unlimited $166/month</li>
                    <li>2x/wk $141/month</li>
                    <li>*Pricing is month to month</li>
                    <li>Drop-ins Contact us</li>
                  </ul>
                </div>
                <div className="background-text">Best Value!</div>
              </div>
              <div className="box box2">
                <div className="heading-text green-text">Youth Fitness</div>
                <div className="info-text">
                  <ul>
             {/* <li>Drop In - $25/class</li>
                    <li>10 Class Pass - $200</li> */}
                    <li>Unlimited - 100/mo</li>
                    <li>First 2 Classes Free</li>
                     <li>Ages 8 - 12</li>
                    <li>*Pricing is month to month</li>
                  </ul>
                </div>
                <div className="background-text">Have Fun</div>
              </div>
              <div className="box box3">
                <div className="heading-text green-text">Fresh Start Program</div>
                <div className="info-text">
                  <ul>
                   {/* <li>Drop In - $25/class</li>
                    <li>10 Class Pass - $200</li> */}
                    <li>60-Minute Initial Meeting </li>
                    <li>$100 for members</li>
                    <li>$150 for non members</li>
                    <li>8-Week Program</li>
                  </ul>
                </div>
                <div className="background-text">NUTRITION</div>
              </div>
              <div className="box box4">
                <div className="heading-text green-text">Private Coaching</div>
                <div className="info-text">
                  <ul>
                    <li>30 Min Session - $40</li>
                    <li>45 Min Session - $60</li>
                    <li>60 Min Session - $70</li>
                    <li>Contact Us for Group Rates!</li>
                    <li>Contact Us for Sport's Training!</li>
                  </ul>
                </div>
                <div className="background-text">Crush Your Goals</div>
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
                      <li>6:30 am</li>
                      <li>9:30 am</li>
                      <li>3:45 pm</li>
                      <li>5:00 pm</li>
                      <li>5:00 pm</li>
                      <li>6:10 pm</li>
                      <li>7:15 pm</li>
                    </ul>
                  </div>
                  <div className="schedule-type">
                    <ul>
                      <li>IF60</li>
                      <li>IF60</li>
                      <li>IF60</li>
                      <li>IF60</li>
                      <li>IF60</li>
                      <li>Youth (8-12)</li>
                      <li>IF60</li>
                      <li>IF60</li>
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
                      <li>6:30 am</li>
                      <li>9:30 am</li>
                      <li>3:45 pm</li>
                      <li>5:00 pm</li>
                      <li>5:00 pm</li>
                      <li>6:10 pm</li>
                      <li>7:15 pm</li>
                    </ul>
                  </div>
                  <div className="schedule-type">
                    <ul>
                      <li>IF60</li>
                      <li>IF60</li>
                      <li>IF60</li>
                      <li>IF60</li>
                      <li>IF60</li>
                      <li>Youth (8-12)</li>
                      <li>IF60</li>
                      <li>IF60</li>
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
                      <li>6:30 am</li>
                      <li>9:30 am</li>
                      <li>3:45 pm</li>
                      <li>5:00 pm</li>
                      <li>5:00 pm</li>
                      <li>6:10 pm</li>
                      <li>7:15 pm</li>
                    </ul>
                  </div>
                  <div className="schedule-type">
                    <ul>
                      <li>IF60</li>
                      <li>IF60</li>
                      <li>IF60</li>
                      <li>IF60</li>
                      <li>IF60</li>
                      <li>Youth (8-12)</li>
                      <li>IF60</li>
                      <li>IF60</li>
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
                      <li>6:30 am</li>
                      <li>9:30 am</li>
                      <li>3:45 pm</li>
                      <li>5:00 pm</li>
                      <li>5:00 pm</li>
                      <li>6:10 pm</li>
                      <li>7:15 pm</li>
                    </ul>
                  </div>
                  <div className="schedule-type">
                    <ul>
                      <li>IF60</li>
                      <li>IF60</li>
                      <li>IF60</li>
                      <li>IF60</li>
                      <li>IF60</li>
                      <li>Youth (8-12)</li>
                      <li>IF60</li>
                      <li>IF60</li>
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
                      <li>6:30 am</li>
                      <li>9:30 am</li>
                      <li>3:45 pm</li>
                      <li>5:00 pm</li>
                      <li>6:10 pm</li>
                    </ul>
                  </div>
                  <div className="schedule-type">
                    <ul>
                      <li>IF60</li>
                      <li>IF60</li>
                      <li>IF60</li>
                      <li>IF60</li>
                      <li>IF60</li>
                      <li>IF60</li>
                    </ul>
                  </div>
              </div>
              <div className="schedule-box saturday">
                <div className="highlight saturday-highlight">
                    Saturday
                  </div>
                    <div className="schedule-time">
                      <ul>
                        <li>7:30 am</li>
                        <li>8:30 am</li>
                        <li>9:30 am</li>
                      </ul>
                    </div>
                    <div className="schedule-type">
                      <ul>
                        <li>IF45</li>
                        <li>IF45</li>
                        <li>IF60</li>
                      </ul>
                  </div>
              </div>
              <div className="schedule-box sunday">
                <div className="highlight sunday-highlight">
                    Sunday
                  </div>
                    <div className="schedule-time">
                      <ul>
                        <li>8:30 am</li>
                        <li>9:15 am</li>
                        <li>10:00 am</li>
                      </ul>
                    </div>
                    <div className="schedule-type">
                      <ul>
                        <li>IF30</li>
                        <li>IF30</li>
                        <li>IF30</li>  
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
              <div className="test-carousel-container">
                <div className='test-arrow-L arrow' onClick={() => this.leftArrowClick()}><i className="fas fa-angle-double-left"></i></div>
                <div className='test-arrow-R arrow' onClick={() => this.rightArrowClick()}><i className="fas fa-angle-double-right"></i></div>
                {/* TESTIMONIALS */}
                {/* Mike, Vivian, Angela, Kyle, Jess */}
                <div className="testimonial-container">
                  <div className="testimonial test-vid-left" id="test0">
                    <div className="test-video">
                      <Video
                        videoSrcURL="https://www.youtube.com/embed/ZRNxiET95fA"
                        videoTitle="72 Year Old Athlete Mike Isabella"
                      />
                    </div>
                    <div className="test-text">
                      <div className="test-text-name">
                        Mike Isabella
                      </div>
                      <div className="test-text-p">
                        Over three years ago, I started my exercise regiment going to retro fitness a few times a week; there I met Adonis and Mo. Our friendship developed there and after a time it was recommended to me by Mo to participate in a boot camp class that was being held at the Sayreville high school and was conducted by Ben. From the very start of fitness training, I had to struggle in order to achieve proper form, positioning and sustain stamina to get through the session. The commitment to myself is unstoppable – to become as strong as I was at Boot Camp as a Marine back in 1963. I know that I have the innate drive to persevere towards triumph, but without the patience, knowledge, and dedication of the trainers at Isabella Fitness, along with the verbal support of fellow members, I honestly don’t think I would have reached this level of conditioning. I have reached the 500-class mark, I am now 70 years old, lost over 50 pounds, and aside from osteoarthritis in my knees, I feel physically healthy and stronger than I’ve ever felt in my youth. I thank everyone at Isabella Fitness for where I am and how I feel today.
                      </div>
                    </div>
                  </div>

                  <div className="testimonial test-vid-right" id="test1">
                    <div className="test-text">
                        <div className="test-text-name">
                          Vivian Martinez
                        </div>
                        <div className="test-text-p">
                          Because of Isabella Fitness, my fitness journey was able to evolve into something incredible. I grew up in a culture where women lifting weights was frowned upon. When I joined the fitness family, I quickly learned how empowering it is to lift with other women. The community is nothing short of supportive, and the willingness of Ben and Kevin to help us achieve goals we thought were outside of our reach keep me coming back. I can squat more than my weight, I can do pull-ups, and, more than anything, I have more mental toughness than I ever knew I could have. Isabella Fitness is my safe haven and my home.
                        </div>
                      </div>
                    <div className="test-video">
                      <Video
                        videoSrcURL="https://www.youtube.com/embed/j5Afi9RTltE"
                        videoTitle="Community Spotlight: Vivian Martinez"
                      />
                    </div>
                  </div>

                  <div className="testimonial test-no-vid" id="test2">
                    <div className="test-text">
                        <div className="test-text-name">
                          Angela Plumacker
                        </div>
                        <div className="test-text-p">
                          I was hesitant to join at first because I was worried that I would not be challenged everyday without the feeling of the big gym. However, I found myself becoming stronger and more fit as time progressed. I enjoy coming to class everyday and I finally put going to the gym on my radar and calendar everyday. In other gyms I have gone to, I never had the same sense of urgency or desire to get to class as I do now! Ben and Kevin take the time to make sure you are exercising properly and pushing yourself to your own limits. They even take their own time to help you before and after class times. I am no longer a face or a number in a big gym, I am called by name! I like the variety of class times, competitive pricing, great location, AMAZING Owners, and friendly and supportive people working out right alongside of you. I would recommend Isabella Fitness to anyone that wants a great workout, fair pricing, a variety of class times and to anyone who is afraid of the “Group” classes. I never thought that I would join or be able to or even want to lift heavy weights, but I enjoy going to the gym everyday!
                        </div>
                      </div>
                  </div>

                  <div className="testimonial test-vid-left" id="test3">
                    <div className="test-video">
                      <Video
                        videoSrcURL="https://www.youtube.com/embed/iNQwkCRtwKk"
                        videoTitle="Community Spotlight: Kyle McSpedon"
                      />
                    </div>
                    <div className="test-text">
                      <div className="test-text-name">
                        Kyle McSpedon
                      </div>
                      <div className="test-text-p">
                        I started Isabella Fitness when my Mom introduced me to it in the summer of 2012. It was the summer after my freshmen year of college and I put on a freshmen 50, not freshmen 15. I was fat and needed change. I remember the day she told me about IF; she heard it from a co-worker and knew I would love it. She was right! I started working out at an affiliate in New Brunswick. By the end of the year, I was at IF. I played lacrosse in college and doing HIIT was the perfect way for me to stay in shape. I love going to the gym, lifting heavy and going as hard as I can during my workouts. It helps me forget about the little things that may be bothering me during the day. I don’t have a set class time that I go to which I actually enjoy. It has a lot to do with my crazy schedule but it works out because I get to work out with so many different people. My brother, Ryan, joined the box when he graduated college. This has been great for us as being able to compete against him (and beat him) is one of my favorite things about going to the gym. I feel extremely lucky to be able to workout with my friends and family every day.
                      </div>
                    </div>
                  </div>

                  <div className="testimonial test-vid-right" id="test4">
                    <div className="test-text">
                        <div className="test-text-name">
                          Jess Pogoda
                        </div>
                        <div className="test-text-p">
                          Prior to joining Isabella Fitness in May 2012, I used to workout on my own. I ran a lot, went to the gym to use the elliptical machines, and occasionally tossed around the 5-pound dumbbells. I hated going to the gym, I mostly just ran, and ran, and ran! Although I loved to run, I wanted something else, so I started doing the Insanity videos after work hoping my coworkers would join me. That only lasted for so long. Finally, Peter brought me over to Isabella Fitness where he was already working out with a group of people. I didn’t even know what HIIT was. I didn’t care, I just wanted to workout with other people and change up my old boring routine. Well, it definitely changed! I never touched a barbell before I started IF. I was clueless! I didn’t think I would even be able to jump onto a 20-inch box, put weight on the bar, and lift it over my head, or especially climb a rope to the ceiling and coming back down without breaking a body part. But somehow I did all those things. I have come a long way and still have a long way to go, but it is fun for me. Coming to the box is something I look forward to, especially after being at work all day. It is a chance to get in a good workout while being surrounded by awesome people who push you to do better each day while joking around and having fun.
                        </div>
                      </div>
                    <div className="test-video">
                      <Video
                        videoSrcURL="https://www.youtube.com/embed/_zvLCzMPKKo"
                        videoTitle="Community Spotlight: Jess Pogoda"
                      />
                    </div>
                  </div>
                </div>

              </div>
            </div>
        </div>
      </div>
    )
  }
}
