import React from 'react';
import './OverMij.scss';

import GroteTitel from '../Components/Titels/GroteTitel';
import RodeTitel from '../Components/Titels/RodeTitel';
import GridContainer2 from '../Components/Containers/Grid/GridContainer2';
import FlexContainer2 from '../Components/Containers/Flex/FlexContainer2';
import FlexContainer3 from '../Components/Containers/Flex/Flexcontainer3';
import Footer from '../Components/Footer/Footer';

import foto from '../img/foto1.3.jpg';
import foto2 from '../img/werkplek.jpg';
import foto3 from '../img/bananen.jpg';
import illustratie1 from '../img/icoon1.png';
import illustratie2 from '../img/icoon2.png';
import illustratie3 from '../img/icoon3.png';

//  mijn leeftijd berekenen
function berekenLeeftijd() {
  var huidigJaar = new Date().getFullYear();
  var jaar = huidigJaar - 1998;
  var huidigeMaand = new Date().getMonth();
  var huidigeDag = new Date().getDate();
  if (huidigeMaand >= 8) {
    if (huidigeDag >= 16) {
      return jaar + 1;
    }
  }
  else {
    return jaar;
  }
}

function OverMij() {
  return (
    <div className='over-mij'>
        <main>
          <GroteTitel 
            naam='Over mij'
          />
          <div className="intro">
            <img src={foto} alt="foto" className="item1"/>
            <div className="item2">
              <h2><span className="tweede-kleur spacing">INTRODUCTIE</span></h2>
              <p>Mijn naam is Sachin Kumar, ik ben {berekenLeeftijd()} jaar oud en woon ik Schiedam. 
              Ik ben afgestudeerd als Front-end Web Developer en heb al de diploma Graphic Design op 
              zak. Al sinds mijn jeugd heb ik een groot gevoel voor creativiteit en nauwkeurigheid. 
              Met veel enthousiasme pas ik deze eigenschappen toe in de IT-wereld.</p>
            </div>
          </div>
        </main>
        <div className='schuine-container'>
          <div className='content'>
            <RodeTitel 
              naam='VAARDIGHEDEN'
            />
            <GridContainer2 
              icoon1='fab fa-react fa-3x'
              text1='React.js'

              icoon2='fab fa-sass fa-3x'
              text2='Sass'

              icoon3='fab fa-js fa-3x'
              text3='Javascript'

              icoon4='fab fa-git-alt fa-3x'
              text4='Git & Github'

              icoon5='fas fa-camera-retro fa-3x'
              text5='Adobe Photoshop'

              icoon6='fas fa-images fa-3x'
              text6='Adobe Illustrator'

              icoon7='fab fa-css3-alt fa-3x'
              text7='CSS3'

              icoon8='fab fa-html5 fa-3x'
              text8='HTML5'
            />
            <RodeTitel 
              naam='WERKERVARING'
            />
            <FlexContainer2
              imgUrl={foto2}
              titel='Graphic Designer (stagaire)'
              info='2017-2018, bij Gravilux'
              uitleg="Als Graphic Designer was ik verantwoordelijk met het maken en realiseren 
              van diverse media-uitingen. Voorbeelden hiervan zijn onder andere drukwerk 
              (posters en flyers), huisstijl elementen (logo's, visitekaartjes) en het ontwerpen 
              van websites. Hierbij gebruikte ik de design-software van Adobe: Photoshop en 
              Illustrator."
            />
            <FlexContainer2
              imgUrl={foto3}
              titel='Vulploegmedewerker'
              info=' 2015-2017, bij Albert Heijn '
              uitleg=" Als vulploegmedewerker voerde ik taken uit als het lossen / laden / vullen 
              van producten en het schoonhouden van de winkel. Werken bij de AH was een simpele 
              (maar leerzame) bijbaan tijdens mijn tienerjaren."
            />
          </div>
        </div>
        <div className='persoonlijk'>
          <RodeTitel 
            naam='PERSOONLIJK'
          />
          <FlexContainer3
          imgUrl1={illustratie1}
          titel1='Rustig'
          info1='Van nature ben ik altijd al een rustig en kalm persoon geweest. Ik raak niet snel
          geïrriteerd aan negatieve omstandigheden en denk altijd helder na bij belangrijke keuzes.'
          
          imgUrl2={illustratie2}
          titel2='Nauwkeurig'
          info2='Ik streef ernaar om altijd zo precies en nauwkeurig mogelijk te zijn in wat ik doe.
          Als er een pen scheef staat op het bureau, dan fix ik dat. Als de CSS code niet efficiënt
          werkt, dan fix ik dat.'

          imgUrl3={illustratie3}
          titel3='Leergierig'
          info3='Open staan voor nieuwe ideeën is een goede eigenschap. Ik zal er geen probleem mee
          hebben om nieuwe technologieën te leren om mijn workflow te verbeteren.'
          />
        </div>
        <Footer />
    </div>
  )
}

export default OverMij;