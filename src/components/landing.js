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
  loading: {
    opacity: '0',
  },
  loaded: {
    opacity: '1',
    WebkitTransition: "opacity 1000ms linear",
    msTransition: "opacity 1000ms linear",
    transition: "opacity 1000ms linear",
  },
  jumboText: {
    margin: 10,
    padding: '10px 30px',
    maxWidth: 600,
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
    margin: 10
  },
  jumboButtonsMobile: {
    margin: 10,
    display: 'grid',
    gridTemplateRows: 'repeat(2, min-content)',
    gridTemplateColumns: 'repeat(2, max-content)',
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
  modal: {
    overlay: {
      backgroundColor: 'rgba(10, 10, 10, .6)',
      WebkitTransition: "background-color 500ms linear",
      msTransition: "background-color 500ms linear",
      transition: "background-color 500ms linear",
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
      backgroundColor: 'rgba(10, 10, 10, .6)',
      WebkitTransition: "background-color 500ms linear",
      msTransition: "background-color 500ms linear",
      transition: "background-color 500ms linear",
    },
    content: {
      position: 'absolute',
      top: '1vh',
      left: '10vw',
      right: '10vw',
      bottom: '1vh',
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
  },
  modalButton: {
    fontSize: '2rem',
    color: '#FA2535',
    cursor: 'pointer',
    opacity: '1',
    transition: "opacity 500ms linear",
  },
  modalText: {
    fontSize: '1rem'
  },
  modalTextMobile: {
    fontSize: '.8rem'
  },

}

ReactModal.setAppElement('#___gatsby')

class Landing extends Component {
  state = { 
    mobile: false,
    pulse: true,
    delay: true,
    loaded: false,
    isModalOpen: false,
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

  handleModalOpen = event => {
    // console.log('handleModalOpen: ', event);
    this.setState({ isModalOpen: true })
  }

  handleModalClose = event => {
    // console.log('handleModalOpen: ', event);
    this.setState({ isModalOpen: false })
  }

  render () {
    return (
        <div className='landing-div' style={styles.landing}>
          <div className="landingInner" style={this.state.loaded ? styles.loaded : styles.loading}>
            <div className="jumbo-text" style={styles.jumboText}>
              {/* <div id="isa" style={styles.isa}>Isabella</div>
              <div id="fitness" style={styles.fitness}>Fitness</div> */}
              <img src={img} alt="Isabella Fitness"/>
            </div>
            <div className="jumbo-buttons" style={this.state.mobile ? styles.jumboButtonsMobile : styles.jumboButtons}>
              <span className="button left-button" onClick={() => this.handleArrowClick('.slide')}>More Info</span>
              <span className="button right-button" onClick={() => this.handleArrowClick('.form')}>Contact Us</span>
              <span className="button left-button" onClick={this.handleModalOpen}>Our Mission</span>
              <span className="button right-button" onClick={() => this.handleArrowClick('.slide')}>Testimonials</span>
            </div>
          </div>
          <div className="delay" style={this.state.delay ? styles.delayHide : styles.delayShow}>
            <div className="arrow" style={this.state.arrow ? styles.arrowDiv : styles.arrowDivHide} onClick={() => this.handleArrowClick('.info-div')}>
              <i className="fas fa-angle-double-down" style={this.state.pulse ? styles.arrowOn : styles.arrowOff}></i>
            </div>
          </div>

          <ReactModal
            isOpen={this.state.isModalOpen}
            onRequestClose={this.handleModalClose}
            style={this.state.mobile ? styles.modalMobile : styles.modal}>
              <div className="modalDiv" style={styles.modalDiv}>
                <span style={styles.modalContent}>
                <div style={this.state.mobile ? styles.modalTitleMobile : styles.modalTitle}>Our Story</div>
                <div style={this.state.mobile ? styles.modalTextMobile : styles.modalText}>
                  My life has changed in so many great ways since leading my first class on July 11, 2011. At the time, there were only a few of us working out together on the high school football field. I initially started leading bootcamps because I wanted to get an intense workout after watching the CrossFit Games on ESPN. I figured I could get a couple of my buddies together to join me on this new interest. Along the way, I realized that working with individuals who shared the same passion for fitness as I did was gratifying. I decided to make Boot Camp the main focus of my life. On May 1, 2013, I opened up my own facility and began running group classes throughout the day. Since then I have developed so many great relationships, friendships, and experiences. I have devoted every available hour of my day to making the best possible experience for the bootcampers at Isabella Fitness. Opening up my own facility was a dream of my mine for many years. I believe that most fitness programs are similar in nature, and will produce similar results. However, it is the people involved that separate one training program from the next. It is the relationships we build that sustain loyalty over time. I look forward to building that bond and relationship with you. At the end of the day, you come to Isabella Fitness to Flourish! 
                </div>
                <div style={styles.modalBottom}>- Ben, Owner</div>
                </span>
                <span style={styles.modalButton} onClick={this.handleModalClose}>
                  <i class="fas fa-times-circle"></i>
                </span>
              </div>
          </ReactModal>



        </div>
    );
  }
};

export default Landing;