import React, { useState, useContext, useEffect } from 'react';
import './DrakonTDestilado.css';  // Archivo CSS importado
import { CartContext } from '../../contexts/CartContext';  // Importar el contexto del carrito
import { assets } from '../../assets/assets';
import Footer from '../Footer/Footer';

const TripleDestilado = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);  // Manejar la cantidad
  const { addToCart } = useContext(CartContext);  // Traer la función del contexto del carrito

  // Lista de imágenes del producto
  const productImages = [
    assets.BOTELLAROJAcopy,
    assets.CTDestilado2,
    assets.CTDestilado1,
  ];

  // Datos del producto actual
  const product = {
    id: 1,
    name: 'DRAKON TRIPLE DESTILADO',
    price: 39,
    image: assets.Trago,
  };

  useEffect(() => {
    const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % productImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [productImages.length]);

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
      {/* Fondo global */}
      <img className="background-image2" src={assets.SLIDES2copy} alt="SLIDES2copy" />
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
          Combina elegancia y sofisticación, logrando una pureza inigualable y un sabor refinado.
          </p>

          <div className="product-featuresP-container">
            <ul className="product-featuresP">
                <li><strong>VISTA</strong> Brillante, impecable y transparente.</li>
                <li><strong>SABOR</strong> Elegante expresión frutal con notas distintivas de pera y kiwi.</li>
                <li><strong>CUERPO</strong> Refinado, con mayor profundidad, acompañado de destellos florales.</li>
                <li><strong>AROMA</strong> Complejo y exótico, combinando frutas maduras y flores silvestres</li>
            </ul>
          </div>

          {/* Selector de cantidad */}
          <div className="Qquantity-container">
            <label htmlFor="quantity">Cantidad:</label>
            <input className='input2'
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
          AÑADIR AL CARRITO
          </button>
        </div>
      </div>

        {/* Productos */}
            <section>
              <div className="productos-header" style={{ marginTop: "100px" }}>
                <h3>Nuestros Productos</h3>
              </div>
              <div className="productos-carousel">
                <div className="producto-card">
                  <img src={assets.BOTELLAROSAcopy} alt="Malke Virgen" />
                  <div className="container-descrip">
                    <h2 className="product-title">Drakon Destilado</h2>
                    <p className="product-description">$27,00</p>
                  </div>
                  <div className="button-container">
                    <a href="#" className="Qbtn">
                      COMPRAR
                    </a>
                    <a href="#" className="Qbtn2">
                      CONOCE MÁS
                    </a>
                  </div>
                </div>
                <div className="producto-card">
                  <img src={assets.BOTELLAROJAcopy} alt="Malke Triple Destilado" />
                  <div className="container-descrip">
                    <h2 className="product-title">Drakon Triple Destilado</h2>
                    <p className="product-description">$39,00</p>
                  </div>
                  <div className="button-container">
                    <a href="#" className="Qbtn">
                      COMPRAR
                    </a>
                    <a href="#" className="Qbtn2">
                      CONOCE MÁS
                    </a>
                  </div>
                </div>
                <div className="producto-card">
                  <img src={assets.BOTELLAROJAcopy} alt="Malke Reposado" />
                  <div className="container-descrip">
                    <h2 className="product-title">Drakon Reposado</h2>
                    <p className="product-description">$50,00</p>
                  </div>
                  <div className="button-container">
                    <a href="#" className="Qbtn">
                      COMPRAR
                    </a>
                    <a href="#" className="Qbtn2">
                      CONOCE MÁS
                    </a>
                  </div>
                </div>
              </div>
            </section>
      <Footer/>
    </div>
  );
};

export default TripleDestilado;
