import React from 'react';
import '../styles/bio.css'

const BioFrame = (props) => {
  return (
    <div className="inner-bio bio">
      <div className="bio-pic">
        <img className="bio-img" src={props.img} alt={props.name}/>
      </div>
      <div className="bio-text">
        <div className="bio-name">
          {props.name}
        </div>
        <div className="bio-title">
          {props.title} 
        </div>
        <div className="bio-inner-text">
          {props.innerText}
        </div>
        <div className="bio-certs">
          <div className="cert-title">Certifications</div>
          <ul>
            <li>{props.cert1}</li>
            <li>{props.cert2}</li>
            <li>{props.cert3}</li>
            <li>{props.cert4}</li>
            <li>{props.cert5}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default BioFrame;