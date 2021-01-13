import React from 'react';

import Menu from '../Components/Menu/Menu';
import Titel from '../Components/Titel/Titel';
import FlexContainer from '../Components/FlexContainer/FlexContainer';
import Footer from '../Components/Footer/Footer';

import project1 from '../img/werk/projecten/liefde-app.png';
import project2 from '../img/werk/projecten/piano-app.png';
import project3 from '../img/werk/projecten/simon-spel.png';
import illustratie1 from '../img/werk/illustratief/illustratie1.jpg';
import illustratie2 from '../img/werk/illustratief/illustratie2.jpg';
import illustratie3 from '../img/werk/illustratief/illustratie3.jpg';

function Werk() {
  return (
    <div>
      <Menu />
      <main>
        <Titel
          naam='Mijn werk'
        />
        <FlexContainer 
          naam='JAVASCRIPT PROJECTEN'
          href1='#'
          imgUrl1={project1}
          href2='#'
          imgUrl2={project2}
          href3='#'
          imgUrl3={project3}
        />
        <FlexContainer 
          naam='ILLUSTRATIEF'
          href1='#'
          imgUrl1={illustratie1}
          href2='#'
          imgUrl2={illustratie2}
          href3='#'
          imgUrl3={illustratie3}
        />
      </main>
      <Footer />
    </div>
  )
}

export default Werk;