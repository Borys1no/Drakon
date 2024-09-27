import React, { useState } from 'react';
import './buyproduct.css';  // Archivo CSS importado
import { assets } from '../../assets/assets';

const ProductPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);  // Índice actual de la imagen

  // Lista de imágenes del producto
  const productImages = [
    assets.Trago,
    assets.Trago,
    assets.Trago,
  ];

  // Función para cambiar la imagen principal al hacer clic en una imagen pequeña
  const handleImageClick = (index) => {
    setCurrentImageIndex(index);  // Actualiza el índice de la imagen seleccionada
  };

  return (
    <div className="Qproduct-page-container">
      {/* Sección de la imagen principal y el carrusel */}
      <div className="Qproduct-image-section">
        <div className="Qproduct-image-container">
          <div
            className="Qcarousel-slides"
            style={{
              transform: `translateX(-${currentImageIndex * 100}%)`, // Desliza las imágenes
              transition: 'transform 0.5s ease-in-out'  // Transición suave
            }}
          >
            {productImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Producto Malke Virgen ${index + 1}`}
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
              alt={`Producto Malke Virgen ${index + 1}`}
              className={`Qcarousel-image ${currentImageIndex === index ? 'Qactive' : ''}`}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
      </div>

      {/* Sección de detalles del producto */}
      <div className="Qproduct-details">
        <h2 className="Qproduct-title">Malke Virgen</h2>
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
          <input type="number" id="quantity" min="1" />
        </div>

        {/* Precio y botón */}
        <div className="Qproduct-price">$30.00</div>
        <button className="Qadd-to-cart-button">Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ProductPage;
