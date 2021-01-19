import React from 'react';
import './LiefdeApp.scss';

import Menu from '../../../Components/Menu/Menu';
import InfoMenu from '../../../Components/Menu/InfoMenu';
import GroteTitel from '../../../Components/Titels/GroteTitel';
import KleineTitel from '../../../Components/Titels/KleineTitel';

function bereken() {
  var willekeurigNummer;
  var naam1;
  var naam2;

  naam1 = document.querySelector(".invoer1").value;
  naam2 = document.querySelector(".invoer2").value;

  if (naam1 == "" || naam2 == "") {
      document.querySelector("h2").innerHTML = "Voer a.u.b. eerst 2 namen in.";
  }
  else {
    willekeurigNummer = Math.floor(Math.random() * 100 + 1);

    document.querySelector("h2").innerHTML = "Aan het berekenen.. Een klein momentje..";

    setTimeout(() => {
      document.querySelector("h2").innerHTML = conclusie();
      document.querySelector("h1").innerHTML = willekeurigNummer + "%";
      resetWaarden();
    }, 3000);

    function conclusie() {    
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

    function resetWaarden() {
      document.querySelector(".invoer1").value = "";
      document.querySelector(".invoer2").value = "";
    }
  }
}

function LiefdeApp() {
  return (
    <div>
    <InfoMenu 
      beschrijving='Een zogeheten Love Calculator is een komische app die de 
      liefde tussen twee personen berekent, uitgedrukt in een percentage. Maakt 
      u zich zich geen zorgen, dit nummer is willekeurig gegenereerd.'
      tech='Technologieën gebruikt: Puur Javascript, Sass & React'
      />
    <Menu />
      <main className='liefde-app'>
        <GroteTitel
          naam='Liefde app'
        />
        <KleineTitel
          naam='Druk op het hart om de liefde tussen 2 personen te berekenen'
        />
        <i className="fas fa-heart fa-10x" onClick={bereken}></i>

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

export default LiefdeApp;