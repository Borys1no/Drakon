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
            <img src={assets.GifBuho} alt="Gif1"/>
          </div>
        </div>
      </section>
      {/* Productos */}
      <section>
        <div className="productos-header" style={{ marginTop: "100px" }}>
          <h3>Nuestros Productos</h3>
          <a href="#" className="btn">
            Tienda
          </a>
        </div>
        <div className="productos-carousel">
          <div className="producto-card">
            <img src={assets.Champage} alt="Malke Virgen" />
            <div className="container-descrip">
              <h2 className="product-title">Malke Virgen</h2>
              <p className="product-description">
                Elaborado exclusivamente del mosto de pitahaya manabita roja
                pulpa blanca cultivada en el cantón Rocafuerte, al menos dos
                destilados, embotellado y envasado en botella de vidrio o
                cerámica a 32% alc/vol (64 proof).
              </p>
            </div>
            <a href="#" className="Qbtn">
              Comprar
            </a>
          </div>
          <div className="producto-card">
            <img src={assets.Champage} alt="Malke Triple Destilado" />
            <div className="container-descrip">
              <h2 className="product-title">Malke Triple Destilado</h2>
              <p className="product-description">
                Elaborado exclusivamente del mosto de pitahaya manabita roja
                pulpa blanca cultivada en el cantón Rocafuerte, tres veces
                destilado, embotellado y envasado en botella de vidrio o
                cerámica a 32% alc/vol (64 proof).
              </p>
            </div>
            <a href="#" className="Qbtn">
              Comprar
            </a>
          </div>
          <div className="producto-card">
            <img src={assets.Champage} alt="Malke Reposado" />
            <div className="container-descrip">
              <h2 className="product-title">Malke Reposado</h2>
              <p className="product-description">
                Elaborado exclusivamente del mosto de pitahaya manabita roja
                pulpa blanca en el cantón Rocafuerte, con un reposo de al menos
                de tres meses en barrica de roble americano, envasado en botella
                de vidrio a 40% alc/vol (80 proof).
              </p>
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
          <div className="img-fabricacion">
            <img src={assets.Introduction} alt="Fabricacion" />
          </div>
          <div className="text-content">
            <p>
              El proceso de creación de Drakon se enfoca en seleccionar solo la
              mejor pitahaya de Manabí, preservando sus sabores únicos a través
              de un cuidadoso proceso de fermentación, destilación y filtrado.
              Este enfoque garantiza un destilado de la más alta calidad,
              orgullosamente hecho en Ecuador.
            </p>
            <a href="#" className="btn">
              Leer más
            </a>
          </div>
        </div>
      </section>
      {/* Cocteles */}
      <section className="cocteles" style={{ marginTop: "100px" }}>
        <h3>Cocteles</h3>
        <div className="cocteles-grid">
          <div className="coctel-card">
            <div className="coctel-front">
              <img src={assets.Coctel} alt="Drakon Rose Tonic" />
              <h4>Drakon Rose Tonic</h4>
            </div>
            <div className="coctel-back">
              <p>
                4 tiempos de Agua tónica de rosas, 2 oz de Drakon doble
                destilado, Hielo
              </p>
              <a href="#" className="btn-recetas">
                Ver la receta completa
              </a>
            </div>
          </div>
          <div className="coctel-card">
            <div className="coctel-front">
              <img src={assets.Coctel} alt="Drakon Tonic" />
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
              <img src={assets.Coctel} alt="Drakon Rasp Sour" />
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
