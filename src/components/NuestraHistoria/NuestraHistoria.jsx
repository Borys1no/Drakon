import React from 'react';
import './NuestraHistoria.css'; // Asegúrate de crear este archivo con los estilos correspondientes

const NuestraHistoria = () => {
  return (
    <div className="historia-page-container">
      {/* Sección de Título */}
      <section className="historia-section">
        <h1>Nuestra Historia</h1>
        <p className="historia-text">
          La Felipa Fruit & Wine es la empresa pionera en la creación de Malke a nivel mundial. Fundada en 2019 como un anexo a la empresa agroindustrial La Felipa, la empresa ha crecido para posicionarse como un referente en la innovación de destilados en Ecuador y más allá.
        </p>
      </section>

      {/* Sección Hacienda La Felipa */}
      <section className="historia-section">
        <h2>Hacienda La Felipa</h2>
        <p className="historia-text">
          La Felipa, en honor a la abuela del dueño Luis Eduardo Velez, cuenta con 30 hectáreas de cultivo de pitahaya selenicereus Undatus manabita. Con 26,266 plantas de pitahaya pulpa blanca y cáscara roja, cada una cuidadosamente cultivada para obtener una cosecha de la más alta calidad.
        </p>
      </section>

      {/* Sección Misión y Visión */}
      <section className="historia-section">
        <h2>Nuestros Valores</h2>
        <h3>Visión</h3>
        <p className="historia-text">
          Ser reconocidos como líderes globales en la creación de destilados innovadores y de alta calidad, posicionando a Ecuador en el mapa mundial de las bebidas espirituosas.
        </p>
        <h3>Misión</h3>
        <p className="historia-text">
          Producir destilados premium únicos utilizando ingredientes ecuatorianos de la más alta calidad. Buscamos llevar el sabor de Ecuador al mundo, manteniendo siempre un enfoque en la sostenibilidad y responsabilidad social.
        </p>
      </section>

      {/* Sección de Valores */}
      <section className="historia-section">
        <h2>Valores</h2>
        <ul className="historia-values">
          <li><strong>Innovación:</strong> Desafiamos los límites de la industria de destilados, creando productos únicos como Drakon.</li>
          <li><strong>Calidad:</strong> Nuestro compromiso con los más altos estándares de producción y presentación.</li>
          <li><strong>Sostenibilidad:</strong> Implementamos prácticas agrícolas responsables.</li>
          <li><strong>Responsabilidad Social:</strong> Contribuimos al bienestar de nuestra comunidad local.</li>
          <li><strong>Excelencia Global:</strong> Competimos en los mercados más exigentes del mundo.</li>
        </ul>
      </section>

      {/* Sección de Creación de Drakon */}
      <section className="historia-section">
        <h2>Creación de Drakon</h2>
        <p className="historia-text">
          En 2021, durante la crisis de los contenedores, Juan Sebastián Vélez concibió la idea de crear un destilado premium a partir de la pitahaya para darle un nuevo valor a la fruta ecuatoriana. En 2023, tras estudiar destilería en Louisville, Kentucky, creó el primer destilado premium de pitahaya en el mundo: Drakon.
        </p>
      </section>

      {/* Sección Leyendas Cortas */}
      <section className="historia-section">
        <h2>Leyendas Cortas</h2>
        <h3>La Lechuza que no Podía Volar</h3>
        <p className="historia-text">
          En el corazón de Manabí, vivía una lechuza que no podía volar... (la historia completa).
        </p>
        <h3>El Pago a los Duendes</h3>
        <p className="historia-text">
          Cuenta la leyenda que los duendes crearon un elixir mágico... (la historia completa).
        </p>
      </section>
    </div>
  );
};

export default NuestraHistoria;
