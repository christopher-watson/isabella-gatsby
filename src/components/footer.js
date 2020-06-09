import React, { Component } from 'react';
import logo from '../images/logoLarge.png'
import cfj from '../images/crossfit-journal.png'
import '../styles/footer.css'


class Footer extends Component {

  componentWillMount(){
    // this.addStuff();
  }

  handleArrowClick = () => {
    document.querySelector('.landing-div').scrollIntoView({ 
      behavior: 'smooth' 
    });
  }

  render() {
    
    return (
      <div className='footer' id='footer'>
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
          {/* <a href="http://journal.crossfit.com/" target="_blank" rel="noopener noreferrer" >
            <img src={cfj} alt="The CrossFit Journal" className="footer-logo"/>
          </a> */}
          <a href="http://ifworkouts.com/" target="_blank" rel="noopener noreferrer" >
            <span id="WOD">WODs</span>
          </a>
        </div>
        <div className="footer-bottom">
          <div className="fbotLeft">
            © Isabella Fitness {new Date().getFullYear()}        
          </div>
          <div className="fbotRight">
            Built by <a href="http://christopherwatson.co" target="_blank" rel="noopener noreferrer" >@yowats0n</a>
          </div>
        </div>
      </div>

    );
  }
};

export default Footer;