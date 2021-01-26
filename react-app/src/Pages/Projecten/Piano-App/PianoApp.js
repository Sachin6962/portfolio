import React from 'react';
import './PianoApp.scss';

import InfoMenu from '../../../Components/Menu/InfoMenu';
import GroteTitel from '../../../Components/Titels/GroteTitel';
import KleineTitel from '../../../Components/Titels/KleineTitel';

class PianoApp extends React.Component {
  piano = React.createRef();

  toetsAnimatie = (id) => {
    this.piano.current.querySelector('#' + id).classList.add('rood')
    setTimeout(() => {
      this.piano.current.querySelector('#' + id).classList.remove('rood')
    },100);
  }

  speelAf = (obj) => {
    var id = obj.target.id
    var geluid = new Audio('piano-geluiden/' + id + '.mp3')
    geluid.play()

    this.toetsAnimatie(id)
  }

  render() {
    return (
      <div className='piano-app'>
        <InfoMenu 
          beschrijving='Een piano app probeerd een fysieke piano digitaal te
          nabootsen. U kunt klikken op diverse toetsen om een liedje te spelen.'
          tech='Technologieën gebruikt: Puur Javascript, Sass & React'
        />
        <main>
          <GroteTitel
            naam='Online piano'
          />
          <KleineTitel
            naam='Speel gerust uw favoriete liedjes'
          />
        </main>
        <div className="piano" ref={this.piano}>
          <div id="witAa" className="toets wit" onClick={this.speelAf}></div>
          <div id="zwartAa" className="toets zwart" onClick={this.speelAf}></div>
          <div id="witAb" className="toets wit" onClick={this.speelAf}></div>
          <div id="zwartAb" className="toets zwart" onClick={this.speelAf}></div>
          <div id="witAc" className="toets wit" onClick={this.speelAf}></div>
          <div id="zwartAc" className="toets zwart" onClick={this.speelAf}></div>
          <div id="witAd" className="toets wit" onClick={this.speelAf}></div>
          <div id="witAe" className="toets wit" onClick={this.speelAf}></div>
          <div id="zwartAd" className="toets zwart" onClick={this.speelAf}></div>
          <div id="witAf" className="toets wit" onClick={this.speelAf}></div>
          <div id="zwartAe" className="toets zwart" onClick={this.speelAf}></div>
          <div id="witAg" className="toets wit" onClick={this.speelAf}></div>
  
          <div id="witBa" className="toets wit reeks2" onClick={this.speelAf}></div>
          <div id="zwartBa" className="toets zwart reeks2" onClick={this.speelAf}></div>
          <div id="witBb" className="toets wit reeks2" onClick={this.speelAf}></div>
          <div id="zwartBb" className="toets zwart reeks2" onClick={this.speelAf}></div>
          <div id="witBc" className="toets wit reeks2" onClick={this.speelAf}></div>
          <div id="zwartBc" className="toets zwart reeks2" onClick={this.speelAf}></div>
          <div id="witBd" className="toets wit reeks2" onClick={this.speelAf}></div>
          <div id="witBe" className="toets wit reeks2" onClick={this.speelAf}></div>
          <div id="zwartBd" className="toets zwart reeks2" onClick={this.speelAf}></div>
          <div id="witBf" className="toets wit reeks2" onClick={this.speelAf}></div>
          <div id="zwartBe" className="toets zwart reeks2" onClick={this.speelAf}></div>
          <div id="witBg" className="toets wit reeks2" onClick={this.speelAf}></div>
  
          <div id="witCa" className="toets wit reeks3" onClick={this.speelAf}></div>
          <div id="zwartCa" className="toets zwart reeks3" onClick={this.speelAf}></div>
          <div id="witCb" className="toets wit reeks3" onClick={this.speelAf}></div>
          <div id="zwartCb" className="toets zwart reeks3" onClick={this.speelAf}></div>
          <div id="witCc" className="toets wit reeks3" onClick={this.speelAf}></div>
          <div id="zwartCc" className="toets zwart reeks3" onClick={this.speelAf}></div>
          <div id="witCd" className="toets wit reeks3" onClick={this.speelAf}></div>
          <div id="witCe" className="toets wit reeks3" onClick={this.speelAf}></div>
          <div id="zwartCd" className="toets zwart reeks3" onClick={this.speelAf}></div>
          <div id="witCf" className="toets wit reeks3" onClick={this.speelAf}></div>
          <div id="zwartCe" className="toets zwart reeks3" onClick={this.speelAf}></div>
          <div id="witCg" className="toets wit reeks3" onClick={this.speelAf}></div>
        </div>
      </div>
    )
  }
}

export default PianoApp;