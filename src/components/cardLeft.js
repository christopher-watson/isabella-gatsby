import React from 'react';
import "../styles/cards.css"

const CardLeft = (props) => {
  return (
    <div className="cardLeft-container">
      
      <div className="cardLeft-leftPanel">
        <div className="cardLeft-innerPanel">
          <i className="fas fa-weight"></i>
          <p className="cardLeft-leftPanel-innerText">{props.textOne}</p>
        </div>
        <div className="cardLeft-innerPanel">
          <i className="fas fa-weight"></i>
          <p className="cardLeft-leftPanel-innerText">{props.textTwo}</p>
        </div>
        <div className="cardLeft-innerPanel">
          <i className="fas fa-weight"></i>
          <p className="cardLeft-leftPanel-innerText">{props.textThree}</p>
        </div>
      </div>

      <div className="cardLeft-rightPanel">
        <div className="cardLeft-rightPanel-heading">
          {props.heading}
        </div>
        <p className="cardLeft-rightPanel-green-text">{props.greenScript}</p>
        <div className="cardLeft-rightPanel-innerText">
          {props.paragraph}
        </div>
      </div>

    </div>
  )

}

export default CardLeft;