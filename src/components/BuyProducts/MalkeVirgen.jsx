import React, { useState } from 'react';
import './buyproduct.css';  // Archivo CSS importado
import { assets } from '../../assets/assets';

const ProductPage = () => {
  // Estado para manejar la cantidad y las imágenes
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [animate, setAnimate] = useState(false); // Estado para la animación de la imagen

  // Lista de imágenes del producto
  const productImages = [
    assets.Trago,
    assets.Trago,
    assets.Trago,
  ];

  // Función para cambiar la imagen principal al hacer clic en una imagen pequeña
  const handleImageClick = (index) => {
    setAnimate(true); // Iniciar animación
    setTimeout(() => {
      setCurrentImageIndex(index);
      setAnimate(false); // Finalizar animación
    }, 500); // Duración de la animación
  };

  return (
    <div className="Qproduct-page-container">
      {/* Sección de la imagen principal y el carrusel */}
      <div className="Qproduct-image-section">
        <div className={`Qproduct-image-container`}>
          <img
            src={productImages[currentImageIndex]}
            alt="Producto Malke Virgen"
            className={`Qproduct-image ${animate ? 'Qfade' : ''}`}  // Aplicar animación de desvanecimiento
          />
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
        {/* Características del producto */}
        <div className="product-text">
          <h2 className="product-title">Malke Triple Destilado</h2>
          <p className="product-description">
            Elaborado exclusivamente del mosto de pitahaya manabita roja pulpa blanca cultivada en el cantón Rocafuerte, tres veces destilado, embotellado y envasado en botella de vidrio o cerámica a 32% alc/vol (64 proof).
          </p>
          <ul className="product-features">
            <li><strong>Vista</strong><span className="separator"></span>Brillante, limpio y transparente</li>
            <li><strong>Sabor</strong><span className="separator"></span>Elegante presencia frutal, con notas de pera y kiwi</li>
            <li><strong>Cuerpo</strong><span className="separator"></span>Elegante, ligeras notas de fruta, destellos florales</li>
            <li><strong>Aroma</strong><span className="separator"></span>Exótico aroma que incluye frutas y flores silvestres</li>
            <li><strong>Diferencia</strong><span className="separator"></span>El malke triple destilado es una opción ideal para cocteleria, shot, o bajativo, aclamado internacionalmente.</li>
          </ul>
        </div>

        {/* Selector de cantidad */}
        <div className="Qquantity-container">
          <label htmlFor="quantity">Cantidad:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            min="1"
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </div>

        {/* Precio y botón */}
        <div className="Qproduct-price">$30.00</div>
        <button className="Qadd-to-cart-button">Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ProductPage;
