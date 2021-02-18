import React from 'react';
import { Link } from 'react-router-dom'
import './WerkIT.scss';

import GroteTitel from '../Components/Titels/GroteTitel';
import RodeTitel from '../Components/Titels/RodeTitel';
import FlexContainer from '../Components/Containers/Flex/FlexContainer';
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
        <FlexContainer 
          link1='/LiefdeApp'
          imgUrl1={project1}
          link2='/PianoApp'
          imgUrl2={project2}
          link3='/SimonSpel'
          imgUrl3={project3}
        />
        <RodeTitel
          naam='WEBDESIGN'
        />
        <FlexContainer
          link1={site1}
          imgUrl1={site1}
          link2={site2}
          imgUrl2={site2}
          link3={site3}
          imgUrl3={site3}
        />
      </main>
      <Footer />
    </div>
  )
}

export default WerkIT;