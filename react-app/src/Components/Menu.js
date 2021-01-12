import React from 'react';
import './Menu.scss';

function Menu() {
  return (
    <header>
      <div className="menu-knop">
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

export default Menu;