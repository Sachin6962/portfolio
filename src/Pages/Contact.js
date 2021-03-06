import React from 'react';
import './Contact.scss';

import GroteTitel from '../Components/Titels/GroteTitel';
import KleineTitel from '../Components/Titels/KleineTitel';

function Contact() {
  return (
    <main className='contact'>
      <GroteTitel
        naam='Contact'
      />
      <KleineTitel
        naam='U kunt me altijd bereiken via onderstaande gegevens.'
      />
      <div className="info-container">
        <div className="flex-item">
            <i className="far fa-envelope fa-3x"></i>
            <h3>setenergy6962@gmail.com</h3>
        </div>
        <div className="flex-item">
            <i className="fas fa-mobile-alt fa-3x"></i>
            <h3>06 44822803</h3>
        </div>
      </div>
    </main>
  )
}

export default Contact;