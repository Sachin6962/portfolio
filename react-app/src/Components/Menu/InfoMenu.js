import React from 'react';
import './InfoMenu.scss';

class InfoMenu extends React.Component {
  render() {
    return (
      <div>
        <i className="fas fa-question-circle fa-2x info-knop"></i>

        <div className="info-scherm">
          <p>
            Een zogeheten Love Calculator is een komische app die de liefde tussen
            twee personen berekent, uitgedrukt in een percentage. Maakt u zich zich
            geen zorgen, dit nummer is willekeurig gegenereerd.
            <br/><br/>
            Technologieën gebruikt: Puur Javascript & Sass.
          </p>
        </div>
      </div>
    )
  }
}

export default InfoMenu;

// function MenuText(props) {
//   return (
//     <p>
//       {props.beschrijving}
//       <br/><br/>
//       {props.tech}
//     </p>
//   )
// }