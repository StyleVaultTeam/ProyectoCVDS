import React from 'react';
import '../Slider/Slider.css';
import Slider from '../Slider/Slider.js';
import Camisetas from '../ImagesClothes/camisetas';
import Pantalones from '../ImagesClothes/pantalones.js';
import Gorras from '../ImagesClothes/gorras.js';
import Footer from '../Reusable/Footer.js';


function myCloset() {
  return (
    <div>
      <div className="myCloset">
        <header>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
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