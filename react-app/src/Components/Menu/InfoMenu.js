import React from 'react';
import './InfoMenu.scss';

class InfoMenu extends React.Component {
  constructor() {
    super()
    this.state = {menuStaat : false}
  }

  menuKnop = React.createRef()
  menuScherm = React.createRef()
  
  toggleMenu = () => {
    if (this.state.menuStaat === false) {
      this.menuScherm.current.classList.add('open');
      this.setState({menuStaat : true})
    }
    else {
      this.menuScherm.current.classList.remove('open');
      this.setState({menuStaat : false})
    }
  }

  render() {
    return (
      <div>
        <i className="fas fa-question-circle fa-2x info-knop" 
        ref={this.menuKnop} onClick={this.toggleMenu}></i>
  
        <div className="info-scherm" ref={this.menuScherm}>
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