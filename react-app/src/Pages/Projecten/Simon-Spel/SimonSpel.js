import React from 'react';
import $ from 'jquery'
import './SimonSpel.scss';

import Menu from '../../../Components/Menu/Menu';
import InfoMenu from '../../../Components/Menu/InfoMenu';
import GroteTitel from '../../../Components/Titels/GroteTitel';
import KleineTitel from '../../../Components/Titels/KleineTitel';

// var kleuren = ["rood", "blauw", "groen", "geel"];
// var gamePatroon = [];
// var gebruikerPatroon = [];
// var startGame = true;
// var sluitGame = true;
// var herleid = false;
// var level = 0;

// //  alle geluiden
// var geluid1 = new Audio("geluiden/rood.mp3");
// var geluid2 = new Audio("geluiden/blauw.mp3");
// var geluid3 = new Audio("geluiden/geel.mp3");
// var geluid4 = new Audio("geluiden/groen.mp3");
// var geluid5 = new Audio("geluiden/fout.mp3");

// //  checkt invoer van gebruiker
// function checkAntwoord(gebruikerInvoer) {
//     if (gebruikerPatroon[gebruikerInvoer] === gamePatroon[gebruikerInvoer]) {
//         if (gebruikerPatroon.length === gamePatroon.length) {
//             setTimeout(voegToeAanPatroon, 1500);
//         }
//     }
//     else {
//         geluid5.play();
//         $("body").addClass("game-over");
//         $("h1").text("Game-over!");
//         $("h2").text("Klik op het scherm om te herstarten");
//         setTimeout(function() {
//             $("body").removeClass("game-over");
//         }, 200);
//         opnieuw();
//     }
// }

// $("main").click(function() {
//     if (herleid === true) {
//         herleid = false;
//     }
//     else if (startGame === true) {
//         sluitGame = false;
//         startGame = false;
//         $("h2").text("Het spel is begonnen..");
//         voegToeAanPatroon();
//     }
//     else {
//         return;
//     }
// });

// //  pusht gekozen kleur (door gebruiker) naar array
// $(".knop").click(function () {
//     if (sluitGame === false) {
//         var gekozenKleur = this.id;
//         gebruikerPatroon.push(gekozenKleur);
    
//         geluid(gekozenKleur);
//         klikAnimatie(gekozenKleur);
//         checkAntwoord(gebruikerPatroon.length - 1);
//     }
//     else {
//         return;
//     }
// });

// //  genereert willekeurige kleuren en stopt ze in array
// function voegToeAanPatroon() {
//     gebruikerPatroon = [];
//     var willekeurigNummer = Math.floor(Math.random() * 4);
//     var nieuweKleur = kleuren[willekeurigNummer];
//     gamePatroon.push(nieuweKleur);

//     $("#" + nieuweKleur).fadeOut(100).fadeIn(100);
//     level++;
//     $("h1").text("Level " + level);

//     geluid(kleuren[willekeurigNummer]);
// }

// //  reset alle variabelen
// function opnieuw() {
//     gamePatroon = [];
//     gebruikerPatroon = [];
//     startGame = true;
//     sluitGame = true;
//     herleid = true;
//     level = 0;
// }

// //  bepaald welk geluid wordt afgespeeld na klikken op knop
// function geluid(naam) {
//     switch (naam) {
//         case "rood":
//             geluid1.play();
//             break;
//         case "blauw":
//             geluid2.play();
//             break;
//         case "geel":
//             geluid3.play();
//             break;
//         case "groen":
//             geluid4.play();
//             break;
//         default:
//             break;
//     }
// }

// //  animatie op knop tijdens klikken
// function klikAnimatie(huidigeKleur) {
//     $("#" + huidigeKleur).addClass("gedrukt");
//     setTimeout(function () {
//         $("#" + huidigeKleur).removeClass("gedrukt");
//     }, 100);
// }

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
                <div type="button" id="groen" className="knop groen"></div>
                <div type="button" id="rood" className="knop rood"></div>
              </div>
              <div>
                <div type="button" id="geel" className="knop geel"></div>
                <div type="button" id="blauw" className="knop blauw"></div>
              </div>
            </div>
          </main>
      </div>
    )
  }
}

export default SimonSpel;