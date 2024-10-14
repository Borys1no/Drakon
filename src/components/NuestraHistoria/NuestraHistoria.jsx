import React from 'react';
import './NuestraHistoria.css'; 
import Footer from '../Footer/Footer';
import { assets } from '../../assets/assets'; 

const NuestraHistoria = () => {
  return (
    <div className="historia-page-container">
      <section className="historia-title-section">
        <h1 className="historia-main-title">Nuestra Historia</h1>
      </section>

      <section className="historia-section historia-alternating">
        <div className="historia-text-left">
          <h2 className="historia-subtitle">Innovación en Tiempos de Crisis</h2>
          <p className="historia-text">
            La concepción de Drakon se remonta al año 2021, cuando Juan Sebastián Vélez Reyes, actual CEO y fundador de Drakon, estaba cursando sus pasantías como gerente de ventas en Agroindustrial La Felipa. Durante este período, una crisis conocida como la crisis de los contenedores impactó profundamente al mercado de la pitahaya. 
            La sobreproducción de esta fruta exótica, combinada con dificultades para acceder al principal mercado exportador, Estados Unidos, resultó en pérdidas masivas para los productores de pitahaya. Consciente de las vulnerabilidades del sector productor y del carácter perecedero de la fruta, Vélez comenzó a idear una solución innovadora.
          </p>
        </div>
        <div className="historia-image-right">
          <img src={assets.NuestraHistoriaEJEM} alt="Hacienda La Felipa" className="historia-img" />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NuestraHistoria;
