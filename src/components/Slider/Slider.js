import React from "react";
import '../Slider/Slider.css';
import { motion } from "framer-motion";

function Slider({ arregloImagenes }) {
    return (
        <motion.div className="slider-container">
            <motion.div className="slider" drag='x' dragConstraints={{right: 250*(arregloImagenes.length/2), left: -250*(arregloImagenes.length/2) }} >
                {arregloImagenes.map((image, index) => (
                    <motion.div className="item" key={index}>
                        <img src={image} alt="" />
                            <div className="informacion">
                            </div>
                    </motion.div>    
                ))}
            </motion.div>
        </motion.div>
    );
}

export default Slider;
