
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../MyGallery/MyGallery.css';
import '../Slider/Slider.css';

//import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import slide_image_1 from "../ImagesClothes/Camiseta_3_Rayas_adidas_Essentials_Azul.png";
import slide_image_2 from "../ImagesClothes/Camiseta_Rosa_.png";
import slide_image_3 from "../ImagesClothes/CamisetaNegra.png";
import slide_image_4 from "../ImagesClothes/Camiseta_Blanca.png";
import { Tab } from 'bootstrap';
import Garment from "../MyGallery/Garment.js";
import image7 from "../ImagesClothes/camiseta-azul.png";

function App({ arregloImagenes }) {
    return (
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
            <div className="containerGallery">
                <Swiper effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                    }}

                    className="swiper_container"
                >
                    {arregloImagenes.map((image, index) => (

                        <div className="card item" key={index}>

                            <SwiperSlide>
                                <img src={image} alt="slide_image" />
                                <ul>
                                    <li><i className="fa fa-star checked"></i></li>
                                    <li><i className="fa fa-star checked"></i></li>
                                    <li><i className="fa fa-star checked"></i></li>
                                    <li><i className="fa fa-star checked"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                </ul>
                                {/*<button onClick={handleClick}></button>*/}
                                {/*<a className="nav-link mx-lg-2" href="/garment" ></a>*/}
                                {/*<a href="/garment" className="buttonGallery" id="button22"> </a>*/}

                            </SwiperSlide>
                        </div>
                    ))}

                </Swiper>
            </div>
        </div>
    );
}

export default App;