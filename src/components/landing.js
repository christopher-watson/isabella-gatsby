import React, { Component } from 'react';
import ReactModal from 'react-modal'
import colors from "../styles/colors"
import img from '../images/logoLarge.png'

const styles = {
  landing: {
    display: 'flex',
    height: '100vh',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    flexDirection: 'column',
  },
  landingText: {
    fontSize: '2rem',
    fontFamily: 'Open Sans, Arial, sans-serif',
    color: 'var(--white)',
    letterSpacing: 1.5,
    textAlign: 'center',
    textShadow: `0 0 40px ${colors.green}`,
    padding: '0 10px',
  },
  landingTextMobile: {
    fontSize: '1rem',
    fontFamily: 'Open Sans, Arial, sans-serif',
    color: 'var(--white)',
    letterSpacing: 1.5,
    textAlign: 'center',
    textShadow: `0 0 40px ${colors.green}`,
    padding: '0 10px',
  },
  landingTextHead: {
    // fontFamily: 'Open Sans, Arial, sans-serif',
    color: 'var(--white)',
    letterSpacing: 1.5,
    textAlign: 'center',
    fontSize: '3rem',
    fontFamily: 'Alfa Slab One, sans-serif',
    textShadow: '0 0 5px var(--dark)',
    textDecoration: 'underline',
    textDecorationColor: 'var(--green)',
    marginBottom: 10,

  },
  landingTextHeadMobile: {
    // fontFamily: 'Open Sans, Arial, sans-serif',
    color: 'var(--white)',
    letterSpacing: 1.5,
    textAlign: 'center',
    fontSize: '2rem',
    fontFamily: 'Alfa Slab One, sans-serif',
    textShadow: '0 0 5px var(--dark)',
    textDecoration: 'underline',
    textDecorationColor: 'var(--green)',
    marginBottom: 10,
  },
  loading: {
    opacity: '0',
  },
  loaded: {
    opacity: '1',
    WebkitTransition: "opacity 1000ms linear",
    msTransition: "opacity 1000ms linear",
    transition: "opacity 1000ms linear",
  },
  jumboImage: {
    width: '80vw',
    maxWidth: 500,
  },
  isa: {
    color: colors.white,
    fontSize: '4.5rem',
    textShadow: `0 0 40px ${colors.green}`
  },
  fitness: {
    color: colors.green,
    fontSize: '4.5rem',
    textShadow: `0 0 20px ${colors.white}`
  },
  jumboButtons: {
    marginTop: 20
  },
  jumboButtonsMobile: {
    marginTop: 20,
    display: 'grid',
    gridTemplateRows: 'repeat(3, min-content)',
    gridTemplateColumns: 'max-content',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    gridRowGap: 10,
  },
  delayShow: {
    position: 'absolute',
    bottom: '50px',
    WebkitTransition: "opacity 500ms linear",
    msTransition: "opacity 500ms linear",
    transition: "opacity 500ms linear",
    opacity: 1,
  },
  delayHide: {
    position: 'absolute',
    bottom: '50px',
    WebkitTransition: "opacity 500ms linear",
    msTransition: "opacity 500ms linear",
    transition: "opacity 500ms linear",
    opacity: 0,
  },
  arrowDiv: {
    fontSize: '2.5rem',
    cursor: 'pointer',
    color: 'var(--grey)',
    textShadow: `0 0 20px ${colors.green}`,
    WebkitTransition: "opacity 700ms linear",
    msTransition: "opacity 700ms linear",
    transition: "opacity 700ms linear",
    opacity: 1,
  },
  arrowDivHide: {
    fontSize: '2.5rem',
    color: 'var(--grey)',
    textShadow: `0 0 20px ${colors.green}`,
    WebkitTransition: "opacity 700ms linear",
    msTransition: "opacity 700ms linear",
    transition: "opacity 700ms linear",
    opacity: 0,
  },
  arrowOn: {
    color: 'var(--white)',
    WebkitTransition: "color 500ms linear",
    msTransition: "color 500ms linear",
    transition: "color 500ms linear",
  },
  arrowOff: {
    color: 'var(--grey)',
    WebkitTransition: "color 500ms linear",
    msTransition: "color 500ms linear",
    transition: "color 500ms linear",
  },
  pulseOn: {
    color: 'var(--white)',
    WebkitTransition: "all 500ms linear",
    msTransition: "all 500ms linear",
    transition: "all 500ms linear",
    boxShadow: '0 0 15px var(--white)'
  },
  pulseOff: {
    color: 'var(--black)',
    WebkitTransition: "all 500ms linear",
    msTransition: "all 500ms linear",
    transition: "all 500ms linear",
  },
  modal: {
    overlay: {
      backgroundColor: 'rgba(10, 10, 10, 1)',
      WebkitTransition: "background-color 500ms linear",
      msTransition: "background-color 500ms linear",
      transition: "background-color 500ms linear",
      zIndex: '500',
    },
    content: {
      position: 'absolute',
      top: '20vh',
      left: '10vw',
      right: '10vw',
      bottom: '20vh',
      border: '5px solid var(--green)',
      borderRadius: '25px',
      WebkitTransition: "background 500ms linear",
      msTransition: "background 500ms linear",
      transition: "background 500ms linear",
      background: 'var(--black)',
      boxShadow: '1px 1px 50px 10px var(--opaque)',
      padding: '0 5%',
      color: 'var(--white)',
    }
  },
  modalMobile: {
    overlay: {
      backgroundColor: 'rgba(10, 10, 10, 1)',
      WebkitTransition: "background-color 500ms linear",
      msTransition: "background-color 500ms linear",
      transition: "background-color 500ms linear",
      zIndex: '500',
    },
    content: {
      position: 'absolute',
      top: '10vh',
      left: '10vw',
      right: '10vw',
      bottom: '10vh',
      border: '5px solid var(--green)',
      borderRadius: '25px',
      WebkitTransition: "background 500ms linear",
      msTransition: "background 500ms linear",
      transition: "background 500ms linear",
      background: 'var(--black)',
      boxShadow: '1px 1px 50px 10px var(--opaque)',
      padding: '0 2%',
      color: 'var(--white)',
    }
  },
  // modalInitial: {
  //   overlay: {
  //     backgroundColor: 'rgba(10, 10, 10, 0)',
  //     // WebkitTransition: "background-color 500ms linear",
  //     // msTransition: "background-color 500ms linear",
  //     // transition: "background-color 500ms linear",
  //   },
  //   content: {
  //     // position: 'absolute',
  //     // top: '20vh',
  //     // left: '10vw',
  //     // right: '10vw',
  //     // bottom: '20vh',
  //     // border: '5px solid var(--green)',
  //     background: 'rgba(10, 10, 10, 0)',
  //     // borderRadius: '25px',
  //     WebkitTransition: "background 500ms linear",
  //     msTransition: "background 500ms linear",
  //     transition: "background 500ms linear",
  //   }
  // },
  modalDiv: {
    display: 'grid',
    gridTemplateRows: '3fr .5fr',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: '100%',
  },
  modalContent: {
    color: 'var(--white)',
    fontFamily: 'Open Sans, Arial, sans-serif',
  },
  modalTitle: {
    fontSize: '3rem',
    fontFamily: 'Alfa Slab One, sans-serif',
    color: 'var(--white)',
    letterSpacing: 1.5,
    textShadow: '0 0 5px var(--dark)',
    textDecoration: 'underline',
    textDecorationColor: 'var(--green)',
    marginBottom: 10,
  },
  modalTitleMobile: {
    fontSize: '2rem',
    fontFamily: 'Alfa Slab One, sans-serif',
    color: 'var(--white)',
    letterSpacing: 1.5,
    textShadow: '0 0 5px var(--dark)',
    textDecoration: 'underline',
    textDecorationColor: 'var(--green)',
    marginBottom: 10,
  },
  modalBottom: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: '1.7rem',
  },
  modalBottomMobile: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: '1.2rem',
  },
  modalBottomMobile2: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: '.9rem',
  },
  modalButton: {
    fontSize: '2rem',
    color: '#FA2535',
    cursor: 'pointer',
    opacity: '1',
    transition: "opacity 500ms linear",
  },
  modalText: {
    fontSize: '1.5rem',
  },
  modalTextMobile: {
    fontSize: '1rem',
  },
  modalTextMobile2: {
    fontSize: '.7rem',
  },
  headerPhone: {
    color: 'var(--green)',
    fontFamily: 'Open Sans, Arial, sans-serif',
    letterSpacing: 1.5,
    padding: '5px 0',
    fontWeight: 'bold',
    marginBottom: 0,
  },
  headerEmail: {
    color: 'var(--green)',
    fontFamily: 'Open Sans, Arial, sans-serif',
    letterSpacing: 1.5,
    padding: '5px 0',
    fontWeight: 'bold',
    marginBottom: 0,
  },
  green: {
    color: 'var(--green)',
    fontWeight: 'bold',
  }

}

