import React, { Component } from 'react';
import colors from "../styles/colors"

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
  jumboText: {
    margin: 10
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
      console.log(this.state.pulse)
    }, 750);
  }

  handleArrowClick = () => {
    document.querySelector('.info-div').scrollIntoView({ 
      behavior: 'smooth' 
    });
  }

  render () {
    return (
        <div className='landing-div' style={styles.landing}>
          <div className="jumbo-text" style={styles.jumboText}>
            <div id="isa" style={styles.isa}>Isabella</div>
            <div id="fitness" style={styles.fitness}>Fitness</div>
          </div>
          <div className="jumbo-buttons" style={styles.jumboButtons}>
          <a className="button left-button" href='/' target="_blank" rel="noopener noreferrer">
            <span>Button</span>
          </a>
          <a className="button right-button" href='/' target="_blank" rel="noopener noreferrer">
            <span>Button</span>
          </a>
          </div>
          <div className="delay" style={this.state.delay ? styles.delayHide : styles.delayShow}>
            <div className="arrow" style={this.state.arrow ? styles.arrowDiv : styles.arrowDivHide} onClick={this.handleArrowClick}>
              <i className="fas fa-angle-double-down" style={this.state.pulse ? styles.arrowOn : styles.arrowOff}></i>
            </div>
          </div>
        </div>
    );
  }
};

export default Landing;