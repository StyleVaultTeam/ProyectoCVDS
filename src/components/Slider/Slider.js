import React from "react";
import '../Slider/Slider.css';
import { motion } from "framer-motion";

function Slider({ arregloImagenes }) {
    return (
        <motion.div className="slider-container">
            <motion.div className="slider" drag='x' dragConstraints={{right: 250*(arregloImagenes.length/2), left: -250*(arregloImagenes.length/2) }} >
                {arregloImagenes.map((image, index) => (
                    <motion.div class="card" className="item" style={{width: "auto"}} key={index}>
                        <img src={image}  alt=""></img>
                        <div class="rating">
                            <input type="radio" name="star" id="star1" /><label for="star1"></label>
                            <input type="radio" name="star" id="star2" /><label for="star2"></label>
                            <input type="radio" name="star" id="star3" /><label for="star3"></label>
                            <input type="radio" name="star" id="star4" /><label for="star4"></label>
                            <input type="radio" name="star" id="star5" /><label for="star5"></label>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
}

export default Slider;
