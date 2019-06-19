import React, { Component } from 'react';
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

}

class Landing extends Component {
  state = { 
    mobile: false,
    pulse: true,
    delay: true,
    loaded: false,
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

  render () {
    return (
        <div className='landing-div' style={styles.landing}>
          <div className="landingInner" style={this.state.loaded ? styles.loaded : styles.loading}>
            <div className="jumbo-text" style={styles.jumboText}>
              {/* <div id="isa" style={styles.isa}>Isabella</div>
              <div id="fitness" style={styles.fitness}>Fitness</div> */}
              <img src={img} alt="Isabella Fitness"/>
            </div>
            <div className="jumbo-buttons" style={styles.jumboButtons}>
              <span className="button left-button" onClick={() => this.handleArrowClick('.slide')}>More Info</span>
              <span className="button right-button" onClick={() => this.handleArrowClick('.form')}>Contact Us</span>
            </div>
          </div>
          <div className="delay" style={this.state.delay ? styles.delayHide : styles.delayShow}>
            <div className="arrow" style={this.state.arrow ? styles.arrowDiv : styles.arrowDivHide} onClick={() => this.handleArrowClick('.info-div')}>
              <i className="fas fa-angle-double-down" style={this.state.pulse ? styles.arrowOn : styles.arrowOff}></i>
            </div>
          </div>
        </div>
    );
  }
};

export default Landing;