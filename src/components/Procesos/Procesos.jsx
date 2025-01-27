import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Procesos.css'; 
import Footer from '../Footer/Footer';
import { assets } from '../../assets/assets'; 
import { CircleArrowRight, CircleArrowLeft } from 'lucide-react';

const steps = [
  {
    id: 1,
    titleKey: "fruitSelection",
    descriptionKey: "fruitSelectionDescription",
    image: assets.Proceso1, 
  },
  {
    id: 2,
    titleKey: "pulpPreparation",
    descriptionKey: "pulpPreparationDescription",
    image: assets.Proceso2, 
  },
  {
    id: 3,
    titleKey: "controlledFermentation",
    descriptionKey: "controlledFermentationDescription",
    image: assets.Proceso3, 
  },
  {
    id: 4,
    titleKey: "preciseDistillation",
    descriptionKey: "preciseDistillationDescription",
    image: assets.Proceso4, 
  },
  {
    id: 5,
    titleKey: "filteringBottling",
    descriptionKey: "filteringBottlingDescription",
    image: assets.Proceso5, 
  }
];

const Procesos = () => {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prevStep) => (prevStep + 1) % steps.length);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => (prevStep - 1 + steps.length) % steps.length);
  };

  return (
    <div className="procesos-page-container">
      {/* Global background */}
      <img className="background-imageGris" src={assets.SLIDES2copy} alt="SLIDES2copy" />

      <section className="process-carousel">
        <h2 className="process-title">{t('ourProcess')}</h2>
        <div className="process-line"></div>

        <div className="process-step-container">
          <button className="carousel-btn left-arrow" onClick={prevStep}>
            <CircleArrowLeft strokeWidth={1} size={60} color="#CD528F" />
          </button>

          <div className="process-step">
            <img src={steps[currentStep].image} alt={t(steps[currentStep].titleKey)} className="process-img" />
            <div className="process-step-details">
              <h3>{t(steps[currentStep].titleKey)}</h3>
              <p>{t(steps[currentStep].descriptionKey)}</p>
            </div>
          </div>

          <button className="carousel-btn right-arrow" onClick={nextStep}>
            <CircleArrowRight strokeWidth={1} size={60} color="#CD528F" />
          </button>
        </div>
      </section>
      <section>
        <div className="container-Equipo">
          <div className="nuestro-equipo">
            <h2 className="process-title">{t('ourTeam')}</h2>
            <div className="eq-card">
              <img src={assets.Jannel} alt="Jannel" />
              <h3>{t('jannellMoraga')}</h3>
              <p>{t('jannellMoragaDescription')}</p>
            </div>
            <div className="eq-card">
              <img src={assets.Carlos} alt="Carlos" />
              <h3>{t('carlosPastenes')}</h3>
              <p>{t('carlosPastenesDescription')}</p>
            </div>
            <div className="eq-card">
              <img src={assets.Antonello} alt="Antonello" />
              <h3>{t('antonelloToala')}</h3>
              <p>{t('antonelloToalaDescription')}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Procesos;