ReactModal.setAppElement('#___gatsby')

class Landing extends Component {
  state = { 
    mobile: false,
    pulse: true,
    delay: true,
    loaded: false,
    isModal1Open: false,
    isModal2Open: false,
  }

  componentDidMount() {
    this.handleResize()
    this.handleScroll()
    this.handleArrowPulse()
    window.addEventListener('resize', this.handleResize)
    window.addEventListener('scroll', this.handleScroll)
    setTimeout(() => {
      this.setState({ delay: false })
    }, 3000);
    setTimeout(() => {
      this.setState({ loaded: true })
    }, 500);
  }

  handleResize = () => {
    if(window.innerWidth < 960) {
      this.setState({ mobile: true })
    }
    else {
      this.setState ({ mobile: false })
    }
  }

  handleScroll = () => {
    if (window.scrollY < 60) {
      this.setState({
        arrow: true,
      })
    }
    if (window.scrollY > 60) {
      this.setState({
        arrow: false,
      })
    }
  }

  handleArrowPulse = () => {
    setInterval(() => {
      this.setState({ pulse: !this.state.pulse })
    }, 750);
  }

  handleArrowClick = (dest) => {
    document.querySelector(dest).scrollIntoView({ 
      behavior: 'smooth' 
    });
  }

  handleModal1Open = event => {
    // console.log('handleModalOpen: ', event);
    this.setState({ isModal1Open: true })
  }

