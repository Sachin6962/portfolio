import React from 'react';
import './SimonSpel.scss';

import Menu from '../../../Components/Menu/Menu';
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
      herleid : false,
      level : 0
    }
  }

  checkAntwoord = (gebruikerInvoer) => {
    if (this.state.gebruikerPatroon[gebruikerInvoer] === this.state.gamePatroon[gebruikerInvoer]) {
      if (this.state.gebruikerPatroon.length === this.state.gamePatroon.length) {
        setTimeout(this.voegToeAanPatroon, 1500);
      }
    }
    else {
      this.speelGeluid('fout')
      document.querySelector("body").classList.add("game-over");
      document.querySelector("h1").innerHTML = "Game-over!";
      document.querySelector("h2").innerHTML = "Klik op het scherm om te herstarten";
      setTimeout(function() {
        document.querySelector("body").classList.remove("game-over");
      }, 200);
      this.opnieuw();
    }
  }
  
  beginGame = () => {
      if (this.state.herleid === true) {
        this.state.herleid = false;
      }
      else if (this.state.startGame === true) {
        this.state.sluitGame = false;
        this.state.startGame = false;
        document.querySelector("h2").innerHTML = "Het spel is begonnen..";
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
    this.state.gebruikerPatroon = [];
    var willekeurigNummer = Math.floor(Math.random() * 4);
    var nieuweKleur = this.state.kleuren[willekeurigNummer];
    this.state.gamePatroon.push(nieuweKleur);

    document.querySelector('#' + nieuweKleur).classList.add('gedrukt')
    setTimeout(() => {
      document.querySelector('#' + nieuweKleur).classList.remove('gedrukt')
    },100);

    this.state.level++;
    document.querySelector("h1").innerHTML = "Level " + this.state.level;

    this.speelGeluid(this.state.kleuren[willekeurigNummer]);
  }
  
  opnieuw = () => {
    this.state.gamePatroon = [];
    this.state.gebruikerPatroon = [];
    this.state.startGame = true;
    this.state.sluitGame = true;
    this.state.herleid = true;
    this.state.level = 0;
  }
  
  speelGeluid = (naam) => {
    var geluid = new Audio('simon-geluiden/' + naam + '.mp3')
    geluid.play();
  }
  
  klikAnimatie = (huidigeKleur) => {
    document.querySelector("#" + huidigeKleur).classList.add("gedrukt");
    setTimeout(function () {
      document.querySelector("#" + huidigeKleur).classList.remove("gedrukt");
    }, 100);
  }

  render() {
    return (
      <div>
        <InfoMenu 
          beschrijving=' The Simon Game is een spel waarbij de computer
          stap voor stap een patroon genereerd. Dit patroon moet u goed
          onthouden en nadoen door te klikken op de gekleurde knoppen in
          goede volgorde.'
          tech='Technologieën gebruikt: Puur Javascript, Sass & React'
        />
        <Menu />
          <main className='simon-spel' onClick={this.beginGame}>
            <GroteTitel
              naam='Simon spel'
            />
            <KleineTitel
              naam='Klik op het scherm om te beginnen'
            />
            <div>
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