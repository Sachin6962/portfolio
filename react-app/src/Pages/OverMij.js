import React from 'react';
import './OverMij.scss';

import Menu from '../Components/Menu/Menu';
import GroteTitel from '../Components/Titels/GroteTitel';
import RodeTitel from '../Components/Titels/RodeTitel';

import foto from '../img/foto1.3.jpg';

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

class OverMij extends React.Component {
  render() {
    return (
      <div>
        <Menu />
          <main className='xxxxxx'>
            <GroteTitel 
              naam='Over mij'
            />
            <div className="intro">
              <img src={foto} alt="foto" className="item1"/>
              <div class="item2">
                <h2><span class="tweede-kleur spacing">INTRODUCTIE</span></h2>
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
            </div>
          </div>
      </div>
    )
  }
}

export default OverMij;