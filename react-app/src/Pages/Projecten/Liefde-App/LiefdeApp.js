import React from 'react';
import './LiefdeApp.scss';

import Menu from '../../../Components/Menu/Menu';
import InfoMenu from '../../../Components/Menu/InfoMenu';
import GroteTitel from '../../../Components/Titels/GroteTitel';
import KleineTitel from '../../../Components/Titels/KleineTitel';

class LiefdeApp extends React.Component {
  render() {
    return (
      <div>
      <InfoMenu />
      <Menu />
        <main className='liefde-app'>
          <GroteTitel
            naam='Liefde app'
          />
          <KleineTitel
            naam='Druk op het hart om de liefde tussen 2 personen te berekenen'
          />
          <i className="fas fa-heart fa-10x"></i>
  
          <div className="namen-container">
            <div>
              <input type="text" className="invoer1"/>
            </div>
            <div>
              <input type="text" className="invoer2"/>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default LiefdeApp;