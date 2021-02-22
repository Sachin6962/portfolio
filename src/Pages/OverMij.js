import React from 'react';
import './OverMij.scss';

import GroteTitel from '../Components/Titels/GroteTitel';
import RodeTitel from '../Components/Titels/RodeTitel';
import Footer from '../Components/Footer/Footer';

import foto from '../img/foto1.3.jpg';
import foto2 from '../img/ontwerp.jpg';
import foto3 from '../img/bananen.jpg';
import foto4 from '../img/schoonmaak.jpg';
import illustratie1 from '../img/icoon1.png';
import illustratie2 from '../img/icoon2.png';
import illustratie3 from '../img/icoon3.png';

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


function Container1(props) {
  return (
    <div className="intro">
      <img src={props.src} alt="foto" className="item1"/>
      <div className="item2">
        <h2><span className="tweede-kleur spacing">{props.titel}</span></h2>
        <p>Mijn naam is Sachin Kumar, ik ben {berekenLeeftijd()} jaar oud en woon in Schiedam. 
        Ik ben afgestudeerd als Front-end Web Developer en heb al de diploma Graphic Design op 
        zak. Al sinds mijn jeugd heb ik een groot gevoel voor creativiteit en nauwkeurigheid. 
        Met veel enthousiasme pas ik deze eigenschappen toe in de IT-wereld.</p>
      </div>
    </div>
  )
}

function Container2(props) {
  return (
    <section>
      <div className="container2">
        <Container2Item icoon = {props.icoon1} text = {props.text1} />
        <Container2Item icoon = {props.icoon2} text = {props.text2} />
        <Container2Item icoon = {props.icoon3} text = {props.text3} />
        <Container2Item icoon = {props.icoon4} text = {props.text4} />
        <Container2Item icoon = {props.icoon5} text = {props.text5} />
        <Container2Item icoon = {props.icoon6} text = {props.text6} />
        <Container2Item icoon = {props.icoon7} text = {props.text7} />
        <Container2Item icoon = {props.icoon8} text = {props.text8} />
      </div>
    </section>
  )
}
function Container2Item(props) {
  return (
    <div className="grid-item">
      <i className={props.icoon}></i><br/>
      <span>{props.text}</span>
    </div>
  )
}

function Container3(props) {
  return (
    <section className='container3'>
      <div className="flex-item1">
        <img src={props.imgUrl} alt=''/>
      </div>
      <div className="flex-item2">
        <div>
          <h3>{props.titel}</h3>
          <p>{props.info}</p>
          <p>{props.uitleg}</p>
        </div>
      </div>
    </section>
  )
}

function Container4(props) {
  return (
    <div className="container4">
      <div className="flex-item">
        <img src={props.src1} alt=''/>
        <h3>{props.titel1}</h3>
        <p>{props.tekst1}</p>
      </div>
      <div className="flex-item">
        <img src={props.src2} alt=''/>
        <h3>{props.titel2}</h3>
        <p>{props.tekst2}</p>
      </div>
      <div className="flex-item">
        <img src={props.src3} alt=''/>
        <h3>{props.titel3}</h3>
        <p>{props.tekst3}</p>
      </div>
    </div>
  )
}


function OverMij() {
  return (
    <div className='over-mij-pagina'>
      <main>
        <GroteTitel 
          naam='Over mij'
        />
        <Container1
          src={foto}
          titel='INTRODUCTIE'
        />
      </main>
      <div className='schuine-container'>
        <div className='content'>
          <RodeTitel 
            naam='VAARDIGHEDEN'
          />
          <Container2 
            icoon1='fab fa-react fa-3x'
            text1='React.js'

            icoon2='fab fa-sass fa-3x'
            text2='Sass'

            icoon3='fab fa-js fa-3x'
            text3='Javascript'

            icoon4='fab fa-git-alt fa-3x'
            text4='Git, Github'

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
          <Container3
            imgUrl={foto4}
            titel='Interieur verzorger Schoonmaak'
            info='2020-heden, bij Suez'
            uitleg="Als Interieur verzorger houd ik me bezig met het schoonmaken
            van kantoorpanden. Denk hierbij aan prullenbakken legen, sanitaire 
            schoonmaak, vloeren reinigen en overige schoonmaak werkzaamheden."
          />
          <Container3
            imgUrl={foto2}
            titel='Graphic Designer (stagaire)'
            info='2017-2018, bij Gravilux'
            uitleg="Als Graphic Designer was ik verantwoordelijk met het maken en realiseren 
            van diverse media-uitingen. Voorbeelden hiervan zijn onder andere drukwerk 
            (posters en flyers), huisstijl elementen (logo's, visitekaartjes) en het ontwerpen 
            van websites. Hierbij gebruikte ik de design-software van Adobe: Photoshop en 
            Illustrator."
          />
          <Container3
            imgUrl={foto3}
            titel='Vulploeg medewerker'
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
        <Container4
        src1={illustratie1}
        titel1='Rustig'
        tekst1='Van nature ben ik altijd al een rustig en kalm persoon geweest. Ik raak niet snel
        geïrriteerd aan negatieve omstandigheden en denk altijd helder na bij belangrijke keuzes.'
        
        src2={illustratie2}
        titel2='Nauwkeurig'
        tekst2='Ik streef ernaar om altijd zo precies en nauwkeurig mogelijk te zijn in wat ik doe.
        Als er een pen scheef staat op het bureau, dan verhelp ik dat. Als de CSS code niet efficiënt
        werkt, dan verhelp ik dat.'

        src3={illustratie3}
        titel3='Leergierig'
        tekst3='De IT wereld is enorm groot, dus open staan voor nieuwe ideeën is een goede eigenschap.
        Ik vind het leuk om nieuwe technologieën te leren die mijn workflow te verbeteren.'
        />
      </div>
      <Footer />
    </div>
  )
}

export default OverMij;