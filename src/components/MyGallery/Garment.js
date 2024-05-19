import React from 'react';
import '../MyGallery/Garment.js'
import slide_image_1 from "../ImagesClothes/Camiseta_3_Rayas_adidas_Essentials_Azul.png";

function App() {
  return (
      <div className="containerGarment">          
          <div className='slide-contentGarment'>
              <div className='card-wrapper '>
                  <div className='cardGarment'>

                      <div className='image-contentGar'>
                          <span className='overlayGarment'></span>

                          <div className='card-imageGarment'>
                                <img src={slide_image_1} className='slide_image_1' />
                          </div>
                      </div>

                      <div className='card-contentGar'>
                          <h2 className='nameGar'>Camiseta 3 Rayas adidas Essentials Azul</h2>
                          <p className='descriptionGar'>Azul</p>

                      </div>

                  </div>
              </div>

          </div>
      </div>
  );
}

export default App;