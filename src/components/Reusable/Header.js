import React from 'react';
import logo from './Logo dorado.png';
import './stylesHeader.css'

function Header({navigateToLogin}) {
  return (
    <header>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
            <img src={logo} alt="Bootstrap" width="140" height="74" />
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link mx-lg-2 active" aria-current="page" href="#inicio">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-lg-2" href="/#como-funciona">Cómo Funciona</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-lg-2" href="/#caracteristicas">Características</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-lg-2" href="/#testimonios">Testimonios</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-lg-2" href="/shopping" >
                    Ir a la página de compras
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-lg-2" href="/login" >
                    Login
                  </a>
                </li>
              </ul>
            </div>

            <button className="navbar-toggler pe-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </nav>

    </header>
  );
}

export default Header;