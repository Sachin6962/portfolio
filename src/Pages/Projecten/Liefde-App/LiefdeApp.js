import React from 'react';
import './LiefdeApp.scss';

import InfoMenu from '../../../Components/Menu/InfoMenu';
import GroteTitel from '../../../Components/Titels/GroteTitel';
import KleineTitel from '../../../Components/Titels/KleineTitel';

class LiefdeApp extends React.Component {
  constructor() {
    super()
    this.state = {
      titel1 : 'Liefde app',
      titel2 : 'Druk op het hart om de liefde tussen 2 personen te berekenen'
    }
  }

  input1 = React.createRef()
  input2 = React.createRef()

  bereken = () => {
    var willekeurigNummer;
    var naam1 = this.input1.current.value;
    var naam2 = this.input2.current.value;

    if (naam1 === "" || naam2 === "") {
      this.setState({titel2 : 'Voer a.u.b. eerst 2 namen in.'})
    }
    else {
      willekeurigNummer = Math.floor(Math.random() * 100 + 1);

      this.setState({titel2 : 'Aan het berekenen.. Een klein momentje..'})

      setTimeout(() => {
        this.setState({titel1 : willekeurigNummer + '%'})
        this.setState({titel2 : this.conclusie()})
        this.resetWaarden();
      }, 3000);

      this.conclusie = () => {
        if (willekeurigNummer < 20) {
          return naam1 + " en " + naam2 + " haten elkaar..";
        }
        else if (willekeurigNummer >= 20 && willekeurigNummer < 50) {
          return naam1 + " en " + naam2 + " hebben een slechte relatie.";
        }
        else if (willekeurigNummer >= 50 && willekeurigNummer < 80) {
          return naam1 + " en " + naam2 + " kunnen goed met elkaar opschieten";
        }
        else {
          return naam1 + " en " + naam2 + " houden enorm veel van elkaar.";
        }
      }

      this.resetWaarden = () => {
        this.input1.current.value = ''
        this.input2.current.value = ''
      }
    }
  }

  render() {
    return (
      <div className='liefde-app'>
        <InfoMenu 
          beschrijving='Een zogeheten Love Calculator is een komische app die de 
          liefde tussen twee personen berekent, uitgedrukt in een percentage. Maakt 
          u zich zich geen zorgen, dit nummer is willekeurig gegenereerd.'
          tech='Technologieën gebruikt: Puur Javascript, Sass & React'
          />
        <main>
          <GroteTitel
            naam={this.state.titel1}
          />
          <KleineTitel
            naam={this.state.titel2}
          />
          <i className="fas fa-heart fa-10x" onClick={this.bereken}></i>
  
          <div className="namen-container">
            <div>
              <input type="text" className="invoer1" ref={this.input1}/>
            </div>
            <div>
              <input type="text" className="invoer2" ref={this.input2}/>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default LiefdeApp;