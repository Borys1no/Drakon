import React, { useState } from 'react';
import './NuestraHistoria.css'; 
import Footer from '../Footer/Footer';
import { assets } from '../../assets/assets'; 

const steps = [
  {
    id: 1,
    title: "Selección de la Fruta",
    description: "Solo se elige la mejor pitahaya roja de Manabí, garantizando una materia prima de calidad superior.",
    image: assets.N1, // replace with the actual path for agave image
  },
  {
    id: 2,
    title: "Preparación de la Pulpa",
    description: "La pitahaya es cuidadosamente pelada y su pulpa es extraída para conservar sus sabores frescos y únicos.",
    image: assets.N2, // replace with the actual path for cooking image
  },
  {
    id: 3,
    title: "Fermentación",
    description: "La pulpa de pitahaya se fermenta, transformando sus azúcares naturales en alcohol, desarrollando el perfil aromático característico de Drakon.",
    image: assets.N3, // replace with the actual path for extraction image
  },
  {
    id: 4,
    title: "Destilación",
    description: "El destilado se somete a un proceso de purificación en alambiques, capturando los aromas y sabores únicos de la pitahaya.",
    image: assets.N4, // replace with the actual path for extraction image
  },
  {
    id: 5,
    title: "Reposo o Envejecimiento",
    description: "Algunas versiones de Drakon se maduran en barricas de roble, añadiendo complejidad y suavidad al destilado.",
    image: assets.N5, // replace with the actual path for extraction image
  },
  {
    id: 6,
    title: "Filtrado y Embotellado",
    description: "El destilado se filtra para obtener una pureza excepcional antes de ser embotellado, listo para representar el orgullo de Manabí y Ecuador.",
    image: assets.N6, // replace with the actual path for extraction image
  },
  // Add more steps as needed
];

const NuestraHistoria = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prevStep) => (prevStep + 1) % steps.length);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => (prevStep - 1 + steps.length) % steps.length);
  };

  return (
    <div className="historia-page-container">
      <section className="historia-title-section">
        <h1 className="historia-main-title">Nuestra Historia</h1>
      </section>

      <section className="historia-section historia-alternating">
        <div className="historia-text-left">
          <h2 className="historia-subtitle">Innovación en Tiempos de Crisis</h2>
          <p className="historia-text">
          La concepción de Drakon se remonta al año 2021, cuando Juan Sebastián Vélez Reyes, actual CEO y fundador de Drakon, estaba cursando sus pasantías como gerente de ventas en Agroindustrial La Felipa. Durante este período, una crisis conocida como la crisis de los contenedores impactó profundamente al mercado de la pitahaya. La sobreproducción de esta fruta exótica, combinada con dificultades para acceder al principal mercado exportador, Estados Unidos, resultó en pérdidas masivas para los productores de pitahaya. 
          Consciente de las vulnerabilidades del sector productor y del carácter perecedero de la fruta, Vélez comenzó a idear una solución innovadora: crear un producto de calidad premium, único y duradero, que añadiera valor a la pitahaya, transformando su destino en los mercados internacionales. Fue en este momento crucial cuando nació el concepto de Drakon, marcando el inicio de un proyecto que cambiaría el panorama de la industria de bebidas espirituosas en Ecuador.
          </p>
        </div>
        <div className="historia-image-right">
          <img src={assets.NuestraHistoriaEJEM} alt="Hacienda La Felipa" className="historia-img" />
        </div>
      </section>

      {/* New Step-by-Step Process Section */}
      <section className="process-carousel">
        <h2 className="process-title">Nuestro Proceso</h2>
        <div className="process-line"></div>

        {/* Carousel with arrows on either side */}
        <div className="process-step-container">
        <button className="carousel-btn left-arrow" onClick={prevStep}>
          <img src={assets.FlechaIzquierda} alt="Flecha Izquierda" className="arrow-icon" />
        </button>

        <div className="process-step">
          <img src={steps[currentStep].image} alt={steps[currentStep].title} className="process-img" />
          <div className="process-step-details">
            <h3>{steps[currentStep].title}</h3>
            <p>{steps[currentStep].description}</p>
          </div>
        </div>

        <button className="carousel-btn right-arrow" onClick={nextStep}>
          <img src={assets.FlechaDerecha} alt="Flecha Derecha" className="arrow-icon" />
        </button>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default NuestraHistoria;
