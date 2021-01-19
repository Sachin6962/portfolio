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
      <div className="piano">
        <div id="witAa" className="toets wit"></div>
        <div id="zwartAa" className="toets zwart"></div>
        <div id="witAb" className="toets wit"></div>
        <div id="zwartAb" className="toets zwart"></div>
        <div id="witAc" className="toets wit"></div>
        <div id="zwartAc" className="toets zwart"></div>
        <div id="witAd" className="toets wit"></div>
        <div id="witAe" className="toets wit"></div>
        <div id="zwartAd" className="toets zwart"></div>
        <div id="witAf" className="toets wit"></div>
        <div id="zwartAe" className="toets zwart"></div>
        <div id="witAg" className="toets wit"></div>

        <div id="witBa" className="toets wit reeks2"></div>
        <div id="zwartBa" className="toets zwart reeks2"></div>
        <div id="witBb" className="toets wit reeks2"></div>
        <div id="zwartBb" className="toets zwart reeks2"></div>
        <div id="witBc" className="toets wit reeks2"></div>
        <div id="zwartBc" className="toets zwart reeks2"></div>
        <div id="witBd" className="toets wit reeks2"></div>
        <div id="witBe" className="toets wit reeks2"></div>
        <div id="zwartBd" className="toets zwart reeks2"></div>
        <div id="witBf" className="toets wit reeks2"></div>
        <div id="zwartBe" className="toets zwart reeks2"></div>
        <div id="witBg" className="toets wit reeks2"></div>

        <div id="witCa" className="toets wit reeks3"></div>
        <div id="zwartCa" className="toets zwart reeks3"></div>
        <div id="witCb" className="toets wit reeks3"></div>
        <div id="zwartCb" className="toets zwart reeks3"></div>
        <div id="witCc" className="toets wit reeks3"></div>
        <div id="zwartCc" className="toets zwart reeks3"></div>
        <div id="witCd" className="toets wit reeks3"></div>
        <div id="witCe" className="toets wit reeks3"></div>
        <div id="zwartCd" className="toets zwart reeks3"></div>
        <div id="witCf" className="toets wit reeks3"></div>
        <div id="zwartCe" className="toets zwart reeks3"></div>
        <div id="witCg" className="toets wit reeks3"></div>
      </div>
    </div>
  )
}

export default PianoApp;