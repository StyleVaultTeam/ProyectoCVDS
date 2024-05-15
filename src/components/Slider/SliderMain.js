import React from "react";
import { motion } from "framer-motion";
import './SliderMain.css'; // Importa los estilos del Slider

function SliderMain({ arregloImagenes }) {
    return (
        <div>
            <motion.div className="slider-container">
                <motion.div className="slider" drag='x' dragConstraints={{ right: 250 * (arregloImagenes.length / 2), left: -250 * (arregloImagenes.length / 2) }} >
                    {arregloImagenes.map((image, index) => (
                        <motion.div className="card item" style={{ width: "200px" }} key={index}>
                            <div className="gallery">
                                <img src={image.photo64} alt={`Photo ${index}`} />
                                <ul>
                                    {/* Aquí puedes agregar tu lógica para mostrar las estrellas */}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
}

export default SliderMain;
