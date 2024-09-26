import React, { useState } from 'react';
import './buyproduct.css';  // Archivo CSS importado

const ProductPage = () => {
  // Estado para manejar la cantidad y las imágenes
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Lista de imágenes del producto
  const productImages = [
    '/path/to/image1.jpg',
    '/path/to/image2.jpg',
    '/path/to/image3.jpg',
  ];

  // Función para avanzar a la siguiente imagen
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === productImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Función para retroceder a la imagen anterior
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? productImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="product-page-container">
      {/* Sección de imagen a la izquierda */}
      <div className="product-image-container">
        <button className="prev-arrow" onClick={prevImage}>
          &lt; {/* Flecha izquierda */}
        </button>
        <img
          src={productImages[currentImageIndex]}
          alt="Producto Malke Virgen"
          className="product-image"
        />
        <button className="next-arrow" onClick={nextImage}>
          &gt; {/* Flecha derecha */}
        </button>
      </div>

      {/* Sección de detalles a la derecha */}
      <div className="product-details">
        <h1 className="product-title">Malke Virgen</h1>

        {/* Características del producto */}
        <ul className="product-features">
          <li>
            <strong>Material:</strong>
            <div className="separator"></div>
            <span>Madera de alta calidad</span>
          </li>
          <li>
            <strong>Dimensiones:</strong>
            <div className="separator"></div>
            <span>40cm x 20cm x 10cm</span>
          </li>
          <li>
            <strong>Peso:</strong>
            <div className="separator"></div>
            <span>2.5 kg</span>
          </li>
          <li>
            <strong>Color:</strong>
            <div className="separator"></div>
            <span>Marrón natural</span>
          </li>
        </ul>

        {/* Selector de cantidad */}
        <div className="quantity-container">
          <label htmlFor="quantity">Cantidad:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            min="1"
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </div>

        {/* Precio */}
        <div className="product-price">$30.00</div>

        {/* Botón para agregar al carrito */}
        <button className="add-to-cart-button">Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ProductPage;
