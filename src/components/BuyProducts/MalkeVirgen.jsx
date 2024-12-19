import React, { useState, useContext } from 'react';
import './buyproduct.css';  // Archivo CSS importado
import { CartContext } from '../../contexts/CartContext';  // Importar el contexto del carrito
import { assets } from '../../assets/assets';
import Footer from '../Footer/Footer';

const ProductPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);  // Manejar la cantidad
  const { addToCart } = useContext(CartContext);  // Traer la función del contexto del carrito

  // Lista de imágenes del producto
  const productImages = [
    assets.BOTELLAROSAcopy,
    assets.Carrusel2,
    assets.Carrusel3,
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
          <h2 className="playfair-display-3TituloDrakonh1">{product.name}</h2>
          <p className="product-description-poppins">
            Elaborado exclusivamente del mosto de pitahaya manabita roja pulpa blanca cultivada en el cantón Rocafuerte.
          </p>

          <div className="product-featuresP-container">
            <ul className="product-featuresP">
                <li><strong>Vista</strong> Claro, limpio y transparente.</li>
                <li><strong>Sabor</strong> Entrada suave y persistente, con un final redondeado y placentero.</li>
                <li><strong>Cuerpo</strong> Ligeras notas frutales con delicados destellos florales.</li>
                <li><strong>Aroma</strong> Exótico y atractivo, con una mezcla de frutas y flores silvestres.</li>
            </ul>
          </div>

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
          <div className="Qproduct-price"></div>
          <button className="Qadd-to-cart-button" onClick={handleAddToCart}>
            Agregar al carrito
          </button>
        </div>
      </div>

      <section className="productos-section">
        <div className="productos-header">
          <h3>Productos</h3>
          <a href="#" className='btn'>Tienda</a>
        </div>
        <div className="productos-carousel">
          <div className="producto-card">
            <img src={assets.Champage} alt="Malke Virgen" />
            <div className="container-descrip">
              <h2 className='product-title'>Malke Virgen</h2>
              <p className='product-description'>
                Elaborado exclusivamente del mosto de pitahaya manabita roja pulpa blanca cultivada en el cantón Rocafuerte, al menos dos destilados, embotellado y envasado en botella de vidrio o cerámica a 32% alc/vol (64 proof).
              </p>
            </div>
            <a href='#' className="Qbtn">Comprar</a>
          </div>
          <div className="producto-card">
            <img src={assets.Champage} alt="Malke Triple Destilado" />
            <div className="container-descrip">
              <h2 className='product-title'>Malke Triple Destilado</h2>
              <p className='product-description'>
                Elaborado exclusivamente del mosto de pitahaya manabita roja pulpa blanca cultivada en el cantón Rocafuerte, tres veces destilado, embotellado y envasado en botella de vidrio o cerámica a 32% alc/vol (64 proof).
              </p>
            </div>
            <a href='#' className="Qbtn">Comprar</a>
          </div>
          <div className="producto-card">
            <img src={assets.Champage} alt="Malke Reposado" />
            <div className="container-descrip">
              <h2 className='product-title'>Malke Reposado</h2>
              <p className='product-description'>
                Elaborado exclusivamente del mosto de pitahaya manabita roja pulpa blanca en el cantón Rocafuerte, con un reposo de al menos de tres meses en barrica de roble americano, envasado en botella de vidrio a 40% alc/vol (80 proof).
              </p>
            </div>
            <a href='#' className="Qbtn">Comprar</a>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default ProductPage;
