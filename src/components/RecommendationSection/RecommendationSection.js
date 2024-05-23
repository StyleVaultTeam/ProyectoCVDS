import React from 'react';
import '../RecommendationSection/RecommendationSection.css'
import Silvia from '../RecommendationSection/SilviaTcherassi.jpeg'
import AmeliaToro from '../RecommendationSection/AmeliaToro.png' 
import CarolinaHerrera from '../RecommendationSection/carolinaHerrera.png' 
import Footer from '../Reusable/Footer.js';

function RecommendationSection() {
    return (
        <div>
        <div>
            <body className='bodyReco'>
                    <div className='title'>
                        <h1>Consejos de Moda de expertos</h1>
                    </div>
                <div className='slide-container '>
                    <div className='slide-contentReco'>
                        <div className='card-wrapper '>
                            <div className='cardReco'>

                                <div className='image-content'>
                                    <span className='overlayReco'></span>

                                    <div className='card-imageReco'>
                                        <img src={Silvia} alt='' className='card-imgReco' />
                                    </div>
                                </div>

                                <div className='card-content'>
                                    <h2 className='nameReco'>Silvia Tcherassi</h2>
                                    <p className='descriptionReco'>Diseñadora</p>

                                    <div className="card-body">
                                        <a href="https://co.silviatcherassi.com/blogs/news" className="btn btn-primary">Ver mas</a>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className='slide-contentReco'>
                        <div className='card-wrapper '>
                            <div className='cardReco'>

                                <div className='image-content'>
                                    <span className='overlayReco'></span>

                                    <div className='card-imageReco'>
                                        <img src={AmeliaToro} alt='' className='card-imgReco' />
                                    </div>
                                </div>

                                <div className='card-content'>
                                    <h2 className='nameReco'>Amelia Toro</h2>
                                    <p className='descriptionReco'>Diseñadora</p>

                                    <div className="card-body">
                                        <a href="https://www.instagram.com/ameliatoro/" className="btn btn-primary">Ver mas</a>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className='slide-contentReco'>
                        <div className='card-wrapper '>
                            <div className='cardReco'>

                                <div className='image-content'>
                                    <span className='overlayReco'></span>

                                    <div className='card-imageReco'>
                                        <img src={CarolinaHerrera} alt='' className='card-imgReco' />
                                    </div>
                                </div>

                                <div className='card-content'>
                                    <h2 className='nameReco'>Carolina Herrera</h2>
                                    <p className='descriptionReco'>Marca</p>

                                    <div className="card-body">
                                        <a href="https://acortar.link/knqUQh" className="btn btn-primary">Ver mas</a>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </body>
        </div>
        <Footer />
        </div>
    );

}

export default RecommendationSection;

