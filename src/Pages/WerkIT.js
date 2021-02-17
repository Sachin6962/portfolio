import React from 'react';
import './WerkIT.scss';

import GroteTitel from '../Components/Titels/GroteTitel';
import RodeTitel from '../Components/Titels/RodeTitel';
import FlexContainer from '../Components/Containers/Flex/FlexContainer';
import Footer from '../Components/Footer/Footer';

import project1 from '../img/werk/projecten/liefde-app.png';
import project2 from '../img/werk/projecten/piano-app.png';
import project3 from '../img/werk/projecten/simon-spel.png';
import site1 from '../img/werk/webdesign/sport.jpg';
import site2 from '../img/werk/webdesign/by-dennis.jpg';
import site3 from '../img/werk/webdesign/sportinstituut.jpg';


function WerkIT() {
  return (
    <div className='werk-pagina'>
      <main>
        <GroteTitel
          naam='IT werk'
        />
        <RodeTitel
          naam='JAVASCRIPT PROJECTEN'
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