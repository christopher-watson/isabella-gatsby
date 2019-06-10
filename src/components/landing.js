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
  }

}

class Landing extends Component {
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
        </div>
    );
  }
};

export default Landing;