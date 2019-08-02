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
        // <div className='landing-div' style={styles.landing}>
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
              {/* <span className="button right-button" onClick={() => this.handleArrowClick('.slide')}>Testimonials</span> */}
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
                <div style={this.state.mobile ? styles.modalTitleMobile : styles.modalTitle}>Our Mission</div>
                <div style={this.state.mobile ? styles.modalTextMobile : styles.modalText}>
                  Our focus is to create inclusive group classes as well as individual training options that create a fulfilling experience for everyone from beginners to seasoned athletes. Our Mission is help you Flourish…aka. Become the best version of yourself.
                </div>
                <div style={this.state.mobile ? styles.modalBottomMobile : styles.modalBottom}>- Ben, Owner</div>
                </span>
                <span style={styles.modalButton} onClick={this.handleModalClose}>
                  <i className="fas fa-times-circle"></i>
                </span>
              </div>
          </ReactModal>



        </div>
    );
  }
};

export default Landing;