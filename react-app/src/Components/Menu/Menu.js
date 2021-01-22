import React from 'react';
import './Menu.scss';

class Menu extends React.Component {
  constructor() {
    super()
    this.state = {
      menuStaat : false,
      menuIcoon : '',
      menuBody : ''
    }
  }

  menuToggle = () => {
    if (this.state.menuStaat === false) {
      this.setState({
        menuStaat : true,
        menuIcoon : ' close',
        menuBody : ' show'
      })
    }
    else {
      this.setState({
        menuStaat : false,
        menuIcoon : '',
        menuBody : ''
      })
    }
  }

  render() {
    return (
      <header>
        <div className={`menu-knop${this.state.menuIcoon}`} onClick={this.menuToggle}>
          <div className="menu-lijn"></div>
          <div className="menu-lijn"></div>
          <div className="menu-lijn"></div>
        </div>
  
        <nav className={`menu${this.state.menuBody}`}>
          <div className={`menu-persoonlijk${this.state.menuBody}`}>
            <div className="foto"></div>
          </div>
          <ul className={`menu-navigatie${this.state.menuBody}`}>
            <li className="nav-item huidige-pagina">
              <a href="#" className="link">Home</a>
            </li>
            <li className="nav-item">
              <a href="#" className="link">Werk</a>
            </li>
            <li className="nav-item">
              <a href="#" className="link">Over mij</a>
            </li>
            <li className="nav-item">
              <a href="#" className="link">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Menu;