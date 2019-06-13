import React, { Component } from 'react';
import logo from '../images/logoLarge.png'
import cfj from '../images/crossfit-journal.png'
import '../styles/footer.css'


class Footer extends Component {

  componentWillMount(){
    this.addStuff();
  }
  handleArrowClick = () => {
    document.querySelector('.landing-div').scrollIntoView({ 
      behavior: 'smooth' 
    });
  }



  addStuff = () => {
    var myScript = document.createElement('script')
    myScript.setAttribute('type', 'application/ld+json')
    myScript.appendChild(
      `
      <script type="application/ld+json">
        {
          "@context": "schema.org",
          "@type": "LocalBusiness",
          "name": "Isabella Fitness",
          "image": "https://isabellafitness.com/wp-content/uploads/2016/10/Isbella-Logo-fit-green-up.png",
          "@id": "",
          "url": "isabellafitness.com",
          "telephone": "732-532-3337",
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "242 Main Street #B-D",
            "addressLocality": "Sayreville",
            "addressRegion": "NJ",
            "postalCode": "08872",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 40.4684293,
            "longitude": -74.36053379999998
          },
          "openingHoursSpecification": [{
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday"
            ],
            "opens": "05:30",
            "closes": "21:00"
          },{
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Friday",
            "opens": "05:30",
            "closes": "19:00"
          },{
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "08:30",
            "closes": "12:00"
          },{
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Sunday",
            "opens": "08:00",
            "closes": "12:00"
          }],
          "sameAs": [
            "https://www.facebook.com/isabellafitness/",
            "https://www.instagram.com/isabella_fitness_/",
            "https://www.youtube.com/user/Bennyboi37",
            "https://twitter.com/IsabellaFitness"
          ]
        }`)
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