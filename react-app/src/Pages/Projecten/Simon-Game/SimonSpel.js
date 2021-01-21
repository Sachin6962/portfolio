import React from 'react';
import './SimonSpel.scss';

import Menu from '../../../Components/Menu/Menu';
import InfoMenu from '../../../Components/Menu/InfoMenu';
import GroteTitel from '../../../Components/Titels/GroteTitel';
import KleineTitel from '../../../Components/Titels/KleineTitel';

class  SimonSpel extends React.Component {
  render() {
    return (
      <div>
        <InfoMenu 
          beschrijving=' The Simon Game is een spel waarbij de computer 
          stap voor stap een patroon genereerd. Dit patroon moet u goed 
          onthouden en nadoen door te klikken op de gekleurde knoppen in
          goede volgorde.'
          tech='Technologieën gebruikt: Puur Javascript, jQuery, Sass & React'
        />
        <Menu />
          <main className='simon-spel'>
            <GroteTitel
              naam='Simon spel'
            />
            <KleineTitel
              naam='Klik op het scherm om te beginnen'
            />
            <div>
              <div>
                <div type="button" id="groen" class="knop groen"></div>
                <div type="button" id="rood" class="knop rood"></div>
              </div>
              <div>
                <div type="button" id="geel" class="knop geel"></div>
                <div type="button" id="blauw" class="knop blauw"></div>
              </div>
            </div>
          </main>
      </div>
    )
  }
}

export default SimonSpel;