import React, { useState, useContext, useEffect } from "react";
import "./buyproduct.css"; // Archivo CSS importado
import { CartContext } from "../../contexts/CartContext"; // Importar el contexto del carrito
import { assets } from "../../assets/assets";
import Footer from "../Footer/Footer";
import { db } from "../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useTranslation } from "react-i18next";

const ProductPage = () => {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1); // Manejar la cantidad
  const { addToCart } = useContext(CartContext); // Traer la función del contexto del carrito
  const [products, setProducts] = useState([]);

  // Lista de imágenes del producto
  const productImages = [
    assets.BOTELLAROSAcopy,
    assets.Carrusel2,
    assets.Carrusel3,
  ];

  // Datos del producto actual

  useEffect(() => {
    const fetchProducts = async () => {
      const productsCollection = collection(db, "products");
      const productsSnapshot = await getDocs(productsCollection);
      const productsList = productsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Filtrar por el ID manualmente asignado
      const drakonDestilado = productsList.find((p) => p.id === "001");

      setProducts(productsList);
    };

    fetchProducts();
  }, []);

  const product = {
    id: 1,
    name: t("drakonDestilado"),
    price: 27,
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
    image;
  };

  // Función para agregar producto al carrito
  const handleAddToCart = () => {
    if (quantity > product.availableQuantity) {
      alert(
        "Stock insuficiente. Solo quedan disponibles" +
          product.availableQuantity +
          "unidades"
      );
      return;
    }
    addToCart(product, quantity);
    console.log("producto agregado al carritooo", product);
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
            {t("drakonDestiladoDescription")}
          </p>

          <div className="product-featuresP-container">
            <ul className="product-featuresP">
              <li>
                <strong>{t("view")}</strong> {t("drakonDestiladoView")}
              </li>
              <li>
                <strong>{t("taste")}</strong> {t("drakonDestiladoTaste")}
              </li>
              <li>
                <strong>{t("body")}</strong> {t("drakonDestiladoBody")}
              </li>
              <li>
                <strong>{t("aroma")}</strong> {t("drakonDestiladoAroma")}
              </li>
            </ul>
          </div>

          {/* Selector de cantidad */}
          <div className="Qquantity-container">
            <label htmlFor="quantity">{t("quantity")}:</label>
            <input
              className="input2"
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
            {t("addToCart")}
          </button>
        </div>
      </div>

      {/* Productos */}
      <section>
        <div className="productos-header" style={{ marginTop: "100px" }}>
          <h3> {t("ourProducts")} </h3>
        </div>
        <div className="productos-carousel">
          <div className="producto-card">
            <img src={assets.BOTELLAROSAcopy} alt="Malke Virgen" />
            <div className="container-descrip">
              <h2 className="product-title">{t("drakonDestilado")}</h2>
              <p className="product-description">$27,00</p>
            </div>
            <div className="button-container">
              <a href="/DrakonDestilado" className="Qbtn">
                {t("buy")}
              </a>
              <a href="/NuestraHistoria" className="Qbtn2">
                {t("learnMore")}
              </a>
            </div>
          </div>
          <div className="producto-card">
            <img src={assets.BOTELLAROJAcopy} alt="Malke Triple Destilado" />
            <div className="container-descrip">
              <h2 className="product-title">{t("drakonTripleDestilado")}</h2>
              <p className="product-description">$39,00</p>
            </div>
            <div className="button-container">
              <a href="/TripleDestilado" className="Qbtn">
                {t("buy")}
              </a>
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

export default ProductPage;
