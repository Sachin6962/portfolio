import React from 'react';
import { NavLink } from 'react-router-dom'
import './Werk.scss';

import design from '../img/design.jpg';
import code from '../img/code.jpg';

import GroteTitel from '../Components/Titels/GroteTitel';
import KleineTitel from '../Components/Titels/KleineTitel';

function Werk() {
  return (
    <div className='werk-keuze-pagina'>
      <NavLink to='/WerkGrafisch' target="_blank" className='blok1 blok'>
        <img src={design} alt=''/>
        <div className='text-container'>
          <GroteTitel
            naam='Grafisch werk'
          />
          <KleineTitel
            naam='Drukwerk, huisstijl, illustratief.'
          />
        </div>
      </NavLink>
      <NavLink to='/WerkIT' target="_blank" className='blok2 blok'>
      <img src={code} alt=''/>
        <div className='text-container'>
        <GroteTitel
            naam='IT werk'
          />
          <KleineTitel
            naam='Websites, applicaties, webdesign.'
          />
        </div>
      </NavLink>
    </div>
  )
}

export default Werk;