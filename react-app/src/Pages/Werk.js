import React from 'react';
import './Werk.scss';

import GroteTitel from '../Components/Titels/GroteTitel';
import RodeTitel from '../Components/Titels/RodeTitel';
import FlexContainer from '../Components/Containers/Flex/FlexContainer';
import GridContainer from '../Components/Containers/Grid/GridContainer';
import Footer from '../Components/Footer/Footer';

import project1 from '../img/werk/projecten/liefde-app.png';
import project2 from '../img/werk/projecten/piano-app.png';
import project3 from '../img/werk/projecten/simon-spel.png';
import illustratie1 from '../img/werk/illustratief/illustratie1.jpg';
import illustratie2 from '../img/werk/illustratief/illustratie2.jpg';
import illustratie3 from '../img/werk/illustratief/illustratie3.jpg';
import logo1 from '../img/werk/logo/logo1.jpg';
import logo2 from '../img/werk/logo/logo2.jpg';
import logo3 from '../img/werk/logo/logo3.jpg';
import logo4 from '../img/werk/logo/logo4.jpg';
import logo5 from '../img/werk/logo/logo5.jpg';
import logo6 from '../img/werk/logo/logo6.jpg';
import site1 from '../img/werk/webdesign/by-dennis.jpg';
import site2 from '../img/werk/webdesign/rotgans.png';
import site3 from '../img/werk/webdesign/sportinstituut.jpg';


function Werk() {
  return (
    <div className='werk-pagina'>
      <main>
        <GroteTitel
          naam='Mijn werk'
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
          naam='ILLUSTRATIEF'
        />
        <FlexContainer 
          imgUrl1={illustratie1}
          link1={illustratie1}
          imgUrl2={illustratie2}
          link2={illustratie2}
          imgUrl3={illustratie3}
          link3={illustratie3}
        />
        <RodeTitel
          naam='LOGO DESIGN'
        />
        <GridContainer 
          link1={logo1}
          imgUrl1={logo1}
          link2={logo2}
          imgUrl2={logo2}
          link3={logo3}
          imgUrl3={logo3}
          link4={logo4}
          imgUrl4={logo4}
          link5={logo5}
          imgUrl5={logo5}
          link6={logo6}
          imgUrl6={logo6}
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

export default Werk;