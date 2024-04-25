import React from 'react';
import './stylesFooter.css'

function Footer() {
  return (
    <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section about">
              <h2>Sobre Nosotros</h2>
              <p>Grupo de estudiantes de la carrera de Ingenieria de Sistemas de la Escuela Colombiana de Ingenieria.</p>
            </div>
            <div className="footer-section contact">
              <h2>Contacto</h2>
              <div className="contact-info">
                <p><i className="fas fa-envelope"></i> styleVault@mail.com</p>
                <p><i className="fas fa-phone"></i> +3143692005</p>
              </div>
              <div className="socials">
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2024 StyleVault | Todos los derechos reservados
        </div>
      </footer>
  );
}

export default Footer;