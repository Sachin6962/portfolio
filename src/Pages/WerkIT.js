import React from 'react';
import { Link } from 'react-router-dom'
import './WerkIT.scss';

import GroteTitel from '../Components/Titels/GroteTitel';
import RodeTitel from '../Components/Titels/RodeTitel';
import Footer from '../Components/Footer/Footer';

import test from '../img/it-werk/coming-soon.jpg';
import project1 from '../img/it-werk/liefde-app.png';
import project2 from '../img/it-werk/piano-app.png';
import project3 from '../img/it-werk/simon-spel.png';
import site1 from '../img/it-werk/sport.jpg';
import site2 from '../img/it-werk/by-dennis.jpg';
import site3 from '../img/it-werk/sportinstituut.jpg';


function Container1(props) {
  return (
    <section className='container1'>
      <Link to={props.link} target="_blank" className="flex-item">
        <img src={props.src} alt=""/>
      </Link>
    </section>
  )
}

function Container2(props) {
  return (
    <section className='container2'>
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

function WerkIT() {
  return (
    <div className='it-werk-pagina'>
      <main>
        <GroteTitel
          naam='IT werk'
        />
        <RodeTitel
          naam='WEBSITES'
        />
        <Container1
          link={test}
          src={test}
        />
        <RodeTitel
          naam='KLEINE PROJECTEN'
        />
        <Container2
          link1='/LiefdeApp'
          src1={project1}
          link2='/PianoApp'
          src2={project2}
          link3='/SimonSpel'
          src3={project3}
        />
        <RodeTitel
          naam='WEBDESIGN'
        />
        <Container2
          link1={site1}
          src1={site1}
          link2={site2}
          src2={site2}
          link3={site3}
          src3={site3}
        />
      </main>
      <Footer />
    </div>
  )
}

export default WerkIT;