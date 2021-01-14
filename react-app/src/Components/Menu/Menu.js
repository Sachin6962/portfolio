import React from 'react';
import './Menu.scss';

//   menu op scherm tonen / sluiten n.a.v. huidige staat
function toggleMenu(x) {
  var menuKnop = document.querySelector('.menu-knop');
  var menu = document.querySelector('.menu');
  var menuNav = document.querySelector('.menu-navigatie');
  var menuPers = document.querySelector('.menu-persoonlijk');
  var navItem = document.querySelectorAll('.nav-item');

    if (x === false) {
        menuKnop.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuPers.classList.add('show');
        navItem.forEach(item => item.classList.add('show'));
    }
    else {
        menuKnop.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuPers.classList.remove('show');
        navItem.forEach(item => item.classList.remove('show'));
    }
}

class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      toggle: false
    }
    this.menuStaat = this.menuStaat.bind(this);
  }

  //  zet de staat van het menu op 'true' of 'false' wanneer je erop klikt
  menuStaat() {
    this.setState((staat) => {
      if (staat.toggle === false) {
        toggleMenu(staat.toggle);
        return {
          toggle : true
        }
      }
      else {
        toggleMenu(staat.toggle);
        return {
          toggle : false
        }
      }
    })
  }

  render() {
    return (
      <header>
        <div className="menu-knop" onClick={this.menuStaat}>
          <div className="menu-lijn"></div>
          <div className="menu-lijn"></div>
          <div className="menu-lijn"></div>
        </div>
  
        <nav className="menu">
          <div className="menu-persoonlijk">
            <div className="foto"></div>
          </div>
          <ul className="menu-navigatie">
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