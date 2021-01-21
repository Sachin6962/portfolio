import React from 'react';
import './Menu.scss';

class Menu extends React.Component {
  constructor() {
    super()
    this.state = {menuStaat : false}
  }

  menuKnop = React.createRef()
  menu = React.createRef()
  menuNav = React.createRef()
  menuPers = React.createRef()
  navItem = React.createRef()

  menuToggle = () => {
    if (this.state.menuStaat === false) {
      this.menuKnop.current.classList.add('close');
      this.menu.current.classList.add('show');
      this.menuNav.current.classList.add('show');
      this.menuPers.current.classList.add('show');
      this.setState({menuStaat : true})
    }
    else {
      this.menuKnop.current.classList.remove('close');
      this.menu.current.classList.remove('show');
      this.menuNav.current.classList.remove('show');
      this.menuPers.current.classList.remove('show');
      this.setState({menuStaat : false})
    }
  }

  render() {
    return (
      <header>
        <div className="menu-knop" ref={this.menuKnop} onClick={this.menuToggle}>
          <div className="menu-lijn"></div>
          <div className="menu-lijn"></div>
          <div className="menu-lijn"></div>
        </div>
  
        <nav className="menu" ref={this.menu}>
          <div className="menu-persoonlijk" ref={this.menuPers}>
            <div className="foto"></div>
          </div>
          <ul className="menu-navigatie" ref={this.menuNav}>
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