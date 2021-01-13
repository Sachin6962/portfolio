import React from 'react';
import './Voorpagina.scss';

function Voorpagina() {
  return (
    <div className='achtergrond'>
      <main className='voorpagina'>
          <h1>Sachin <span className="tweede-kleur">Kumar</span></h1>
          <h2>Front-end Web Developer & Graphic Designer</h2>
          <div className="iconen">
              <a href="https://linkedin.com/in/sachin-kumar-003336190" target="_blank">
                  <i className="fab fa-linkedin fa-2x"></i>
              </a>
              <a href="https://github.com/Sachin6962/portfolio" target="_blank">
                  <i className="fab fa-github fa-2x"></i>
              </a>
          </div>
      </main>
    </div>
  )
}

export default Voorpagina;