import React, { useState, useContext } from 'react';
import './buyproduct.css';  // Archivo CSS importado
import { CartContext } from '../../contexts/CartContext';  // Importar el contexto del carrito
import { assets } from '../../assets/assets';

const ProductPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);  // Manejar la cantidad
  const { addToCart } = useContext(CartContext);  // Traer la función del contexto del carrito

  // Lista de imágenes del producto
  const productImages = [
    assets.Trago,
    assets.Trago,
    assets.Trago,
  ];

  // Datos del producto actual
  const product = {
    id: 1,
    name: 'Malke Virgen',
    price: 30,
    image: assets.Trago,
  };

  // Función para cambiar la imagen principal al hacer clic en una imagen pequeña
  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
  };

  // Función para agregar producto al carrito
  const handleAddToCart = () => {
    addToCart(product, quantity);  // Llama a la función y pasa el producto y cantidad
  };

  return (
    <div className="Qproduct-page-container">
      <div className="Qproduct-content">
        {/* Sección de la imagen principal y el carrusel a la izquierda */}
        <div className="Qproduct-image-section">
          <div className="Qproduct-image-container">
            <div
              className="Qcarousel-slides"
              style={{
                transform: `translateX(-${currentImageIndex * 100}%)`,
                transition: 'transform 0.5s ease-in-out'
              }}
            >
              {productImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Producto ${product.name} ${index + 1}`}
                  className="Qproduct-image"
                />
              ))}
            </div>
          </div>

          {/* Carrusel de imágenes pequeñas */}
          <div className="Qimage-carousel">
            {productImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Producto ${product.name} ${index + 1}`}
                className={`Qcarousel-image ${currentImageIndex === index ? 'Qactive' : ''}`}
                onClick={() => handleImageClick(index)}
              />
            ))}
          </div>
        </div>

        {/* Sección de detalles del producto a la derecha */}
        <div className="Qproduct-details">
          <h2 className="Qproduct-title">{product.name}</h2>
          <p className="Qproduct-description">
            Elaborado exclusivamente del mosto de pitahaya manabita roja pulpa blanca cultivada en el cantón Rocafuerte.
          </p>
          <ul className="Qproduct-features">
            <li><strong>Vista</strong><span className="Qseparator"></span>Claro, limpio y transparente</li>
            <li><strong>Sabor</strong><span className="Qseparator"></span>Entrada agradable, persistente y agradable final</li>
            <li><strong>Cuerpo</strong><span className="Qseparator"></span>Ligeras notas de fruta, destellos florales</li>
            <li><strong>Aroma</strong><span className="Qseparator"></span>Exótico aroma de frutas y flores silvestres</li>
          </ul>

          {/* Selector de cantidad */}
          <div className="Qquantity-container">
            <label htmlFor="quantity">Cantidad:</label>
            <input 
              type="number" 
              id="quantity" 
              min="1" 
              value={quantity} 
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
          </div>

          {/* Precio y botón */}
          <div className="Qproduct-price">${product.price}</div>
          <button className="Qadd-to-cart-button" onClick={handleAddToCart}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
