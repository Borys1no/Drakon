import React, { useState, useEffect } from 'react';
import './Reconocimientos.css'; 
import { assets } from '../../assets/assets'; 
import Footer from '../Footer/Footer';

const Reconocimientos = () => {

  <img className="background-imageGris" src={assets.FondoNegro} alt="FondoNegro" />

  const [selectedMedalla, setSelectedMedalla] = useState(null); // Track which medalla is clicked
  const [isAnimating, setIsAnimating] = useState(false); // Control the animation state

  const medallas = [
    { id: 1, image: assets.medalla8, title: 'Melbourne International Spirits Competition 2024 ', description: 'Reconocimiento USA Licor del año' },
    { id: 2, image: assets.medalla5, title: 'Melbourne International Spirits Competition 2024 ', description: 'Medalla Oro: Drakon triple destilado' },
    { id: 3, image: assets.medalla4, title: 'Melbourne International Spirits Competition 2024 ', description: 'Medalla Bronce: Drakon destilado' },
    { id: 4, image: assets.medalla9, title: 'China: CWSA 2024', description: 'Medalla Doble oro: Drakon destilado' },
    { id: 5, image: assets.medalla10, title: 'China: CWSA 2024', description: 'Medalla Plata: Drakon triple destilado' },
    { id: 6, image: assets.medalla11, title: 'Ecuador: Premios Gourmet Ecuador 2024 ', description: 'Medalla Oro: Drakon triple destilado y Medalla Oro: Drakon destilado' },
    { id: 7, image: assets.medalla6, title: 'England: The Specialty Spirits Masters 2024', description: 'Medalla Plata: Drakon triple destilado y Medalla Plata: Drakon reposado' },
    { id: 8, image: assets.medalla6, title: 'England: The Specialty Spirits Masters 2024', description: 'Medalla Plata: Drakon triple destilado y Medalla Plata: Drakon reposado' },
    { id: 9, image: assets.medalla1, title: 'Singapore World Spirits Competition 2024', description: 'Medalla Plata: Drakon triple destilado' },
    { id: 10, image: assets.medalla3, title: 'Michelangelo International Wine & Spirits Awards 2024', description: 'Medalla Oro: Drakon triple destilado' },
    { id: 11, image: assets.medalla2, title: 'Michelangelo International Wine & Spirits Awards 2024', description: 'Medalla Doble oro: Drakon destilado' },
    { id: 12, image: assets.medalla7, title: 'Las Vegas: Tag Global Spirits Awards 2024', description: 'Medalla Oro: Drakon triple destilado' },

    
    
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
      <img className="background-imageNegro" src={assets.FondoNegro} alt="FondoNegro" />

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
