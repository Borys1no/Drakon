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

        {/* Sección de detalles del producto a la derecha */}
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

          <div className="Qquantity-container">
            <label htmlFor="quantity">Cantidad:</label>
            <input type="number" id="quantity" min="1" />
          </div>

          <div className="Qproduct-price">$30.00</div>
          <button className="Qadd-to-cart-button">Agregar al carrito</button>
        </div>
      </div>

      {/* Sección de Productos debajo */}
      <section className="productos-section">
        <div className="productos-header">
          <h3>Productos</h3>
        </div>
        <div className="productos-carousel">
          <div className="producto-card">
            <img src={assets.Champage} alt="Malke Virgen" />
            <div className="container-descrip">
              <h2 className='product-title'>Malke Virgen</h2>
              <p className='product-description'>
                Elaborado exclusivamente del mosto de pitahaya manabita roja pulpa blanca cultivada en el cantón Rocafuerte, al menos dos destilados, embotellado y envasado en botella de vidrio o cerámica a 32% alc/vol (64 proof).</p>
            </div>
            <a href='#' className="Qbtn">Comprar</a>
          </div>
          <div className="producto-card">
            <img src={assets.Champage} alt="Malke Triple Destilado" />
            <div className="container-descrip">
              <h2 className='product-title'>Malke Triple Destilado</h2>
              <p className='product-description'>
                Elaborado exclusivamente del mosto de pitahaya manabita roja pulpa blanca cultivada en el cantón Rocafuerte, tres veces destilado, embotellado y envasado en botella de vidrio o cerámica a 32% alc/vol (64 proof).</p>
            </div>
            <a href='#' className="Qbtn">Comprar</a>
          </div>
          <div className="producto-card">
            <img src={assets.Champage} alt="Malke Reposado" />
            <div className="container-descrip">
              <h2 className='product-title'>Malke Reposado</h2>
              <p className='product-description'>
                Elaborado exclusivamente del mosto de pitahaya manabita roja pulpa blanca en el cantón Rocafuerte, con un reposo de al menos de tres meses en barrica de roble americano, envasado en botella de vidrio a 40% alc/vol (80 proof).</p>
            </div>
            <a href='#' className="Qbtn">Comprar</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
