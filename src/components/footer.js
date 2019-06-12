import React, { Component } from 'react';
import logo from '../images/logoLarge.png'
import cfj from '../images/crossfit-journal.png'
import '../styles/footer.css'


class Footer extends Component {

  handleArrowClick = () => {
    document.querySelector('.landing-div').scrollIntoView({ 
      behavior: 'smooth' 
    });
  }


  render() {
    return (
      <div className='footer'>
        <div className="footer-top">
          {/* <ul>
            <li>Programs</li>
            <li>Daily Workout</li>
            <li>Schedule</li>
            <li>Pricing</li>
            <li>Team</li>
            <li>Location</li>
          </ul> */}
          <img src={logo} alt="Isabella Fitness Logo" className="footer-logo" onClick={this.handleArrowClick} style={{cursor: 'pointer'}}/>
          <a href="http://journal.crossfit.com/" target="_blank" rel="noopener noreferrer" >
            <img src={cfj} alt="The Crossfit Journal" className="footer-logo"/>
          </a>
        </div>
        <div className="footer-bottom">
          © Isabella Fitness {new Date().getFullYear()}        
        </div>
      </div>
    );
  }
};

export default Footer;