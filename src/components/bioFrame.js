import React from 'react';
import '../styles/bio.css'

const BioFrame = (props) => {
  return (
    <div className="bio-frame">
      <div className="inner-bio">
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
//             <div className="cert-title">Certifications</div>
              <div>{props.cert1}</div>
              <div>{props.cert2}</div>
              <div>{props.cert3}</div>
//               <div>{props.cert4}</div>
//               <div>{props.cert5}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BioFrame;
