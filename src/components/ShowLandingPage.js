import React from 'react';
//import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import './App.css'; // Estilos
import './stylesLandingPage.css'; // Importa el archivo CSS
import logo from './Logo dorado.png';
import step from './logo2.png';
import Slider from './Slider/Slider.js';
//import MyCloset from './MyCloset/MyCloset.js';
import Camisetas from './ImagesClothes/camisetas';
import Pantalones from './ImagesClothes/pantalones.js';
import Gorras from './ImagesClothes/gorras.js';

function App() {

  /*const openMyCloset = () => {
    const pantalla = <MyCloset />;
  };*/

  return (
    <div className="App">
      <header>
      <nav class="navbar navbar-expand-lg fixed-top">
      <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={logo} alt="Bootstrap" width="140" height="74"/>
          </a>
        
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>

          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
              <li class="nav-item">
                <a class="nav-link mx-lg-2 active" aria-current="page" href="#inicio">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link mx-lg-2" href="#como-funciona">Cómo Funciona</a>
              </li>
              <li class="nav-item">
                <a class="nav-link mx-lg-2" href="#caracteristicas">Características</a>
              </li>
              <li class="nav-item">
                <a class="nav-link mx-lg-2" href="#testimonios">Testimonios</a>
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

    <link rel="preconnect" href="https://fonts.googleapis.com" />  
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
        rel="stylesheet" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous" />
      
      </header>

      <body>      
          <section id="inicio" className="hero-section">
              <div class="container-fluid d-flex align-items-center fs-1 flex-column" className="hero-content">
                <h1>Organiza tu armario virtualmente</h1>
                <p>Mantén tu guardarropa organizado y a mano en todo momento.</p>
              </div>
          </section>

        <section id="como-funciona" className="how-it-works-section">
          <h2>Cómo Funciona</h2>
          <div className="steps">
            <div className="step">
              <img src={step} class="img-fluid" alt="Paso 1"></img>
              <p>Fotografía tus prendas</p>
            </div>
            <div className="step">
              <img src={step} class="img-fluid" alt="Paso 2"></img>
              <p>Organízalas por categorías</p>
            </div>
            <div className="step">
              <img src={step} class="img-fluid" alt="Paso 3"></img>
              <p>Crea conjuntos fácilmente</p>
            </div>
          </div>
        </section>

        {/* Add by JParroquiano */}
        {/*<div>
          <Routes>
            <ul className="nav-container s-border s-main-center s-pl-0">
              <li className="nav-container--item s-mr-2">
                <Link to="/myCloset">Vamos</Link></li>
            </ul>
              <Route exact path="/myCloset" component={MyCloset} />
            
          </Routes>
        </div>*/}

        <section id="mi-armario" className='my-closet'>
          <h2>Mi armario</h2>
          <Slider arregloImagenes={Gorras} />
          <Slider arregloImagenes={Camisetas} />
          <Slider arregloImagenes={Pantalones} />
        </section>

        <section id="caracteristicas" className="features-section">
          <div class="container-fluid d-flex align-items-center fs-1 flex-column">
            <h2>Características</h2>
            <ul>
              <li>
                <h3>Gestión de guardarropas</h3>
                <p>Administra todas tus prendas de manera eficiente.</p>
              </li>
              <li>
                <h3>Creación de conjuntos</h3>
                <p>Crea combinaciones de ropa fácilmente.</p>
              </li>
              <li>
                <h3>Sugerencias de combinaciones</h3>
                <p>Recibe sugerencias de conjuntos basadas en tus prendas.</p>
              </li>
              <li>
                <h3>Calendario de outfits</h3>
                <p>Planifica qué ponerte con anticipación.</p>
              </li>
            </ul>
          </div>
        </section>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

      </body>
        {/* Sección de Testimonios */}
        {/* Pie de página */}
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-section about">
                <h2>Sobre Nosotros</h2>
                <p>Grupo de estudiantes de la carrera de Ingenieria de Sistemas de la Escuela Colombiana de Ingenieria.</p>
              </div>
              <div className="footer-section contact">
                <h2>Contacto</h2>
                <div className="contact-info">
                  <p><i className="fas fa-envelope"></i> styleVault@mail.com</p>
                  <p><i className="fas fa-phone"></i> +3143692005</p>
                </div>
                <div className="socials">
                  <a href="#inicio"><i className="fab fa-facebook"></i></a>
                  <a href="#inicio"><i className="fab fa-twitter"></i></a>
                  <a href="#inicio"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            &copy; 2024 StyleVault | Todos los derechos reservados
          </div>
        </footer>
        <script src="app.js"></script>

        

    </div>    
  );
}

export default App;
