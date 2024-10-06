import React from 'react';
import './NuestraHistoria.css'; // Asegúrate de tener los estilos correspondientes
import Footer from '../Footer/Footer';
import { assets } from '../../assets/assets'; 

const NuestraHistoria = () => {
  return (
    <div className="historia-page-container">
      {/* Título Principal Centrado */}
      <section className="historia-title-section">
        <h1 className="historia-main-title">Nuestra Historia</h1>
      </section>

      {/* Sección Proposito */}
      <section className="historia-section historia-alternating">
        <div className="historia-text-left">
          <h2 className="historia-subtitle">Proposito</h2>
          <p className="historia-text">
            La Felipa Fruit & Wine es la empresa pionera en la creación de Malke a nivel mundial. Fundada en 2019 como un anexo a la empresa agroindustrial La Felipa, la empresa ha crecido para posicionarse como un referente en la innovación de destilados en Ecuador y más allá.
          </p>
        </div>
        <div className="historia-image-right">
          <img src={assets.Trago} alt="Hacienda La Felipa" className="historia-img" />
        </div>
      </section>

      {/* Otras secciones */}
      {/* Similar a lo anterior, repetir la estructura para otras secciones */}
      
      <Footer/>
    </div>
  );
};

export default NuestraHistoria;
