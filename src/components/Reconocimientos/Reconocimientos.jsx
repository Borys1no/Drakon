import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Reconocimientos.css'; 
import { assets } from '../../assets/assets'; 
import Footer from '../Footer/Footer';

const Reconocimientos = () => {
  const { t } = useTranslation();
  const [selectedMedalla, setSelectedMedalla] = useState(null); // Track which medalla is clicked
  const [isAnimating, setIsAnimating] = useState(false); // Control the animation state

  const medallas = [
    { id: 1, image: assets.medalla8, titleKey: 'melbourneSpirits2024USA', descriptionKey: 'melbourneSpirits2024USADescription' },
    { id: 2, image: assets.medalla5, titleKey: 'melbourneSpirits2024Gold', descriptionKey: 'melbourneSpirits2024GoldDescription' },
    { id: 3, image: assets.medalla4, titleKey: 'melbourneSpirits2024Bronze', descriptionKey: 'melbourneSpirits2024BronzeDescription' },
    { id: 4, image: assets.medalla9, titleKey: 'chinaCWSA2024DoubleGold', descriptionKey: 'chinaCWSA2024DoubleGoldDescription' },
    { id: 5, image: assets.medalla10, titleKey: 'chinaCWSA2024Silver', descriptionKey: 'chinaCWSA2024SilverDescription' },
    { id: 6, image: assets.medalla11, titleKey: 'ecuadorGourmet2024Gold', descriptionKey: 'ecuadorGourmet2024GoldDescription' },
    { id: 7, image: assets.medalla6, titleKey: 'englandSpecialty2024Silver', descriptionKey: 'englandSpecialty2024SilverDescription' },
    { id: 8, image: assets.medalla6, titleKey: 'englandSpecialty2024Silver', descriptionKey: 'englandSpecialty2024SilverDescription' },
    { id: 9, image: assets.medalla1, titleKey: 'singapore2024Silver', descriptionKey: 'singapore2024SilverDescription' },
    { id: 10, image: assets.medalla3, titleKey: 'michelangelo2024Gold', descriptionKey: 'michelangelo2024GoldDescription' },
    { id: 11, image: assets.medalla2, titleKey: 'michelangelo2024DoubleGold', descriptionKey: 'michelangelo2024DoubleGoldDescription' },
    { id: 12, image: assets.medalla7, titleKey: 'lasVegasTAG2024Gold', descriptionKey: 'lasVegasTAG2024GoldDescription' },
  ];

  const openModal = (medalla) => {
    setSelectedMedalla(medalla);
    setIsAnimating(true);
  };

  const closeModal = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setSelectedMedalla(null);
    }, 300); // Match animation duration
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="reconocimientos-container">
      <img className="background-imageNegro" src={assets.FondoNegro} alt="FondoNegro" />

      <div className="reconocimientos-grid">
        {medallas.map((medalla) => (
          <div key={medalla.id} className="medalla-item" onClick={() => openModal(medalla)}>
            <img src={medalla.image} alt={t(medalla.titleKey)} className="medalla-img" loading="lazy"/>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedMedalla && (
        <div className={`modal-overlay ${isAnimating ? 'open' : ''}`} onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closeModal}>&times;</span>
            <img src={selectedMedalla.image} alt={t(selectedMedalla.titleKey)} className="modal-medalla-img" loading="lazy"/>
            <h2>{t(selectedMedalla.titleKey)}</h2>
            <p>{t(selectedMedalla.descriptionKey)}</p>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Reconocimientos;