  handleModal1Close = event => {
    // console.log('handleModalOpen: ', event);
    this.setState({ isModal1Open: false })
  }

  handleModal2Open = event => {
    // console.log('handleModalOpen: ', event);
    this.setState({ isModal2Open: true })
  }

  handleModal2Close = event => {
    // console.log('handleModalOpen: ', event);
    this.setState({ isModal2Open: false })
  }

  render () {
    return (
        // <div className='landing-div' style={styles.landing}>
        <div className='landing-div' style={styles.landing}>
          <div className="landingInner" style={this.state.loaded ? styles.loaded : styles.loading}>
            {/* <div className="jumbo-top-text" style={this.state.mobile ? styles.landingTextMobile : styles.landingText}>
              Our focus is on personalizing your fitness <br/> experience by designing a plan that aligns with your goals.
            </div> */}
            <div className="jumbo-text" style={styles.jumboText}>
              <img src={img} alt="Isabella Fitness" style={styles.jumboImage}/>
            </div>
            <div className="jumbo-top-text-header" style={this.state.mobile ? styles.landingTextHeadMobile : styles.landingTextHead}>
              Feel Accomplished, Strong, and Healthy!
            </div>
            <div className="jumbo-top-text" style={this.state.mobile ? styles.landingTextMobile : styles.landingText}>
              {
                this.state.mobile 
                ?  
                <span><We are fully committed to being a positive difference maker in as many lives as possible. </span>
                :
                <span><We are fully committed to being a positive difference maker in as many lives as possible. </span>
              }
            </div>
            <div className="jumbo-buttons" style={this.state.mobile ? styles.jumboButtonsMobile : styles.jumboButtons}>
              <span className="button left-button" onClick={() => this.handleArrowClick('.slide')}>More Info</span>
              <span className="button right-button" onClick={() => this.handleArrowClick('.form')}>Contact Us</span>
              <span className="button left-button" onClick={this.handleModal1Open}>Our Mission</span>
              <span className="button left-button" onClick={this.handleModal2Open} style={this.state.pulse ? styles.pulseOn : styles.pulseOff}>FREE CONSULTATION</span>
              {/* <span className="button right-button" onClick={() => this.handleArrowClick('.slide')}>Testimonials</span> */}
            </div>
          </div>
          {
            this.state.mobile
            ?
            <div></div>
            :
            <div className="delay" style={this.state.delay ? styles.delayHide : styles.delayShow}>
              <div className="arrow" style={this.state.arrow ? styles.arrowDiv : styles.arrowDivHide} onClick={() => this.handleArrowClick('.info-div')}>
                <i className="fas fa-angle-double-down" style={this.state.pulse ? styles.arrowOn : styles.arrowOff}></i>
              </div>
            </div>
          }


          <ReactModal
            isOpen={this.state.isModal1Open}
            onRequestClose={this.handleModal1Close}
            style={this.state.mobile ? styles.modalMobile : styles.modal}>
              <div className="modalDiv" style={styles.modalDiv}>
                <span style={styles.modalContent}>
                <div style={this.state.mobile ? styles.modalTitleMobile : styles.modalTitle}>Our Mission</div>
                <div style={this.state.mobile ? styles.modalTextMobile : styles.modalText}>
                  Our focus is to create inclusive group classes as well as individual training options that create a fulfilling experience for everyone from beginners to seasoned athletes. Our Mission is help you Flourish…aka. Become the best version of yourself.
                </div>
                <div style={this.state.mobile ? styles.modalBottomMobile : styles.modalBottom}>- Ben, Owner</div>
                </span>
                <span style={styles.modalButton} onClick={this.handleModal1Close}>
                  <i className="fas fa-times-circle"></i>
                </span>
              </div>
          </ReactModal>

          <ReactModal
            isOpen={this.state.isModal2Open}
            onRequestClose={this.handleModal2Close}
            style={this.state.mobile ? styles.modalMobile : styles.modal}>
              <div className="modalDiv" style={styles.modalDiv}>
                <span style={styles.modalContent}>
                <div style={this.state.mobile ? styles.modalTitleMobile : styles.modalTitle}>Get Started</div>
                <div style={this.state.mobile ? styles.modalTextMobile2 : styles.modalText}>
                Regardless of your past athletic experience or current fitness level, everyone who first comes to Isabella Fitness is provided with the opportunity to learn about basic techniques, movements, terminology, and pre-workout warm-ups before participating in our Group Classes. <span style={styles.green}>It all begins with scheduling a Free Fitness Assessment.</span> During the session, will first discuss your goals, exercise history, injury history, and, simply, learn more about you! Afterwards, we will provide you with a workout with one of our experienced trainers. You will leave the session with an individual plan for moving forward in will include a prescribed number of 1-on-1 personal training sessions; just you and the coach with the flexibility to schedule at your convenience. This is the perfect time to ask questions, get comfortable and meet our community before transitioning into our group classes. To schedule a session, please contact us.
                </div>
                <div style={this.state.mobile ? styles.modalBottomMobile2 : styles.modalBottom}>
                  Call or Text: <a style={styles.headerPhone} href="tel:17322088942">(732) 208-8942</a>
                  <br/>
                  Email: <a style={styles.headerEmail} href='mailto:contact@isabellafitness.com?subject=Sign Me Up!'>contact@isabellafitness.com</a>
                </div>
                </span>
                <span style={styles.modalButton} onClick={this.handleModal2Close}>
                  <i className="fas fa-times-circle"></i>
                </span>
              </div>
          </ReactModal>



        </div>
    );
  }
};

export default Landing;
