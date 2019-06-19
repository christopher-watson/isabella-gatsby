import React from 'react';
import "../styles/cards.css"

const CardLeft = (props) => {
  return (
    <div className="cardLeft-container">
      
      <div className="cardLeft-leftPanel">
        <div className="cardLeft-innerPanel">
          <i className={props.iconOne}></i>
          <p className="cardLeft-leftPanel-innerText">{props.textOne}</p>
        </div>
        <div className="cardLeft-innerPanel">
          <i className={props.iconTwo}></i>
          <p className="cardLeft-leftPanel-innerText">{props.textTwo}</p>
        </div>
        <div className="cardLeft-innerPanel">
          <i className={props.iconThree}></i>
          <p className="cardLeft-leftPanel-innerText">{props.textThree}</p>
        </div>
      </div>

      <div className="cardLeft-rightPanel">
        <div className="cardLeft-rightPanel-imageContainer">
          <div className="cardLeft-rightPanel-heading">
            {props.heading}
          </div>
          <div className="cardLeft-rightPanel-green-text">{props.greenScript}</div>
          <div className="cardLeft-rightPanel-innerText">
            {props.paragraph}
          </div>
        </div>
      </div>

    </div>
  )

}

export default CardLeft;