import React, { useState } from 'react';
import './stylesShoppingPage.css';
import Footer from './Reusable/Footer.js';
import camisetaBlancaImage from './ImagesClothes/Camiseta_Blanca.png'
import gorraNegraImage from './ImagesClothes/gorraNegra.png'
import pantalonTrainImage from './ImagesClothes/Pantalon_Train.png'

function ShoppingPage() {
  // Estado para almacenar los productos en el carrito de compras
  const [cart, setCart] = useState([]);

  // Función para agregar un producto al carrito de compras
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Función para eliminar un producto del carrito de compras
  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  // Lista de productos de ejemplo
  const products = [
    { id: 1, name: 'Camiseta', price: 25, image: camisetaBlancaImage },
    { id: 2, name: 'Pantalón', price: 40, image: pantalonTrainImage },
    { id: 3, name: 'Gorra', price: 30, image: gorraNegraImage },
    { id: 4, name: 'Gorra2', price: 30, image: gorraNegraImage },
    { id: 5, name: 'Gorra3', price: 30, image: gorraNegraImage }
  ];

  // Función para calcular el total de la compra
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
  <div>
    <div className="container">
      <div className="products-container">
        <h2 style={{ fontSize: '40px', marginLeft: '30px' }}>Productos disponibles</h2>
        <div className="products">
          {products.map((product) => (
            <div key={product.id} className="product">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Precio: ${product.price}</p>
              <button onClick={() => addToCart(product)}>Agregar al carrito</button>
            </div>
          ))}
        </div>
      </div>
      <div className="cart">
        <h2>Carrito de compras</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price} 
              <button onClick={() => removeFromCart(index)}>Eliminar</button>
            </li>
          ))}
        </ul>
        <h2>Total de la compra: ${total}</h2>
      </div>
    </div>
    <Footer />
  </div>
  );
}

export default ShoppingPage;