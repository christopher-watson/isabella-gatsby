import React from 'react';
import logo from '../images/logoLarge.png'
import '../styles/footer.css'

const footer = () => {
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
        <img src={logo} alt="Isabella Fitness Logo" className="footer-logo"/>
      </div>
      <div className="footer-bottom">
        © Isabella Fitness {new Date().getFullYear()}        
      </div>
    </div>
  );
};

export default footer;