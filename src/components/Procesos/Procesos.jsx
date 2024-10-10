import React, { useState } from 'react';
import './Procesos.css'; 
import Footer from '../Footer/Footer';
import { assets } from '../../assets/assets'; 

const steps = [
  {
    id: 1,
    title: "Selección de la Fruta",
    description: "Solo se elige la mejor pitahaya roja de Manabí, garantizando una materia prima de calidad superior.",
    image: assets.N1, 
  },
  {
    id: 2,
    title: "Preparación de la Pulpa",
    description: "La pitahaya es cuidadosamente pelada y su pulpa es extraída para conservar sus sabores frescos y únicos.",
    image: assets.N2, 
  },
  {
    id: 3,
    title: "Fermentación",
    description: "La pulpa de pitahaya se fermenta, transformando sus azúcares naturales en alcohol, desarrollando el perfil aromático característico de Drakon.",
    image: assets.N3, 
  },
  {
    id: 4,
    title: "Destilación",
    description: "El destilado se somete a un proceso de purificación en alambiques, capturando los aromas y sabores únicos de la pitahaya.",
    image: assets.N4, 
  },
  {
    id: 5,
    title: "Reposo o Envejecimiento",
    description: "Algunas versiones de Drakon se maduran en barricas de roble, añadiendo complejidad y suavidad al destilado.",
    image: assets.N5, 
  },
  {
    id: 6,
    title: "Filtrado y Embotellado",
    description: "El destilado se filtra para obtener una pureza excepcional antes de ser embotellado, listo para representar el orgullo de Manabí y Ecuador.",
    image: assets.N6, 
  },
];

const Procesos = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prevStep) => (prevStep + 1) % steps.length);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => (prevStep - 1 + steps.length) % steps.length);
  };

  return (
    <div className="procesos-page-container">

      <section className="process-carousel">
        <h2 className="process-title">Nuestro Proceso</h2>
        <div className="process-line"></div>

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

export default Procesos;
