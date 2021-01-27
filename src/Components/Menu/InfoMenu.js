import React from 'react';
import './InfoMenu.scss';

class InfoMenu extends React.Component {
  constructor() {
    super()
    this.state = {
      menuStaat : false,
      menuBody : ''
    }
  }
  
  toggleMenu = () => {
    if (this.state.menuStaat === false) {
      this.setState({
        menuStaat : true,
        menuBody : ' open'
      })
    }
    else {
      this.setState({
        menuStaat : false,
        menuBody : ''
      })
    }
  }

  render() {
    return (
      <div>
        <i className={`fas fa-question-circle fa-2x info-knop${this.state.menuBody}`} onClick={this.toggleMenu}></i>
  
        <div className={`info-scherm${this.state.menuBody}`}>
          <p>
            {this.props.beschrijving}
            <br/><br/>
            {this.props.tech}
          </p>
        </div>
      </div>
    )
  }
}

export default InfoMenu;