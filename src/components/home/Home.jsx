import React from "react";
import "./Home.css";
import Footer from "../Footer/Footer";
import { assets } from "../../assets/assets";
import ImgBg from "../img-animation/ImgBg";

const Home = () => {
  return (
    <div className="home-container">
      <ImgBg />
      {/* Banner */}
      <div className="banner"></div>
      {/* Introducción */}
      <section className="introduction">
        <div className="intro-img">
          <img src={assets.FotoSeba} alt="Imagen de introduccion" />
        </div>
        <div className="intro-text">
          <h3>Un destilado a la perfección</h3>
          <p>
            Drakon, como marca líder de destilados premium, reafirma su
            compromiso con la innovación, calidad, sostenibilidad,
            responsabilidad social y excelencia global. Cada etapa de nuestro
            proceso de elaboración está cuidadosamente diseñada para garantizar
            productos de la más alta calidad, representando con orgullo la
            identidad ecuatoriana en los mercados internacionales.
          </p>
          <div className="buho">
            <img src={assets.GifBuho} alt="Gif1" />
          </div>
        </div>
      </section>
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
            <a href="#" className="Qbtn">
              Comprar
            </a>
          </div>
          <div className="producto-card">
            <img src={assets.BOTELLAROJAcopy} alt="Malke Triple Destilado" />
            <div className="container-descrip">
              <h2 className="product-title">Drakon Triple Destilado</h2>
              <p className="product-description">$39,00</p>
            </div>
            <a href="#" className="Qbtn">
              Comprar
            </a>
          </div>
          <div className="producto-card">
            <img src={assets.BOTELLAROJAcopy} alt="Malke Reposado" />
            <div className="container-descrip">
              <h2 className="product-title">Drakon Reposado</h2>
              <p className="product-description">$50,00</p>
            </div>
            <a href="#" className="Qbtn">
              Comprar
            </a>
          </div>
        </div>
      </section>
      {/* Proceso de fabricación */}
      <section className="fabricacion" style={{ marginTop: "100px" }}>
        <h3>Proceso de Fabricación</h3>
        <div className="fabricacion-content">
          <div className="text-content">
            <p>
              El proceso de Drakon une tradición e innovación, comenzando con la
              selección de la mejor pitahaya ecuatoriana cultivada en el cantón
              Rocafuerte, Manabí. La fermentación, destilación y filtración son
              ejecutadas con precisión para garantizar pureza y equilibrio. Cada
              botella es un destilado excepcional que refleja excelencia y
              orgullo nacional.
            </p>
          </div>
        </div>
      </section>
      {/* Cocteles */}
      <section className="cocteles" style={{ marginTop: "100px" }}>
        <h3>Cocteles</h3>
        <div className="cocteles-grid">
          <div className="coctel-card">
            <div className="coctel-front">
              <img src={assets.coctelRose} alt="Drakon Tonic" />
              <h4>Drakon Tonic</h4>
            </div>
            <div className="coctel-back">
              <h4>Drakon Tonic</h4>
              <p>
                4 tiempos de agua tónica britvic, 2 oz de Drakon doble
                destilado, Hielo
              </p>
              <a href="#" className="btn-recetas">
                Ver la receta completa
              </a>
            </div>
          </div>

          <div className="coctel-card">
            <div className="coctel-front">
              <img src={assets.coctelTonic} alt="Drakon Tonic" />
              <h4>Drakon Tonic</h4>
            </div>
            <div className="coctel-back">
              <p>
                4 tiempos de agua tónica britvic, 2 oz de Drakon doble
                destilado, Hielo
              </p>
              <a href="#" className="btn-recetas">
                Ver la receta completa
              </a>
            </div>
          </div>
          <div className="coctel-card">
            <div className="coctel-front">
              <img src={assets.coctelRasp} alt="Drakon Rasp Sour" />
              <h4>Drakon Rasp Sour</h4>
            </div>
            <div className="coctel-back">
              <p>
                3/4 oz de syrup simple, 3/4 oz de zumo de limón, 1 clara de
                huevo, 2 oz de Drakon, 6 frambuesas machacadas
              </p>
              <a href="#" className="btn-recetas">
                Ver la receta completa
              </a>
            </div>
          </div>
        </div>
        <a href="#" className="btn-coctel">
          Ver más
        </a>
      </section>
      <Footer />.
    </div>
  );
};

export default Home;
