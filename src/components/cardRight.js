import React from 'react';
import "../styles/cards.css"

const CardRight = (props) => {
  return (
    <div className="cardRight-container">

      <div className="cardRight-leftPanel">
        <div className="cardRight-leftPanel-imageContainer">
          <div className="cardRight-leftPanel-heading">
            {props.heading}
          </div>
          <p className="cardRight-leftPanel-green-text">{props.greenScript}</p>
          <div className="cardRight-leftPanel-innerText">
            {props.paragraph}
          </div>
        </div>
      </div>

      <div className="cardRight-rightPanel">
        <div className="cardRight-innerPanel">
          <i className="fas fa-weight"></i>
          <p className="cardRight-rightPanel-innerText">{props.textOne}</p>
        </div>
        <div className="cardRight-innerPanel">
          <i className="fas fa-weight"></i>
          <p className="cardRight-rightPanel-innerText">{props.textTwo}</p>
        </div>
        <div className="cardRight-innerPanel">
          <i className="fas fa-weight"></i>
          <p className="cardRight-rightPanel-innerText">{props.textThree}</p>
        </div>
      </div>

    </div>
  )

}

export default CardRight;