import React from 'react';

import Menu from '../Components/Menu/Menu';
import GroteTitel from '../Components/Titels/GroteTitel';
import KleineTitel from '../Components/Titels/KleineTitel';
import FlexContainer from '../Components/FlexContainer/FlexContainer';
import Footer from '../Components/Footer/Footer';

import project1 from '../img/werk/projecten/liefde-app.png';
import project2 from '../img/werk/projecten/piano-app.png';
import project3 from '../img/werk/projecten/simon-spel.png';
import illustratie1 from '../img/werk/illustratief/illustratie1.jpg';
import illustratie2 from '../img/werk/illustratief/illustratie2.jpg';
import illustratie3 from '../img/werk/illustratief/illustratie3.jpg';

class Werk extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <main>
          <GroteTitel
            naam='Mijn werk'
          />
          <KleineTitel
            naam='JAVASCRIPT PROJECTEN'
            classes='tweede-kleur spacing'
          />
          <FlexContainer 
            href1='#'
            imgUrl1={project1}
            href2='#'
            imgUrl2={project2}
            href3='#'
            imgUrl3={project3}
          />
          <KleineTitel
            naam='ILLUSTRATIEF'
            classes='tweede-kleur spacing'
          />
          <FlexContainer 
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
}

export default Werk;