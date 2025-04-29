import React, { useState, useContext, useEffect } from "react";
import "./DrakonTDestilado.css"; // Archivo CSS importado
import { CartContext } from "../../contexts/CartContext"; // Importar el contexto del carrito
import { assets } from "../../assets/assets";
import Footer from "../Footer/Footer";
import { useTranslation } from "react-i18next";

const TripleDestilado = () => {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1); // Manejar la cantidad
  const { addToCart } = useContext(CartContext); // Traer la función del contexto del carrito

  // Lista de imágenes del producto
  const productImages = [
    assets.BOTELLAROJAcopy,
    assets.CTDestilado2,
    assets.CTDestilado1,
  ];

  // Datos del producto actual
  const product = {
    id: 1,
    name: t("drakonTripleDestilado"),
    price: 39,
    image: assets.Trago,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % productImages.length
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [productImages.length]);

  // Función para cambiar la imagen principal al hacer clic en una imagen pequeña
  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
  };

  // Función para agregar producto al carrito
  const handleAddToCart = () => {
    addToCart(product, quantity); // Llama a la función y pasa el producto y cantidad
  };

  return (
    <div className="Qproduct-page-container">
      {/* Fondo global */}
      <img
        className="background-image2"
        src={assets.SLIDES2copy}
        alt="SLIDES2copy"
      />
      <div className="Qproduct-content">
        {/* Sección de la imagen principal y el carrusel a la izquierda */}
        <div className="Qproduct-image-section">
          <div className="Qproduct-image-container">
            <div
              className="Qcarousel-slides"
              style={{
                transform: `translateX(-${currentImageIndex * 100}%)`,
                transition: "transform 0.5s ease-in-out",
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
                className={`Qcarousel-image ${
                  currentImageIndex === index ? "Qactive" : ""
                }`}
                onClick={() => handleImageClick(index)}
              />
            ))}
          </div>
        </div>

        {/* Sección de detalles del producto a la derecha */}
        <div className="Qproduct-details">
          <h2 className="playfair-display-3TituloDrakonh1">{product.name}</h2>
          <p className="product-description-poppins">
            {t("drakonTripleDestiladoDescription")}
          </p>

          <div className="product-featuresP-container">
            <ul className="product-featuresP">
              <li>
                <strong>{t("view")}</strong> {t("drakonTripleDestiladoView")}
              </li>
              <li>
                <strong>{t("taste")}</strong> {t("drakonTripleDestiladoTaste")}
              </li>
              <li>
                <strong>{t("body")}</strong> {t("drakonTripleDestiladoBody")}
              </li>
              <li>
                <strong>{t("aroma")}</strong> {t("drakonTripleDestiladoAroma")}
              </li>
            </ul>
          </div>

          
        </div>
      </div>

      {/* Productos */}
      <section>
        <div className="productos-header" style={{ marginTop: "100px" }}>
          <h3>{t("ourProducts")}</h3>
        </div>
        <div className="productos-carousel">
          <div className="producto-card">
            <img src={assets.BOTELLAROSAcopy} alt="Malke Virgen" />
            <div className="container-descrip">
              <h2 className="product-title">{t("drakonDestilado")}</h2>
            </div>
            <div className="button-container">
              
              <a href="/NuestraHistoria" className="Qbtn2">
                {t("learnMore")}
              </a>
            </div>
          </div>
          <div className="producto-card">
            <img src={assets.BOTELLAROJAcopy} alt="Malke Triple Destilado" />
            <div className="container-descrip">
              <h2 className="product-title">{t("drakonTripleDestilado")}</h2>
            </div>
            <div className="button-container">
              <a href="/NuestraHistoria" className="Qbtn2">
                {t("learnMore")}
              </a>
            </div>
          </div>
          <div className="producto-card">
            <img
              className="proximamente"
              src={assets.BotellaRoja}
              alt="Malke Reposado"
              loading="lazy"
            />
            <div className="text-overlay">{t("comingSoon")}</div>
            <div className="container-descrip">
              <h2 className="product-title">{t("drakonReposado")}</h2>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default TripleDestilado;
