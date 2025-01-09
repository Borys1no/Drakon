import React, { useState } from 'react';
import './Procesos.css'; 
import Footer from '../Footer/Footer';
import { assets } from '../../assets/assets'; 
import {CircleArrowRight, CircleArrowLeft} from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "SELECCIÓN DE LA FRUTA",
    description: "Solo se elige la mejor pitahaya roja de Manabí, garantizando una materia prima de calidad superior.",
    image: assets.Proceso1, 
  },
  {
    id: 2,
    title: "PREPARACIÓN DE LA PULPA",
    description: "La pitahaya es cuidadosamente pelada y su pulpa es extraída para conservar sus sabores frescos y únicos.",
    image: assets.Proceso2, 
  },
  {
    id: 3,
    title: "FERMENTACIÓN CONTROLADA",
    description: "La pulpa de pitahaya se fermenta, transformando sus azúcares naturales en alcohol, desarrollando el perfil aromático característico de Drakon.",
    image: assets.Proceso3, 
  },
  {
    id: 4,
    title: "DESTILACIÓN PRECISA",
    description: "El destilado se somete a un proceso de purificación en alambiques, capturando los aromas y sabores únicos de la pitahaya.",
    image: assets.Proceso4, 
  },
  {
    id: 5,
    title: "FILTRADO Y EMBOTELLADO",
    description: "El destilado se ltra para tener una pureza excepcional antes de ser etiquetado y embotellado cuidadosamente.",
    image: assets.Proceso5, 
  }
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
        <h2 className="process-title">NUESTRO PROCESO</h2>
        <div className="process-line"></div>

        <div className="process-step-container">
          <button className="carousel-btn left-arrow" onClick={prevStep}>
             <CircleArrowRight size={80} color="red"/>
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
