import React, { useState, useEffect } from 'react';
import './Reconocimientos.css'; 
import { assets } from '../../assets/assets'; 
import Footer from '../Footer/Footer';

const Reconocimientos = () => {
  const [selectedMedalla, setSelectedMedalla] = useState(null); // Track which medalla is clicked
  const [isAnimating, setIsAnimating] = useState(false); // Control the animation state

  const medallas = [
    { id: 1, image: assets.medalla, title: 'Medalla 1', description: 'Medalla de Oro en el TAG Global Spirit Awards, Las Vegas, Estados Unidos, para el triple destilado.' },
    { id: 2, image: assets.medalla, title: 'Medalla 2', description: 'Medalla de Plata en el Singapore World Spirits Competition, Singapur, para el triple destilado.' },
    { id: 3, image: assets.medalla, title: 'Medalla 3', description: 'Medalla de Oro en los Premios Gourmet de Ecuador, para el triple destilado.' },
    { id: 4, image: assets.medalla, title: 'Medalla 4', description: 'Medalla de Oro en los Premios Gourmet de Ecuador, para el doble destilado.' },
    { id: 5, image: assets.medalla, title: 'Medalla 5', description: 'Medalla de Oro en el Melbourne International Spirits Competition, Australia, para el triple destilado.' },
    { id: 6, image: assets.medalla, title: 'Medalla 6', description: 'Licor Americano del Año en el Melbourne International Spirits Competition, para el triple destilado.' },
    { id: 7, image: assets.medalla, title: 'Medalla 7', description: 'Medalla de Bronce en el Melbourne International Spirits Competition, para el doble destilado.' },
    { id: 8, image: assets.medalla, title: 'Medalla 8', description: 'Medalla de Doble oro en el China wine and spirits awards (CWSA), para el doble destilado' },
    { id: 9, image: assets.medalla, title: 'Medalla 9', description: 'Medalla de plata en el China wine and spirits awards (CWSA), para el triple destilado' },
    { id: 10, image: assets.medalla, title: 'Medalla 10', description: 'Medalla de doble oro en el Michelangelo international wine & spirits awards (Sudafrica) para el doble destilado' },
    { id: 11, image: assets.medalla, title: 'Medalla 11', description: 'Medalla de oro en el Michelangelo international wine & spirits awards (Sudafrica) para el triple destilado' },
    { id: 12, image: assets.medalla, title: 'Medalla 12', description: 'Emprendimiento innovador del año Lux awards' },
  ];

  // Function to open modal with animation
  const openModal = (medalla) => {
    setSelectedMedalla(medalla);
    setIsAnimating(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setSelectedMedalla(null); // After animation ends, reset modal
    }, 300); // Match animation duration
  };

  // Close modal on Escape key press
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
      <h1 className="reconocimientos-title">Reconocimientos de Drakon</h1>

      <div className="reconocimientos-grid">
        {medallas.map((medalla) => (
          <div key={medalla.id} className="medalla-item" onClick={() => openModal(medalla)}>
            <img src={medalla.image} alt={medalla.title} className="medalla-img" />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedMedalla && (
        <div className={`modal-overlay ${isAnimating ? 'open' : ''}`} onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closeModal}>&times;</span>
            <img src={selectedMedalla.image} alt={selectedMedalla.title} className="modal-medalla-img" />
            <h2>{selectedMedalla.title}</h2>
            <p>{selectedMedalla.description}</p>
          </div>
        </div>
      )}
      <Footer />
    </div>
    
  );
};

export default Reconocimientos;
