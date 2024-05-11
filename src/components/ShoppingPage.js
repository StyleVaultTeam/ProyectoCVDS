import React from 'react';
import { Link } from 'react-router-dom';
import './stylesShoppingPage.css';
import Footer from './Reusable/Footer.js';
import zaraImage from './ImagesLogos/zara.jpg';
import hmImage from './ImagesLogos/H&M.jpg';
import amazonImage from './ImagesLogos/amazon.jpg';
import asosImage from './ImagesLogos/asos.jpg';
import mangoImage from './ImagesLogos/mango.jpg';

function ShoppingPage() {
  return (
    <div>
    <div className="shopping-page">
      <h2>¡Aqui hay algunas paginas que te recomendamos para que puedas reabastecer tu armario!</h2>
      <div className="category-links">
        <Link to="https://www.amazon.com.mx/moda" className="category-link">
          <img src={amazonImage} alt="Amazon" />
          Amazon Moda
        </Link>
        <Link to="https://www.zara.com/co/" className="category-link">
          <img src={zaraImage} alt="Zara" />
          Zara
        </Link>
        <Link to="https://co.hm.com/" className="category-link">
          <img src={hmImage} alt="H&M" />
          H&M
        </Link>
        <Link to="https://shop.mango.com/co" className="category-link">
          <img src={mangoImage} alt="Mango" />
          Mango
        </Link>
        <Link to="https://www.asos.com/?xaffid=17295&r=1" className="category-link">
          <img src={asosImage} alt="Asos" />
          Asos
        </Link>
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default ShoppingPage;