import React from "react";
import '../Slider/Slider.css';
import { motion } from "framer-motion";

function Slider({ arregloImagenes }) {
    return (
        <div>
            <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            </head>
            <motion.div className="slider-container">
                <motion.div className="slider" drag='x' dragConstraints={{ right: 250 * (arregloImagenes.length / 2), left: -250 * (arregloImagenes.length / 2) }} >
                    {arregloImagenes.map((image, index) => (
                        <motion.div className="card item" style={{ width: "200px" }} key={index}>
                        <body>
                            <div className="gallery">
                                    <img src={image} alt=""></img>
                                    <ul>
                                        <li><i class="fa fa-star checked"></i></li>
                                        <li><i class="fa fa-star checked"></i></li>
                                        <li><i class="fa fa-star checked"></i></li>
                                        <li><i class="fa fa-star checked"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                    </ul>
                            </div>
                        </body>


                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Slider;
