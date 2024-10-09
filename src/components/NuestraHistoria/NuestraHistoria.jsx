import React, { useState } from 'react';
import './NuestraHistoria.css'; 
import Footer from '../Footer/Footer';
import { assets } from '../../assets/assets'; 

const steps = [
  {
    id: 1,
    title: "Sourcing the Best Agaves",
    description: "Our process begins by selecting the best quality agaves, grown and matured over 6-7 years to reach peak quality.",
    image: assets.DrakonCarac, // replace with the actual path for agave image
  },
  {
    id: 2,
    title: "Slow Cooking",
    description: "The agaves are slow-cooked in ovens to extract the perfect blend of sugars.",
    image: assets.PitahayaBack, // replace with the actual path for cooking image
  },
  {
    id: 3,
    title: "Traditional Tahona Extraction",
    description: "After cooking, the agaves are crushed using traditional stone tahona extraction.",
    image: assets.InstagramRosa, // replace with the actual path for extraction image
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
            La concepción de Drakon se remonta al año 2021, cuando Juan Sebastián Vélez Reyes, CEO y fundador de Drakon, estaba cursando sus pasantías como gerente de ventas en Agroindustrial La Felipa...
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

        {/* Current Step Display */}
        <div className="process-step">
          <img src={steps[currentStep].image} alt={steps[currentStep].title} className="process-img" />
          <div className="process-step-details">
            <h3>{steps[currentStep].title}</h3>
            <p>{steps[currentStep].description}</p>
          </div>
        </div>

        {/* Carousel Navigation */}
        <div className="carousel-controls">
          <button onClick={prevStep} className="carousel-btn">←</button>
          <button onClick={nextStep} className="carousel-btn">→</button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NuestraHistoria;
