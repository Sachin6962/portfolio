import React from 'react';
import './Footer.scss';

//  huidig jaar berekenen
var huidigJaar = new Date().getFullYear();

function Footer() {
  return (
    <div className="footer">
      <div className="witte-lijn"></div>
      <p>Copyright &copy; <span id="jaar">{huidigJaar}</span></p>
    </div>
  )
}

export default Footer;