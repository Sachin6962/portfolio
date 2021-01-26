import React from 'react';
import './SimonSpel.scss';

import InfoMenu from '../../../Components/Menu/InfoMenu';
import GroteTitel from '../../../Components/Titels/GroteTitel';
import KleineTitel from '../../../Components/Titels/KleineTitel';

class SimonSpel extends React.Component {
  constructor() {
    super()
    this.state = {
      kleuren : ["rood", "blauw", "groen", "geel"],
      gamePatroon : [],
      gebruikerPatroon : [],
      startGame : true,
      sluitGame : true,
      level : 0,
      titel1 : 'Simon spel',
      titel2 : 'Klik op het scherm om te beginnen',
      class : 'simon-spel',
    }
  }

  spel = React.createRef();

  checkAntwoord = (gebruikerInvoer) => {
    if (this.state.gebruikerPatroon[gebruikerInvoer] === this.state.gamePatroon[gebruikerInvoer]) {
      if (this.state.gebruikerPatroon.length === this.state.gamePatroon.length) {
        setTimeout(this.voegToeAanPatroon, 1500);
      }
    }
    else {
      this.speelGeluid('fout')
      this.setState({
        titel1 : 'Game over!',
        titel2 : 'Klik op het scherm om te herstarten',
        class : 'simon-spel game-over'
      })
      setTimeout(() => {
        this.setState({class : 'simon-spel'})
      }, 200);
      this.opnieuw();
    }
  }
  
  beginGame = () => {
      if (this.state.startGame === true) {
        this.setState({
          titel2 : 'Het spel is begonnen..',
          sluitGame : false,
          startGame : false
        })
        this.voegToeAanPatroon();
      }
      else {
        return;
      }
  }
  
  gebruiker = (obj) => {
    if (this.state.sluitGame === false) {
      var gekozenKleur = obj.target.id;
      this.state.gebruikerPatroon.push(gekozenKleur);
  
      this.speelGeluid(gekozenKleur);
      this.klikAnimatie(gekozenKleur);
      this.checkAntwoord(this.state.gebruikerPatroon.length - 1);
    }
    else {
      return;
    }
  }
  
  voegToeAanPatroon = () => {
    this.setState({gebruikerPatroon : []})
    var willekeurigNummer = Math.floor(Math.random() * 4);
    var nieuweKleur = this.state.kleuren[willekeurigNummer];
    this.state.gamePatroon.push(nieuweKleur);

    this.spel.current.querySelector('#' + nieuweKleur).classList.add('gedrukt')
    setTimeout(() => {
      this.spel.current.querySelector('#' + nieuweKleur).classList.remove('gedrukt')
    },100);

    this.setState({level : this.state.level + 1}, () => {
      this.setState({titel1 : 'Level ' + this.state.level})
    })
    
    this.speelGeluid(this.state.kleuren[willekeurigNummer]);
  }
  
  opnieuw = () => {
    this.setState({
      gamePatroon : [],
      gebruikerPatroon : [],
      startGame : true,
      sluitGame : true,
      level : 0,
    })
  }
  
  speelGeluid = (naam) => {
    var geluid = new Audio('simon-geluiden/' + naam + '.mp3')
    geluid.play();
  }
  
  klikAnimatie = (huidigeKleur) => {
    this.spel.current.querySelector("#" + huidigeKleur).classList.add("gedrukt");
    setTimeout(() => {
      this.spel.current.querySelector("#" + huidigeKleur).classList.remove("gedrukt");
    }, 100);
  }

  render() {
    return (
      <div className={this.state.class}>
        <InfoMenu 
          beschrijving=' The Simon Game is een spel waarbij de computer
          stap voor stap een patroon genereerd. Dit patroon moet u goed
          onthouden en nadoen door te klikken op de gekleurde knoppen in
          goede volgorde.'
          tech='Technologieën gebruikt: Puur Javascript, Sass & React'
        />
          <main onClick={this.beginGame}>
            <GroteTitel
              naam={this.state.titel1}
            />
            <KleineTitel
              naam={this.state.titel2}
            />
            <div ref={this.spel}>
              <div>
                <div type="button" id="groen" className="knop groen" onClick={this.gebruiker}></div>
                <div type="button" id="rood" className="knop rood" onClick={this.gebruiker}></div>
              </div>
              <div>
                <div type="button" id="geel" className="knop geel" onClick={this.gebruiker}></div>
                <div type="button" id="blauw" className="knop blauw" onClick={this.gebruiker}></div>
              </div>
            </div>
          </main>
      </div>
    )
  }
}

export default SimonSpel;