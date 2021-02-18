import React from 'react';
import { Link } from 'react-router-dom'
import './WerkGrafisch.scss';

import GroteTitel from '../Components/Titels/GroteTitel';
import RodeTitel from '../Components/Titels/RodeTitel';
import Footer from '../Components/Footer/Footer';

import eindproject from '../img/grafisch-werk/eindopdracht1.jpg';
import illustratie1 from '../img/grafisch-werk/illustratie1.jpg';
import illustratie2 from '../img/grafisch-werk/illustratie2.jpg';
import illustratie3 from '../img/grafisch-werk/illustratie3.jpg';
import logo1 from '../img/grafisch-werk/logo1.jpg';
import logo2 from '../img/grafisch-werk/logo2.jpg';
import logo3 from '../img/grafisch-werk/logo3.jpg';
import logo4 from '../img/grafisch-werk/logo4.jpg';
import logo5 from '../img/grafisch-werk/logo5.jpg';
import logo6 from '../img/grafisch-werk/logo6.jpg';
import ps1 from '../img/grafisch-werk/ps1.1.jpg';
import ps2 from '../img/grafisch-werk/ps1.2.jpg';
import ps3 from '../img/grafisch-werk/ps2.1.jpg';
import ps4 from '../img/grafisch-werk/ps2.2.jpg';
import drukwerk1 from '../img/grafisch-werk/haring1.jpg';
import drukwerk2 from '../img/grafisch-werk/haring2.jpg';
import drukwerk3 from '../img/grafisch-werk/pvl-visitekaartjes.jpg';
import drukwerk4 from '../img/grafisch-werk/haring-folder.jpg';
import drukwerk5 from '../img/grafisch-werk/aci-visitekaartje.jpg';
import drukwerk6 from '../img/grafisch-werk/trouwkaart.jpg';


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

function Container3(props) {
  return (
    <section className="container3">
      <Link to={props.link1} target="_blank" className="grid-item">
        <img src={props.src1} alt="logo"/>
      </Link>
      <Link to={props.link3} target="_blank" className="grid-item">
        <img src={props.src3} alt="logo"/>
      </Link>
      <Link to={props.link2} target="_blank" className="grid-item">
        <img src={props.src2} alt="logo"/>
      </Link>
      <Link to={props.link4} target="_blank" className="grid-item">
        <img src={props.src4} alt="logo"/>
      </Link>
      <Link to={props.link5} target="_blank" className="grid-item">
        <img src={props.src5} alt="logo"/>
      </Link>
      <Link to={props.link6} target="_blank" className="grid-item">
        <img src={props.src6} alt="logo"/>
      </Link>
    </section>
  )
}

function Container4(props) {
  return (
    <section className='container4'>
      <Link to={props.link1} target="_blank" className="flex-item">
        <img src={props.src1} alt=""/>
      </Link>
      <i class="fas fa-arrow-right fa-3x flex-item pijl1"></i>
      <i class="fas fa-arrow-down fa-3x flex-item pijl2"></i>
      <Link to={props.link2} target="_blank" className="flex-item">
        <img src={props.src2} alt=""/>
      </Link>
    </section>
  )
}


function WerkGrafisch() {
  return (
    <div className='grafisch-werk-pagina'>
      <main>
        <GroteTitel
          naam='Grafisch werk'
        />
        <RodeTitel
          naam='MBO EINDPROJECT'
        />
        <Container1
          link={eindproject}
          src={eindproject}
        />
        <RodeTitel
          naam='ILLUSTRATIEF'
        />
        <Container2 
          src1={illustratie1}
          link1={illustratie1}
          src2={illustratie3}
          link2={illustratie3}
          src3={illustratie2}
          link3={illustratie2}
        />
        <RodeTitel
          naam='LOGO DESIGN'
        />
        <Container3
          link1={logo1}
          src1={logo1}
          link2={logo5}
          src2={logo5}
          link3={logo3}
          src3={logo3}
          link4={logo4}
          src4={logo4}
          link5={logo2}
          src5={logo2}
          link6={logo6}
          src6={logo6}
        />
        <RodeTitel
          naam='PHOTOSHOP'
        />
        <Container4
          link1={ps1}
          src1={ps1}
          link2={ps2}
          src2={ps2}
        />
        <Container4
          link1={ps3}
          src1={ps3}
          link2={ps4}
          src2={ps4}
        />
        <RodeTitel
          naam='DRUKWERK'
        />
        <Container2 
          src1={drukwerk1}
          link1={drukwerk1}
          src2={drukwerk2}
          link2={drukwerk2}
          src3={drukwerk3}
          link3={drukwerk3}
        />
        <Container2 
          src1={drukwerk4}
          link1={drukwerk4}
          src2={drukwerk5}
          link2={drukwerk5}
          src3={drukwerk6}
          link3={drukwerk6}
        />
      </main>
      <Footer />
    </div>
  )
}

export default WerkGrafisch;