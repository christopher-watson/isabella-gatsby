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
          <div className="cardRight-leftPanel-green-text">{props.greenScript}</div>
          <div className="cardRight-leftPanel-innerText">
            {props.paragraph}
          </div>
        </div>
      </div>

      <div className="cardRight-rightPanel">
        <div className="cardRight-innerPanel">
          <p className="cardRight-rightPanel-innerText">{props.textOne}</p>
          <i className={props.iconOne}></i>
        </div>
        <div className="cardRight-innerPanel">
          <p className="cardRight-rightPanel-innerText">{props.textTwo}</p>
          <i className={props.iconTwo}></i>
        </div>
        <div className="cardRight-innerPanel">
          <p className="cardRight-rightPanel-innerText">{props.textThree}</p>
          <i className={props.iconThree}></i>
        </div>
      </div>

    </div>
  )

}

export default CardRight;