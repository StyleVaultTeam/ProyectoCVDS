import React from 'react';
import './stylesLandingPage.css'; // Importa el archivo CSS
import step from './logo2.png';
import Slider from './Slider/Slider.js';
import Camisetas from './ImagesClothes/camisetas';
import Pantalones from './ImagesClothes/pantalones.js';
import Gorras from './ImagesClothes/gorras.js';
import Footer from './Reusable/Footer.js';

function App() {
  return (
    <div className="App">
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
      <Footer />
      <script src="app.js"></script>
    </div>
  );
}

export default App;
