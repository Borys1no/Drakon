import React, { useState } from 'react';
import './buyproduct.css';  // Archivo CSS importado
import { assets } from '../../assets/assets';

const ProductPage = () => {
  // Estado para manejar la cantidad y las imágenes
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Lista de imágenes del producto
  const productImages = [
    assets.Trago,
    assets.Trago,
    assets.Trago,
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
    <div className="Qproduct-page-container">
      {/* Sección de imagen a la izquierda */}
      <div className="Qproduct-image-container">
        <button className="Qprev-arrow" onClick={prevImage}>
          &lt; {/* Flecha izquierda */}
        </button>
        <img
          src={productImages[currentImageIndex]}
          alt="Producto Malke Virgen"
          className="Qproduct-image"
        />
        <button className="Qnext-arrow" onClick={nextImage}>
          &gt; {/* Flecha derecha */}
        </button>
      </div>

      {/* Sección de detalles a la derecha */}
      <div className="Qproduct-details">
        <h1 className="Qproduct-title">Malke Virgen</h1>

        {/* Características del producto */}
        <div className="product-section reverse">
                <div className="product-image">
                    <img src={assets.LogoNegro} alt="Malke Triple Destilado" />
                </div>
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
                    <div className="button-container">
                        <button className="buy-button">
                            Comprar ahora <span className="arrow">→</span>
                        </button>
                    </div>
                </div>
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

        {/* Precio */}
        <div className="Qproduct-price">$30.00</div>

        {/* Botón para agregar al carrito */}
        <button className="Qadd-to-cart-button">Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ProductPage;
