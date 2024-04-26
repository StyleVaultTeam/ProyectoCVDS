import React from 'react';
import logo from './Logo dorado.png';
import './stylesHeader.css'

function Header({ navigateToShoppingPage, navigateToLandingPage }) {
  return (
    <header>
      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={logo} alt="Bootstrap" width="140" height="74" />
          </a>

          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link mx-lg-2 active" aria-current="page" href="#inicio">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link mx-lg-2"  href="#como-funciona">Cómo Funciona</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link mx-lg-2" href="#caracteristicas">Características</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link mx-lg-2" href="#testimonios">Testimonios</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link mx-lg-2" >
                    <button className="custom-button" onClick={navigateToShoppingPage}>Ir a la página de compras</button>
                  </a>
                </li>
              </ul>
            </div>

            {/*<a href="#" class="login-button">Login</a>*/}
            <button class="navbar-toggler pe-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </nav>

      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>

    </header>
  );
}

export default Header;