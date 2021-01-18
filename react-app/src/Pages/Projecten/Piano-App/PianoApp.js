import React from 'react';
import './PianoApp.scss';

import Menu from '../../../Components/Menu/Menu';
import InfoMenu from '../../../Components/Menu/InfoMenu';
import GroteTitel from '../../../Components/Titels/GroteTitel';
import KleineTitel from '../../../Components/Titels/KleineTitel';

class PianoApp extends React.Component {
  render() {
    return (
      <div>
      <InfoMenu />
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
}

export default PianoApp;