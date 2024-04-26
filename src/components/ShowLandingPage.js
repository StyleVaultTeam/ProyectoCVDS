import React from 'react';
import './stylesLandingPage.css'; // Importa el archivo CSS
import step from './logo2.png';
import Slider from './Slider/Slider.js';
import Camisetas from './ImagesClothes/camisetas';
import Pantalones from './ImagesClothes/pantalones.js';
import Gorras from './ImagesClothes/gorras.js';
import Footer from './Reusable/Footer.js';
import OutfitsStylesReferences from './OutfitsStylesReferences/OutfitsStylesReferences.js';

function App() {

  return (
    <div className="App">
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
            <img src={step} class="img-fluid" alt="Paso 1" />
            <p>Fotografía tus prendas</p>
          </div>
          <div className="step">
            <img src={step} class="img-fluid" alt="Paso 2" />
            <p>Organízalas por categorías</p>
          </div>
         <div className="step">
            <img src={step} class="img-fluid" alt="Paso 3" />
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
      <section>
        <OutfitsStylesReferences />
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

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

      {/* Sección de Testimonios */}
      <Footer />
      <script src="app.js"></script>
    </div>  
  );
}

export default App;
