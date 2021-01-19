import React, { useState } from 'react';
import './InfoMenu.scss';

function toggleMenu(x) {
  var infoKnop = document.querySelector(".info-knop");
  var infoScherm = document.querySelector(".info-scherm");

  if (x === false) {
    infoKnop.classList.add('verhoogd1');
    infoScherm.classList.add('open');
    infoScherm.classList.add('verhoogd2');
    document.querySelector(".menu-knop").classList.add("verlaagd");
  }
  else {
    infoKnop.classList.remove('verhoogd1');
    infoScherm.classList.remove('open');
    infoScherm.classList.remove('verhoogd2');        
    document.querySelector(".menu-knop").classList.remove("verlaagd");
  }
}

function InfoMenu(props) {
  var [staat, setCount] = useState(false);
  
  function menuStaat() {
    if (staat === false) {
      toggleMenu(staat)
      setCount(true)
    }
    else {
      toggleMenu(staat)
      setCount(false)
    }
  }

  return (
    <div>
      <i className="fas fa-question-circle fa-2x info-knop" onClick={menuStaat}></i>

      <div className="info-scherm">
        <p>
          {props.beschrijving}
          <br/><br/>
          {props.tech}
        </p>
      </div>
    </div>
  )
}

export default InfoMenu;