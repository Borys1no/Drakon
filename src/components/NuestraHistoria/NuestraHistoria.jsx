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
          <h2 className="historia-subtitle">Innovación en Tiempos de Crisis</h2>
          <p className="historia-text">
          La concepción de Drakon se remonta al año 2021, cuando Juan Sebastián Vélez Reyes, actual CEO y fundador de Drakon, estaba cursando sus pasantías como gerente de ventas en Agroindustrial La Felipa. Durante este período, una crisis conocida como la crisis de los contenedores impactó profundamente al mercado de la pitahaya. La sobreproducción de esta fruta exótica, combinada con dificultades para acceder al principal mercado exportador, Estados Unidos, resultó en pérdidas masivas para los productores de pitahaya.
Consciente de las vulnerabilidades del sector productor y del carácter perecedero de la fruta, Vélez comenzó a idear una solución innovadora: crear un producto de calidad premium, único y duradero, que añadiera valor a la pitahaya, transformando su destino en los mercados internacionales. Fue en este momento crucial cuando nació el concepto de Drakon, marcando el inicio de un proyecto que cambiaría el panorama de la industria de bebidas espirituosas en Ecuador.

          </p>
        </div>
        <div className="historia-image-right">
          <img src={assets.Trago} alt="Hacienda La Felipa" className="historia-img" />
        </div>
      </section>

      <section className="process-section">
        <div className="process-content">
          <h2>Nuestro Proceso</h2>
          <p>Entendemos el arte y el esfuerzo que conlleva la creación de una botella de nuestro galardonado producto.</p>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default NuestraHistoria;
