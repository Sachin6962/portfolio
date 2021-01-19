import React from 'react';
import './PianoApp.scss';

import Menu from '../../../Components/Menu/Menu';
import InfoMenu from '../../../Components/Menu/InfoMenu';
import GroteTitel from '../../../Components/Titels/GroteTitel';
import KleineTitel from '../../../Components/Titels/KleineTitel';

function PianoApp() {
  return (
    <div>
    <InfoMenu 
      beschrijving='Een piano app probeerd een fysieke piano digitaal 
      te nabootsen. U kunt klikken op diverse toetsen om een liedje te 
      spelen.'
      tech='Technologieën gebruikt: Puur Javascript, Sass & React'
    />
    <Menu />
      <main className='piano-app'>
        <GroteTitel
          naam='Online piano'
        />
        <KleineTitel
          naam='Speel gerust uw favoriete liedjes'
        />
      </main>
    </div>
  )
}

export default PianoApp;