import React from 'react';
import { Link } from 'react-router-dom'
import './EindprojectMBO.scss';

import GroteTitel from '../Components/Titels/GroteTitel';
import RodeTitel from '../Components/Titels/RodeTitel';

import foto from '../img/grafisch-werk/eindproject1.0.jpg';
import logo from '../img/grafisch-werk/eindproject1.9.jpg';
import uiting1 from '../img/grafisch-werk/eindproject1.3.jpg';
import uiting2 from '../img/grafisch-werk/eindproject1.1.jpg';
import uiting3 from '../img/grafisch-werk/eindproject1.7.jpg';
import uiting4 from '../img/grafisch-werk/eindproject1.6.jpg';
import uiting5 from '../img/grafisch-werk/eindproject1.4.jpg';
import uiting6 from '../img/grafisch-werk/eindproject1.8.jpg';


function Container1(props) {
  return (
    <div className='container1'>
      <div className='flex-item1'>
        <RodeTitel
          naam={props.titel}
        />
        <p>{props.tekst}</p>
      </div>
      <div className='flex-item2'>
        <img src={props.src} alt=''/>
      </div>
    </div>
  )
}

function Container2(props) {
  return (
    <div className='container2'>
      <Link to={props.link} target="_blank">
        <img src={props.src} alt=''/>
      </Link>
    </div>
  )
}

function Container3(props) {
  return (
    <section className='container3'>
      <Link to={props.link1} target="_blank" className="flex-item">
        <img src={props.src1} alt=""/>
      </Link>
      <Link to={props.link2} target="_blank" className="flex-item">
        <img src={props.src2} alt=""/>
      </Link>
      <Link to={props.link3} target="_blank" className="flex-item">
        <img src={props.src3} alt=""/>
      </Link>
    </section>
  )
}

function EindprojectMBO() {
  return (
    <div className='eindproject-mbo-pagina'>
      <GroteTitel
        naam='MBO examen project'
      />
      <Container1
        titel='INTRODUCTIE'
        tekst="In het laatste jaar van mijn MBO opleiding bij het Grafisch
        Lyceum Rotterdam, heb ik een eindproject gemaakt. Hierbij was
        het de bedoeling om een complete 'corporate identity' te
        creëren. In andere woorden: Alle visuele elementen ontwerpen
        en realiseren welke nodig zijn in een bedrijf."
        src={foto}
      />
      <main>
        <RodeTitel
          naam='HET LOGO'
        />
        <Container2
          src={logo}
          link={logo}
        />
        <RodeTitel
          naam='MEDIA UITINGEN'
        />
        <Container3
          src1={uiting1}
          link1={uiting1}
          src2={uiting2}
          link2={uiting2}
          src3={uiting3}
          link3={uiting3}
        />
        <Container3
          src1={uiting4}
          link1={uiting4}
          src2={uiting5}
          link2={uiting5}
          src3={uiting6}
          link3={uiting6}
        />
      </main>
    </div>
  )
}

export default EindprojectMBO;