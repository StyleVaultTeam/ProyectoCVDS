import React from 'react';
import '../Slider/Slider.css';
import Slider from '../Slider/Slider.js';
import Camisetas from '../ImagesClothes/camisetas';
import Pantalones from '../ImagesClothes/pantalones.js';
import Gorras from '../ImagesClothes/gorras.js';
import Footer from '../Reusable/Footer.js';

function myCloset (){
  return (
    <div>
    <div className="myCloset">
      <header>
      </header>
      <body>
        <div>
        <h1>Mi armario</h1>
          <Slider arregloImagenes={Gorras} />
          <Slider arregloImagenes={Camisetas} />
          <Slider arregloImagenes={Pantalones} />
        </div>
      </body>
    </div>
    <Footer />
    </div>
  );
};

export default myCloset;