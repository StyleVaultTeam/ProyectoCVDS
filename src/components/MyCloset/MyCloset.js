import React from 'react';
import '../Slider/Slider.css';
import Slider from '../Slider/Slider.js';
import Camisetas from '../ImagesClothes/camisetas';
import Pantalones from '../ImagesClothes/pantalones.js';
import Gorras from '../ImagesClothes/gorras.js';

function myCloset (){
  return (
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
  );
};

export default myCloset;