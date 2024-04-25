import React from 'react';
import logo from './Logo dorado.png';
import './stylesHeader.css'

function Header({ navigateToShoppingPage, navigateToLandingPage }) {
  return (
    <header>
      <img src={logo} alt="Logo de la aplicación" />
        <nav>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#como-funciona">Cómo Funciona</a></li>
            <li><a href="#caracteristicas">Características</a></li>
            <li><a href="#testimonios">Testimonios</a></li>
            <li><button className="custom-button" onClick={navigateToShoppingPage}>Ir a la página de compras</button></li>
          </ul>
        </nav>
      </header>
  );
}

export default Header;