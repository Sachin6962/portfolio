import React from 'react';
import { NavLink } from 'react-router-dom'
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
            <li className="nav-item">
              <NavLink to='/' className="link" exact activeClassName='active' onClick={this.menuToggle}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/Werk' className="link" onClick={this.menuToggle}>Werk</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/OverMij' className="link" onClick={this.menuToggle}>Over mij</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/Contact' className="link" onClick={this.menuToggle}>Contact</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Menu;