import React from 'react';
import './NuestraHistoria.css'; // Asegúrate de crear este archivo con los estilos correspondientes
import { assets } from '../../assets/assets'; // Reutilizar imágenes de assets

const NuestraHistoria = () => {
  return (
    <div className="historia-page-container">
      {/* Título Principal Centrado */}
      <section className="historia-title-section">
        <h1 className="historia-main-title">Nuestra Historia</h1>
      </section>

      {/* Sección La Felipa */}
      <section className="historia-section historia-alternating">
        <div className="historia-text-left">
          <h2>Proposito</h2>
          <p>
            La Felipa Fruit & Wine es la empresa pionera en la creación de Malke a nivel mundial. Fundada en 2019 como un anexo a la empresa agroindustrial La Felipa, la empresa ha crecido para posicionarse como un referente en la innovación de destilados en Ecuador y más allá.
          </p>
        </div>
        <div className="historia-image-right">
          <img src={assets.Trago} alt="Hacienda La Felipa" className="historia-img" />
        </div>
      </section>

      {/* Sección Hacienda La Felipa */}
      <section className="historia-section historia-alternating">
        <div className="historia-image-left">
          <img src={assets.Champage} alt="Hacienda La Felipa" className="historia-img" />
        </div>
        <div className="historia-text-right">
          <h2>Hacienda La Felipa</h2>
          <p>
            La Felipa, en honor a la abuela del dueño Luis Eduardo Velez, cuenta con 30 hectáreas de cultivo de pitahaya selenicereus Undatus manabita. Con 26,266 plantas de pitahaya pulpa blanca y cáscara roja, cada una cuidadosamente cultivada para obtener una cosecha de la más alta calidad.
          </p>
        </div>
      </section>

      {/* Sección Misión y Visión */}
      <section className="historia-section historia-alternating">
        <div className="historia-text-left">
          <h2>Nuestros Valores</h2>
          <h3>Visión</h3>
          <p>
            Ser reconocidos como líderes globales en la creación de destilados innovadores y de alta calidad, posicionando a Ecuador en el mapa mundial de las bebidas espirituosas.
          </p>
          <h3>Misión</h3>
          <p>
            Producir destilados premium únicos utilizando ingredientes ecuatorianos de la más alta calidad, llevando el sabor de Ecuador al mundo, con un enfoque en sostenibilidad.
          </p>
        </div>
        <div className="historia-image-right">
          <img src={assets.Champage} alt="Valores" className="historia-img" />
        </div>
      </section>

      {/* Sección Valores */}
      <section className="historia-section historia-alternating">
        <div className="historia-image-left">
          <img src={assets.Trago} alt="Valores" className="historia-img" />
        </div>
        <div className="historia-text-right">
          <h2>Valores</h2>
          <ul className="historia-values">
            <li><strong>Innovación:</strong> Desafiamos los límites de la industria de destilados, creando productos únicos como Drakon.</li>
            <li><strong>Calidad:</strong> Nuestro compromiso con los más altos estándares de producción y presentación.</li>
            <li><strong>Sostenibilidad:</strong> Implementamos prácticas agrícolas responsables.</li>
            <li><strong>Responsabilidad Social:</strong> Contribuimos al bienestar de nuestra comunidad local.</li>
            <li><strong>Excelencia Global:</strong> Competimos en los mercados más exigentes del mundo.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default NuestraHistoria;
