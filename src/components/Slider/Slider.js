import React from "react";
import Camisetas from '../ImagesClothes/camisetas';
import '../Slider/Slider.css';
import { motion } from "framer-motion";

function slider({ arregloImagenes }){
    return (
        <motion.div className="slider-container">
            <motion.div className="slider" drag='x' dragConstraints={{right: 500, left: -500}} >
                {arregloImagenes.map(image => (
                    <motion.div className="item">
                        <img src={image} alt="" />
                    </motion.div>    
                ))}
            </motion.div>
        </motion.div>
    )
        
}
export default slider;