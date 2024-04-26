import React from 'react';
// import './App.css'; // Estilos
import './stylesLandingPage.css'; // Importa el archivo CSS
import logo from './Logo dorado.png';
import step from './logo2.png';
import Slider from './Slider/Slider.js';
import Camisetas from './ImagesClothes/camisetas';
import Pantalones from './ImagesClothes/pantalones.js';
import Gorras from './ImagesClothes/gorras.js';
import LoginForm from './LoginForm/Login.jsx';


function App() {
  return (
    <div className="App">
      <header>
      <img src={logo} alt="Logo de la aplicación" />
        <nav>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#como-funciona">Cómo Funciona</a></li>
            <li><a href="#caracteristicas">Características</a></li>
            <li><a href="#testimonios">Testimonios</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
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
        
      </header>
      <section id="login" className="login-section">
        <LoginForm />
      </section>
      <section id="inicio" className="hero-section">
        <div className="hero-content">
          <h1>Organiza tu armario virtualmente</h1>
          <p>Mantén tu guardarropa organizado y a mano en todo momento.</p>
        </div>
      </section>
      <section id="como-funciona" className="how-it-works-section">
        <h2>Cómo Funciona</h2>
        <div className="steps">
          <div className="step">
            <img src={step} alt="Paso 1" />
            <p>Fotografía tus prendas</p>
          </div>
          <div className="step">
            <img src={step} alt="Paso 2" />
            <p>Organízalas por categorías</p>
          </div>
          <div className="step">
            <img src={step} alt="Paso 3" />
            <p>Crea conjuntos fácilmente</p>
          </div>
        </div>
      </section>
            
      {/* Add by JParroquiano */}
      <section id="mi-armario" className='my-closet'>
        <h2>Mi armario</h2>
        <Slider arregloImagenes={Gorras}/>
        <Slider arregloImagenes={Camisetas}/>
        <Slider arregloImagenes={Pantalones}/>        
      </section>

      <section id="caracteristicas" className="features-section">
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
      </section>
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
